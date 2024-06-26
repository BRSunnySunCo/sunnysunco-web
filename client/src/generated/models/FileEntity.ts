/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RoleEntity } from './RoleEntity';
/**
 * 文件实体类
 */
export type FileEntity = {
    id?: string;
    /**
     * 类型
     */
    type?: string;
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
     * 描述
     */
    description?: string;
    /**
     * 可访问该行数据的角色
     */
    accessRole?: Array<RoleEntity>;
    /**
     * 文件名称
     */
    name?: string;
    /**
     * 文件地址
     */
    url?: string;
    /**
     * 文件大小
     */
    size?: string;
    /**
     * 文件hash
     */
    hash?: string;
    /**
     * 文件状态
     */
    status?: string;
    /**
     * 文件后缀
     */
    suffix?: string;
    /**
     * 文件来源
     */
    source?: string;
    /**
     * 文件所在minio桶
     */
    bucket?: string;
};

