<script lang="ts" setup>
import {useUser} from "~/pinia/modules/user";
import {computed, nextTick, onMounted, ref, watch} from "vue";
import {DepartmentEntity, Service} from "~/generated";
import {getMyDepartmentLogoUrl} from "~/api/HttpRequest";
import {useMenu} from "~/pinia/modules/menu";
import {useDark} from "@vueuse/core";
import UpdatePassword from "~/views/admin/pages/auth/user/UpdatePassword.vue";
import {useRoute, useRouter} from "vue-router";

const user = useUser();
const defaultDepartment = ref<DepartmentEntity>({});
const getDepartment = async () => {
  return Service.getMyDepartment().then((res) => {
    defaultDepartment.value = res.data as DepartmentEntity;
  });
};
onMounted(() => {
  void getDepartment();
});
const departmentLogoAndName = computed(() => {
  const result = {
    isShowLogo: false,
    isShowLogoName: false,
    logoUrl: '',
    logoName: ''
  }
  if (user.user?.department?.icon?.id || defaultDepartment.value.icon?.id) {
    result.isShowLogo = true;
    result.logoUrl = getMyDepartmentLogoUrl()
  } else {
    result.isShowLogo = false;
  }
  if (user.user?.department?.name) {
    result.isShowLogoName = true;
    result.logoName = user.user?.department?.name
  } else if (defaultDepartment.value.name) {
    result.isShowLogoName = true;
    result.logoName = defaultDepartment.value.name
  } else {
    result.isShowLogoName = false;
  }
  return result;
})
const menu = useMenu();

const login = () => {
  // 获取当前页面的url
  const url = window.location.href;
  window.location.href = `/login?redirect=${encodeURIComponent(url)}`;
}
const isBackend = computed(() => {
  if (user.user?.id === 'admin') {
    return true;
  }
  return user.user?.roles?.find(role => role.menus?.find(menu => menu.menuGroup === 'admin-master'))
})
const isDark = useDark()

const updatePasswordRef = ref<InstanceType<typeof UpdatePassword>>();

const clientPageList = computed(() => {
  return user.user?.department?.pages || defaultDepartment.value.pages || []
})

const route = useRoute();
const router = useRouter();

const activeMenu = ref(route.query.page as string || undefined);
const checkActiveMenu = (id: string) => {
  activeMenu.value = id;
  router.push({name: 'home', query: {page: id}})
}
// 页面初始化时，如果没有page参数，就默认选中第一个
watch(clientPageList, () => {
  if ((clientPageList.value.length > 0) && !route.query.page && route.name === 'app_home') {
    nextTick(() => {
      checkActiveMenu(clientPageList.value[0].id as string)
    })
  }
}, {immediate: true})
</script>

<template>
  <el-menu :default-active="activeMenu" :ellipsis="false" mode="horizontal">
    <el-menu-item @click="$router.push({name:'home'})">
      <el-image v-if="departmentLogoAndName.isShowLogo" :src="departmentLogoAndName.logoUrl"
                class="h-9 m-auto el-image-block"></el-image>
      <div v-if="departmentLogoAndName.isShowLogoName" class="title important-ml-4 font-bold font-size-6">
        {{ departmentLogoAndName.logoName }}
      </div>
    </el-menu-item>
    <el-menu-item v-for="page in clientPageList" :key="page.id" :index="page.id" :page="page.id"
                  @click="checkActiveMenu(page.id as string)">
      {{ page.name }}
    </el-menu-item>
    <div class="flex-grow"/>
    <el-switch v-model="isDark" active-action-icon="Sunny"
               class="mt-auto mb-auto mr-4" inactive-action-icon="Moon">
    </el-switch>
    <el-menu-item v-if="isBackend" @click="$router.replace({name:'admin_home'})">后台管理</el-menu-item>
    <el-sub-menu v-if="user.userToken" index="users">
      <template #title>{{ user.user?.username }}</template>
      <el-menu-item @click="updatePasswordRef?.openDialog">修改密码</el-menu-item>
      <update-password ref="updatePasswordRef"/>
      <el-menu-item @click="user.logout(()=>$router.replace({name:'home'}))">
        退出登录
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item v-if="(route.name!=='login')&&!user.userToken" @click="login">
      登录
    </el-menu-item>
  </el-menu>
</template>