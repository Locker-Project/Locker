import removeMime from "Utils/mimeType/removeMime/removeMime";

function base64ToArrayBuffer(base64: string) {
    const bytes = Uint8Array.from(window.atob(removeMime(base64)), c => c.charCodeAt(0))
    return bytes.buffer;
}

export default base64ToArrayBuffer;