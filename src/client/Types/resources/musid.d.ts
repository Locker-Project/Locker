interface MusicAssetMap {
    version: string
    type: string
    title: string
    composer: string
    made: "official" | "fanmade"
    showBpm: string
    time: number
    demo: {
        start: number
        end: number
    }
    license: "string"
}