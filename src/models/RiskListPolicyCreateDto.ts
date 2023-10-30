/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RiskListPolicyCreateDto = {
    /**
     * 限制类型列表,FORBID_LOGIN-禁止登录，FORBID_REGISTER-禁止注册
     */
    limitList: RiskListPolicyCreateDto.limitList;
    /**
     * 策略动作, ADD_IP_BLACK_LIST-添加IP黑名单，ADD_USER_BLACK_LIST-添加用户黑名单
     */
    action: RiskListPolicyCreateDto.action;
    /**
     * 移除类型，MANUAL-手动，SCHEDULE-策略, 目前只有手动
     */
    removeType: RiskListPolicyCreateDto.removeType;
    /**
     * 事件状态类型，password_wrong-密码错误，account_wrong-账号错误
     */
    eventStateType: RiskListPolicyCreateDto.eventStateType;
    /**
     * 次数阈值
     */
    countThr: number;
    /**
     * 时间范围，最近多少分钟
     */
    timeRange: number;
    /**
     * IP条件, NO_LIMIT-不限制，ONE-单个用户，与 ipCond 二者取一个
     */
    userCond: RiskListPolicyCreateDto.userCond;
    /**
     * IP条件, NO_LIMIT-不限制，ONE-单个IP，与 userCond 二者取一个
     */
    ipCond: RiskListPolicyCreateDto.ipCond;
    /**
     * 操作USER的范围, ALL-所有，NOT_IN_WHITE_LIST-不在白名单中，与 ipRange 二者取一个
     */
    userRange: RiskListPolicyCreateDto.userRange;
    /**
     * 操作IP的范围, ALL-所有，NOT_IN_WHITE_LIST-不在白名单中，与 userRange 二者取一个
     */
    ipRange: RiskListPolicyCreateDto.ipRange;
    /**
     * 策略操作对象，目前只有 ip
     */
    optObject: RiskListPolicyCreateDto.optObject;
};

export namespace RiskListPolicyCreateDto {

    /**
     * 策略操作对象，目前只有 ip
     */
    export enum optObject {
        IP = 'IP',
        USER = 'USER',
    }

    /**
     * 操作IP的范围, ALL-所有，NOT_IN_WHITE_LIST-不在白名单中，与 userRange 二者取一个
     */
    export enum ipRange {
        ALL = 'ALL',
        NOT_IN_WHITE_LIST = 'NOT_IN_WHITE_LIST',
    }

    /**
     * 操作USER的范围, ALL-所有，NOT_IN_WHITE_LIST-不在白名单中，与 ipRange 二者取一个
     */
    export enum userRange {
        ALL = 'ALL',
        NOT_IN_WHITE_LIST = 'NOT_IN_WHITE_LIST',
    }

    /**
     * IP条件, NO_LIMIT-不限制，ONE-单个IP，与 userCond 二者取一个
     */
    export enum ipCond {
        NO_LIMIT = 'NO_LIMIT',
        ONE = 'ONE',
    }

    /**
     * IP条件, NO_LIMIT-不限制，ONE-单个用户，与 ipCond 二者取一个
     */
    export enum userCond {
        NO_LIMIT = 'NO_LIMIT',
        ONE = 'ONE',
    }

    /**
     * 事件状态类型，password_wrong-密码错误，account_wrong-账号错误
     */
    export enum eventStateType {
        PASSWORD_WRONG = 'password_wrong',
        ACCOUNT_WRONG = 'account_wrong',
    }

    /**
     * 移除类型，MANUAL-手动，SCHEDULE-策略, 目前只有手动
     */
    export enum removeType {
        MANUAL = 'MANUAL',
        SCHEDULE = 'SCHEDULE',
    }

    /**
     * 策略动作, ADD_IP_BLACK_LIST-添加IP黑名单，ADD_USER_BLACK_LIST-添加用户黑名单
     */
    export enum action {
        ADD_IP_BLACK_LIST = 'ADD_IP_BLACK_LIST',
        ADD_USER_BLACK_LIST = 'ADD_USER_BLACK_LIST',
    }

    /**
     * 限制类型列表,FORBID_LOGIN-禁止登录，FORBID_REGISTER-禁止注册
     */
    export enum limitList {
        FORBID_LOGIN = 'FORBID_LOGIN',
        FORBID_REGISTER = 'FORBID_REGISTER',
    }


}
