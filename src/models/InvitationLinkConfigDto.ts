/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InvitationLinkConfigDto = {
    /**
     * 链接失效规则
     * - `period`: 有效期内始终有效
     * - `afterFirstClick`: 第一次点击后失效
     */
    inviteLinkDisuseRule: InvitationLinkConfigDto.inviteLinkDisuseRule;
    /**
     * 链接过期时间单位
     */
    linkExpiredTimeUnit: InvitationLinkConfigDto.linkExpiredTimeUnit;
    /**
     * 链接过期时间秒数
     */
    linkExpiredTimeOfSecond: number;
    /**
     * 邀请页面信息填写的失效时间单位
     */
    pageExpiredTimeUnit: InvitationLinkConfigDto.pageExpiredTimeUnit;
    /**
     * 邀请页面信息填写的失效时间秒数，最大 2592000 秒(30 天)
     */
    pageExpiredTimeOfSecond: number;
};

export namespace InvitationLinkConfigDto {

    /**
     * 链接失效规则
     * - `period`: 有效期内始终有效
     * - `afterFirstClick`: 第一次点击后失效
     */
    export enum inviteLinkDisuseRule {
        PERIOD = 'period',
        AFTER_FIRST_CLICK = 'afterFirstClick',
    }

    /**
     * 链接过期时间单位
     */
    export enum linkExpiredTimeUnit {
        FOREVER = 'forever',
        DAY = 'day',
        HOUR = 'hour',
        MINUTE = 'minute',
    }

    /**
     * 邀请页面信息填写的失效时间单位
     */
    export enum pageExpiredTimeUnit {
        MINUTE = 'minute',
        HOUR = 'hour',
        DAY = 'day',
    }


}
