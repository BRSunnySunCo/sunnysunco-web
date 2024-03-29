/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DepartmentEntity } from './DepartmentEntity';
import type { ImageEntity } from './ImageEntity';
import type { RoleEntity } from './RoleEntity';
/**
 * 用户实体类
 */
export type UserEntity = {
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
     * 用户名
     */
    username?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 状态
     */
    status?: string;
    /**
     * 头像id
     */
    avatarId?: string;
    avatar?: ImageEntity;
    /**
     * 账户锁定
     */
    locked?: boolean;
    /**
     * 角色
     */
    roles?: Array<RoleEntity>;
    /**
     * 部门id
     */
    departmentId?: string;
    department?: DepartmentEntity;
};

