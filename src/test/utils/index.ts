/**
 * @description 生成随机字符串
 *
 */
export function generateRandomString(length: number = 30) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * @description 生成随机手机号
 *
 */
export const generateRandomPhone = () => {
    const headerNums = [
        '139',
        '138',
        '137',
        '136',
        '135',
        '134',
        '159',
        '158',
        '157',
        '150',
        '151',
        '152',
        '188',
        '187',
        '182',
        '183',
        '184',
        '178',
        '130',
        '131',
        '132',
        '156',
        '155',
        '186',
        '185',
        '176',
        '133',
        '153',
        '189',
        '180',
        '181',
        '177',
    ];
    const headerNum = headerNums[Math.floor(Math.random() * 10)];
    const bodyNum = Math.random().toString().replace('0.', '').slice(0, 8);
    return headerNum + bodyNum;
};

/**
 * @description 生成随机字符串
 *
 */
export function generateRandomEmail(length: number = 30) {
    return `${generateRandomString(length)}@test.com`;
}
