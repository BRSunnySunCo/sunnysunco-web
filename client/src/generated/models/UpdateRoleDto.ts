/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 更新角色实体
 */
export type UpdateRoleDto = {
    /**
     * 主键
     */
    id: string;
    /**
     * 排序
     */
    sort?: number;
    /**
     * 角色描述
     */
    description?: string;
    /**
     * 角色名
     */
    name: string;
    /**
     * 角色编码
     */
    code: string;
    /**
     * 角色权限ID列表
     */
    permissionIds?: Array<string>;
    /**
     * 角色菜单ID列表
     */
    menuIds?: Array<string>;
};

