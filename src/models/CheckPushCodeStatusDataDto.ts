/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginTokenResponseDataDto } from './LoginTokenResponseDataDto';

export type CheckPushCodeStatusDataDto = {
    /**
     * Push code status. According to the order of push login, there are five states: PUSHED (pushed), AUTHORIZED (user authorized), CANCELLED (cancelled authorization), EXPIRED (push login expired) and ERROR (unknown error).
     */
    status: CheckPushCodeStatusDataDto.status;
    /**
     * This data will be returned only when the push code status is authorized.
     */
    tokenSet?: LoginTokenResponseDataDto;
};

export namespace CheckPushCodeStatusDataDto {

    /**
     * Push code status. According to the order of push login, there are five states: PUSHED (pushed), AUTHORIZED (user authorized), CANCELLED (cancelled authorization), EXPIRED (push login expired) and ERROR (unknown error).
     */
    export enum status {
        PUSHED = 'PUSHED',
        AUTHORIZED = 'AUTHORIZED',
        CANCELLED = 'CANCELLED',
        EXPIRED = 'EXPIRED',
        ERROR = 'ERROR',
    }


}
