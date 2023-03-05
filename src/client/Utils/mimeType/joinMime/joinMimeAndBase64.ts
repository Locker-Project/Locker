function joinMimeAndBase64(data: { data: string, mime: string }) {
    return `data:${data.mime};base64,${data.data}`
}

export default joinMimeAndBase64;