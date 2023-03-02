interface resources {
    [key: string]: resourcesData
}

interface resourcesData {
    installed: Array<string>
    updated: number
}