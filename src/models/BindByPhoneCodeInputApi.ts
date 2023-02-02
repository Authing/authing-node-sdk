/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BindByPhoneCodeInputApi = {
    /**
     * 中间态键
     */
    key: string;
    /**
     * 操作编码
     */
    action: string;
    /**
     * 手机验证码（四位：1234；六位：123456）
     */
    code: string;
    /**
     * 手机号
     */
    phone: string;
    /**
     * 国家码（标准格式：加号“+”加国家码数字；当前校验兼容历史用户输入习惯。例，中国国家码标准格式为「+86」，历史用户输入记录中存在「86、086、0086」等格式）
     */
    phoneCountryCode?: string;
};
