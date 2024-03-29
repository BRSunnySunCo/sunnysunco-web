import {RouteRecordRaw} from 'vue-router';

const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        name: 'home',
        redirect: {
            name: 'app_home'
        }
    },
    {
        path: '/app',
        component: () => import('~/views/app/pages/index.vue'),
        children: [
            // 根据情况修改首页 但是不要删除 AppHeader和CustomClientPage是搭配使用的。
            {
                path: '',
                name: 'app_home',
                components: {
                    default: () => import('~/views/app/layout/CustomClientPage.vue'),
                    header: () => import('~/views/app/layout/AppHeader.vue'),
                }
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('~/views/pages/Login.vue'),
    },
    {
        path: '/admin',
        component: () => import('~/views/admin/pages/index.vue'),
        children: [
            {
                path: '',
                name: 'admin_home',
                components: {
                    default: () => import('~/views/admin/layout/Home.vue'),
                    menu: () => import('~/views/admin/layout/Menu.vue'),
                    header: () => import('~/views/admin/layout/Header.vue'),
                }
            },
            {
                path: 'user',
                name: 'admin_user',
                components: {
                    default: () => import('~/views/admin/pages/auth/user/index.vue'),
                    menu: () => import('~/views/admin/layout/Menu.vue'),
                    header: () => import('~/views/admin/layout/Header.vue'),
                },
            },
            {
                path: 'role',
                name: 'admin_role',
                components: {
                    default: () => import('~/views/admin/pages/auth/role/index.vue'),
                    menu: () => import('~/views/admin/layout/Menu.vue'),
                    header: () => import('~/views/admin/layout/Header.vue'),
                },
            },
            {
                path: 'permission',
                name: 'admin_permission',
                components: {
                    default: () => import('~/views/admin/pages/auth/permission/index.vue'),
                    menu: () => import('~/views/admin/layout/Menu.vue'),
                    header: () => import('~/views/admin/layout/Header.vue'),
                },
            },
            {
                path: 'menu',
                name: 'admin_menu',
                components: {
                    default: () => import('~/views/admin/pages/auth/menu/index.vue'),
                    menu: () => import('~/views/admin/layout/Menu.vue'),
                    header: () => import('~/views/admin/layout/Header.vue'),
                },
            },
            {
                path: 'log',
                name: 'admin_log',
                components: {
                    default: () => import('~/views/admin/pages/information/log/index.vue'),
                    menu: () => import('~/views/admin/layout/Menu.vue'),
                    header: () => import('~/views/admin/layout/Header.vue'),
                },
            },
            {
                path: 'image',
                name: 'admin_image',
                components: {
                    default: () => import('~/views/admin/pages/information/image/index.vue'),
                    menu: () => import('~/views/admin/layout/Menu.vue'),
                    header: () => import('~/views/admin/layout/Header.vue'),
                },
            },
            {
                path: 'client-page',
                name: 'admin_client_page',
                components: {
                    default: () => import('~/views/admin/pages/auth/client-page/index.vue'),
                    menu: () => import('~/views/admin/layout/Menu.vue'),
                    header: () => import('~/views/admin/layout/Header.vue'),
                },
            },
            {
                path: 'department',
                name: 'admin_department',
                components: {
                    default: () => import('~/views/admin/pages/auth/department/index.vue'),
                    menu: () => import('~/views/admin/layout/Menu.vue'),
                    header: () => import('~/views/admin/layout/Header.vue'),
                },
            },
            {
                path: 'tag',
                name: 'admin_tag',
                components: {
                    default: () => import('~/views/admin/pages/information/tag/index.vue'),
                    menu: () => import('~/views/admin/layout/Menu.vue'),
                    header: () => import('~/views/admin/layout/Header.vue'),
                },
            }
        ]
    },
    {
        path: '/403',
        name: '403',
        component: () => import('~/views/pages/NoPermission.vue'),
    },
    {
        path: '/500',
        name: '500',
        component: () => import('~/views/pages/Error.vue'),
    },
    {
        path: '/404',
        name: '404',
        component: () => import('~/views/pages/NotFound.vue'),
    },
    {
        path: '/:catchAll(.*)*',
        redirect: {
            name: '404',
        },
    },
];
export default routes;