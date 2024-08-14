/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type QuickFilterInviteeRecordDto = {
    /**
     * 名单 ID
     */
    rosterId: string;
    /**
     * 名单名称
     */
    rosterName: string;
    /**
     * 受邀人 ID
     */
    inviteeId: string;
    /**
     * 受邀人名称
     */
    inviteeName: string;
    /**
     * 受邀人手机号国际区码
     */
    inviteePhoneCountryCode?: string;
    /**
     * 受邀人手机号
     */
    inviteePhone?: string;
    /**
     * 受邀人邮箱，不区分大小写
     */
    inviteeEmail: string;
    /**
     * 受邀人状态
     */
    inviteeStatus: QuickFilterInviteeRecordDto.inviteeStatus;
    /**
     * 受邀人来源
     */
    inviteeSource: QuickFilterInviteeRecordDto.inviteeSource;
};

export namespace QuickFilterInviteeRecordDto {

    /**
     * 受邀人状态
     */
    export enum inviteeStatus {
        INVITED = 'invited',
        REGISTERING = 'registering',
        REGISTERED = 'registered',
        REVERTED = 'reverted',
        NOT_INVITED = 'notInvited',
        EXPIRED = 'expired',
        INVITATION_SEND_FAIL = 'invitationSendFail',
        JOINED_BY_OTHER = 'joinedByOther',
    }

    /**
     * 受邀人来源
     */
    export enum inviteeSource {
        MANUAL_CREATE = 'manualCreate',
        FILE_IMPORT = 'fileImport',
    }


}
