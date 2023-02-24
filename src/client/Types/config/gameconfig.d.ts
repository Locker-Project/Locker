interface gameConfig {
    graphics: {
        menu: {
            resolution: number
            fps: number
            antiAlias: true
        },
        musicgame: {
            resolution: number
            fps: number
            antiAlias: boolean
        }
    }
    gameplay: {
        key: Array<keyMap>
        scrollSpeed: number
        random: boolean
        fieldWall: false | number
        timing: {
            offset: number
            judge: number
        }
        judgeText: boolean
    }
    audio: {
        masterVolume: number
        musicVolume: number
        effectVolume: number
        audioStereo: number
    }
}

interface keyMap {
    code: string
    key: string
    show: string

}

type AntiAliasType = false | "default" | "TAA" | "SMAA" | "SSAA" | "FXAA"
type AALevel = 0 | 1 | 2 | 3 | 4 | 5