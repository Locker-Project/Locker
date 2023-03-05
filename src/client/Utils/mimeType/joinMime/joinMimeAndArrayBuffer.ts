import arrayBufferToBase64 from "Utils/ArrayBufferToBase64/ArrayBufferToBase64";

function joinMimeAndArrayBuffer(data: { data: ArrayBuffer, mime: string }) {
    return `data:${data.mime};base64,${arrayBufferToBase64(data.data)}`
}

export default joinMimeAndArrayBuffer;