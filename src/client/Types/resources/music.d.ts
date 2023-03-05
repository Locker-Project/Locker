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


interface musicAsset {
    made: "official" | "fanmade"
    metadata: {
        title: string
        composer: string
        bpm: string
        time: number
        demo: {
            start: number
            end: number
        }
        license: string
    }
    music: {
        data: ArrayBuffer
        mime: string
    }
    thumbnail: {
        data: ArrayBuffer
        mime: string
    }
    chart: {
        [key: string]: gameChart | false
    }
}