import {ReqEncrypt} from '@utils/rsa/ReqUtils';

export function getNewRequestUrl(url: string): string {
    try {
        const t = new Date().getTime()
        const result = parseInt((t / 1000) + '')
        const assert = ReqEncrypt(result)
        return `${url}?sign=${assert}`
    } catch (e) {
        return ''
    }
}