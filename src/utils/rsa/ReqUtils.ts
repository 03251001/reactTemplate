import JSEncrypt from './jsencrypt.js'

//请求只需要可以把……内容了
export function ReqEncrypt(data) {
    return rsa_encode(JSON.stringify(data))
}
const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvfifEAax7oqpE9XOGgx4YGN+gLxdd6ud83Z/hrjXM+RjDXH9iYey4Xrzkcp41fNppEsdxfkOuRT3i4Wqe0u2iFVq5tDSxZpacRI0uishPkSBWifCqhm5ZmHrJg30y4A/u6uVCBKdwjLlAurtWRMZ3k6wr+olIuSIiYHzXRFhz4QIDAQAB
 -----END PUBLIC KEY-----`

function rsa_encode(json_data:string) {
    const crypt = new JSEncrypt()
    crypt.setPublicKey(publicKey)
    return crypt.encryptUnicodeLong(json_data)
}
