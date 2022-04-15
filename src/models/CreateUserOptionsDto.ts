/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateUserOptionsDto = {
    /**
     * 该参数一般在迁移旧有用户数据到 Authing 的时候会设置。开启这个开关，password 字段会直接写入 Authing 数据库，Authing 不会再次加密此字段。如果你的密码不是明文存储，你应该保持开启，并编写密码函数计算。
     */
    keepPassword?: boolean;
    /**
     * 是否强制要求用户在第一次的时候重置密码
     */
    resetPasswordOnFirstLogin?: boolean;
};
