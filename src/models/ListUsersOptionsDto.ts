/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationDto } from './PaginationDto';
import type { SortingDto } from './SortingDto';

export type ListUsersOptionsDto = {
    /**
     * 分页配置
     */
    pagination?: PaginationDto;
    /**
     * 排序设置，可以设置多项按照多个字段进行排序
     */
    sort?: Array<SortingDto>;
    /**
     * 模糊搜索匹配的用户字段，可选值为：
     * - `phone`: 用户手机号，不能包含手机号区号，默认包含
     * - `email`: 用户邮箱，默认包含
     * - `name`: 用户名称，默认包含
     * - `username`: 用户名，默认包含
     * - `nickname`: 用户昵称，默认包含
     * - `id`: 用户 ID
     * - `company`: 公司
     * - `givenName`: 名
     * - `familyName`: 姓
     * - `middleName`: 中间名
     * - `preferredUsername`: Preferred Username
     * - `profile`: 个人资料
     * - `website`: 个人网站
     * - `address`: 地址
     * - `formatted`: 格式化地址
     * - `streetAddress`: 街道地址
     * - `postalCode`: 邮编号码
     *
     */
    fuzzySearchOn?: Array<'id' | 'phone' | 'email' | 'name' | 'username' | 'externalId' | 'nickname' | 'company' | 'givenName' | 'familyName' | 'middleName' | 'profile' | 'preferredUsername' | 'website' | 'address' | 'formatted' | 'streetAddress' | 'postalCode'>;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: boolean;
    /**
     * 是否获取 identities
     */
    withIdentities?: boolean;
    /**
     * 是否获取部门 ID 列表
     */
    withDepartmentIds?: boolean;
};
