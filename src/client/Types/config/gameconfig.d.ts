interface gameConfig {
    graphics: {
        resolution: number
        fps: number
        antiAlias: boolean
    }
    gameplay: {
        key: {
            key2: Array<string>
            key3: Array<string>
            key4: Array<string>
            key5: Array<string>
        }
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
        uiVolume: number
        audioStereo: number
    }
}

type AntiAliasType = false | "default" | "TAA" | "SMAA" | "SSAA" | "FXAA"
type AALevel = 0 | 1 | 2 | 3 | 4 | 5