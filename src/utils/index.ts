export const pickBy = (obj: any, predicate: (value: any, key: string) => boolean) => {
    const ret: any = {};
    for (const key of Object.keys(obj)) {
        if (predicate(obj[key], key)) {
            ret[key] = obj[key];
        }
    }
    return ret;
};

export function parseJwt(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        Buffer.from(base64, 'base64')
            .toString()
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
    );

    return JSON.parse(jsonPayload);
}
