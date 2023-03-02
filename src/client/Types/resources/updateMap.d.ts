type versionData = {
    [key: string]: { url: string, size: number, hash: string }
}

interface updateMap {
    updates: Array<string>
}