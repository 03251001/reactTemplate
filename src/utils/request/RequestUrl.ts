import {ReqEncrypt} from '@utils/rsa/ReqUtils';

export function getNewRequestUrl(url: string): string {
    const t = new Date().getTime()
    const assert = ReqEncrypt(t)
    return `${url}?s=${assert}`
}