import JSEncrypt from './jsencrypt.js'

export function ReqEncrypt(data) {
    return rsa_encode(JSON.stringify(data))
}
const publicKey = `-----BEGIN RSA PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7mwkBnHAhNMDPeY7XJbi
l3AeZRd0I7apDhMcPFd+wfTxlcGbsWvVFHuLS19DOiVB2+IdLGQSjNC2GHsg9OUb
/ErecVMx3YS/ZSo0MhxbVx+dNT1dDkM2vYGV/2GyilmHk+xqJ20XmiVDvzCW84Te
9rPsqvhuumaWO51gZMi94dVojH39ebW4qWCVqEn52JZO53KnXZmolD+hRDFKb2Df
njxNlt/RDNqZq+g38716YlQqcuFwEer2Uwz3Q6kA4yaTMeWzvT/dfVutJmczAvHI
3BZec6a6Xc0Y3ETMagDevvv1BsMR4G8D0LWPsTo0UGP5KD+EgBhheAa4iH7ogwZO
IQIDAQAB
-----END RSA PUBLIC KEY-----
`
function rsa_encode(json_data:string) {
    const crypt = new JSEncrypt()
    crypt.setPublicKey(publicKey)
    return crypt.encryptUnicodeLong(json_data)
}
