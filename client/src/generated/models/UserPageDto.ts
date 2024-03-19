/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 用户分页查询参数
 */
export type UserPageDto = {
    /**
     * 页码
     */
    page: number;
    /**
     * 每页条数
     */
    size: number;
    /**
     * 排序字段
     */
    sort?: string;
    /**
     * 排序方式:asc, desc
     */
    order?: UserPageDto.order;
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
     * 账户锁定
     */
    locked?: boolean;
    /**
     * 部门id
     */
    departmentId?: string;
};
export namespace UserPageDto {
    /**
     * 排序方式:asc, desc
     */
    export enum order {
        ASC = 'ASC',
        DESC = 'DESC',
    }
}

