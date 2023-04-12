/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListUsersAdvancedFilterItemDto = {
    /**
     * 高级搜索指定的用户字段：
     * - `id`: 用户 ID
     * - `phone`: 手机号
     * - `email`: 邮箱
     * - `username`: 用户名
     * - `externalId`: 用户在外部系统的 ID
     * - `name`: 姓名
     * - `status`: 用户状态，可选值为 `Activated` 和 `Suspended`
     * - `gender`: 用户性别，可选值为 `M`（男性）、`F`（女性） 和 `U`（未知）
     * - `birthdate`: 出生日期
     * - `givenName`: 名
     * - `familyName`: 姓
     * - `preferredUsername`: Preferred Username
     * - `profile`: 个人资料
     * - `country`: 国家
     * - `province`: 省份
     * - `zoneinfo`: 时区
     * - `website`: 个人网站
     * - `address`: 地址
     * - `streetAddress`: 街道地址
     * - `company`: 公司
     * - `postalCode`: 邮政编码
     * - `formatted`: 格式化的地址
     * - `signedUp`: 注册时间
     * - `locale`: 语言信息
     * - `lastLogin`: 上次登录时间，为时间戳类型
     * - `loginsCount`: 登录次数，为数字类型
     * - `lastLoginApp`: 上次登录的应用 ID
     * - `userSource`: 用户来源，具体使用见示例
     * - `department`: 用户部门，具体使用见示例
     * - `loggedInApps`: 曾经登录过的应用，具体使用见示例
     * - `identity`: 用户外部身份源信息，具体使用见示例
     * - ... 其他自定义字段
     *
     */
    field: string;
    /**
     * 运算符，可选值为：
     * - `EQUAL`: 全等，适用于数字和字符串的全等匹配
     * - `NOT_EQUAL`: 不等于，适用于数字和字符串的匹配
     * - `CONTAINS`: 字符串包含
     * - `NOT_CONTAINS`: 字符串不包含
     * - `IS_NULL`: 为空
     * - `NOT_NULL`: 不为空
     * - `IN`: 为某个数组中的元素
     * - `GREATER`: 大于或等于，适用于数字、日期类型数据的比较
     * - `LESSER`: 小于或等于，适用于数字、日期类型数据的比较
     * - `BETWEEN`: 介于什么什么之间，适用于数字、日期类型数据的比较
     *
     */
    operator: ListUsersAdvancedFilterItemDto.operator;
    /**
     * 搜索值，不同的 `field` 对应的 `value` 类型可能不一样，详情见示例。
     */
    value?: any;
};

export namespace ListUsersAdvancedFilterItemDto {

    /**
     * 运算符，可选值为：
     * - `EQUAL`: 全等，适用于数字和字符串的全等匹配
     * - `NOT_EQUAL`: 不等于，适用于数字和字符串的匹配
     * - `CONTAINS`: 字符串包含
     * - `NOT_CONTAINS`: 字符串不包含
     * - `IS_NULL`: 为空
     * - `NOT_NULL`: 不为空
     * - `IN`: 为某个数组中的元素
     * - `GREATER`: 大于或等于，适用于数字、日期类型数据的比较
     * - `LESSER`: 小于或等于，适用于数字、日期类型数据的比较
     * - `BETWEEN`: 介于什么什么之间，适用于数字、日期类型数据的比较
     *
     */
    export enum operator {
        EQUAL = 'EQUAL',
        NOT_EQUAL = 'NOT_EQUAL',
        CONTAINS = 'CONTAINS',
        NOT_CONTAINS = 'NOT_CONTAINS',
        IS_NULL = 'IS_NULL',
        NOT_NULL = 'NOT_NULL',
        IN = 'IN',
        GREATER = 'GREATER',
        LESSER = 'LESSER',
        BETWEEN = 'BETWEEN',
    }


}
