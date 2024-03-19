/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 权限实体
 */
export type PermissionEntity = {
    id?: string;
    /**
     * 排序
     */
    sort?: number;
    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 更新时间
     */
    updateTime?: string;
    /**
     * 版本号
     */
    version?: number;
    /**
     * 描述
     */
    description?: string;
    /**
     * 子权限
     */
    children?: Array<PermissionEntity>;
    /**
     * 权限名
     */
    name?: string;
    /**
     * 权限编码
     */
    code?: string;
    /**
     * 权限路径
     */
    path?: string;
    /**
     * 权限状态
     */
    status?: number;
    /**
     * 权限类型
     */
    type?: number;
    /**
     * 父id
     */
    parentId?: string;
};

