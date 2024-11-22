function base64Decode(str: string): Uint8Array {
    // Decode the base64 string into a binary string
    const binaryString = atob(str);

    // Convert the binary string into a Uint8Array
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes;
}


// Example usage
const key = new Uint8Array([
    0x61, 0x73, 0x64, 0x61, 0x73, 0x64, 0x64, 0x73, 0x76, 0x63, 0x64, 0x78, 0x7a, 0x76, 0x63,
    0x78, 0x76, 0x78, 0x7a, 0x68, 0x66, 0x67, 0x78, 0x7a, 0x63, 0x76, 0x35, 0x31, 0x61, 0x73
]);
// XOR Decrypt function
export function xorDecrypt(encryptedData) {
    // Decode base64 encoded data
    const data = base64Decode(encryptedData);

    // Create key stream based on key
    const keyStream = new Uint8Array(data.length);
    for (let i = 0; i < keyStream.length; i++) {
        keyStream[i] = key[i % key.length];
    }

    // Decrypt the data using XOR
    const decryptedBytes = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i++) {
        decryptedBytes[i] = data[i] ^ keyStream[i];
    }

    // Convert decrypted bytes to string
    return new TextDecoder().decode(decryptedBytes);
}
