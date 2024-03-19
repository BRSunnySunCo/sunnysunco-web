/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientPageEntity } from './ClientPageEntity';
import type { ImageEntity } from './ImageEntity';
/**
 * 部门实体
 */
export type DepartmentEntity = {
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
    children?: Array<DepartmentEntity>;
    /**
     * 部门名
     */
    name?: string;
    /**
     * 部门编码
     */
    code?: string;
    /**
     * 部门域名
     */
    domain?: string;
    /**
     * 部门页面
     */
    pages?: Array<ClientPageEntity>;
    /**
     * 部门地址
     */
    address?: string;
    /**
     * 部门电话
     */
    phone?: string;
    /**
     * 部门备注HTML
     */
    html?: string;
    icon?: ImageEntity;
    /**
     * 部门图标id
     */
    iconId?: string;
    /**
     * 父id
     */
    parentId?: string;
};

