function removeMime(base64: string): string {
    if (!(/[data:]?[^;.]\/([^;,]+)[,]?/.test(base64))) return base64;
    return base64.replace(/[data:]?.*\/.*;base64,/, "");
}

export default removeMime;