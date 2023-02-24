const environment: environment = {
    language: navigator.language.toLowerCase().replace(/-/g, "_"),
    termsVersion: "0.0.0",
    termsAccepted: false,
    initializedSettings: false,
}

const resourcesDownloaded = {
    music: {
        initialized: false,
        version: "0.0.0",
        installed: []
    },
}

const musicSelect = {
    selected: "",
}

const DBVersion = {
    version: "0.0.0",
    initialized: false,
    updated: Date.now(),
}


const gameConfig: gameConfig = {
    graphics: {
        menu: {
            resolution: 1,
            fps: 60,
            antiAlias:true
        },
        musicgame: {
            resolution: 1,
            fps: 120,
            antiAlias:true
        }
    },
    gameplay: {
        scrollSpeed: 10,
        random: false,
        fieldWall: false,
        key: [
            { code: "KeyD", key: "d", show: "D" },
            { code: "KeyF", key: "f", show: "F" },
            { code: "KeyJ", key: "j", show: "J" },
            { code: "KeyK", key: "k", show: "k" },
            { code: "Space", key: " ", show: "␣" }
        ],
        timing: {
            offset: 0,
            judge: 0,
        },
        judgeText: true
    },
    audio: {
        masterVolume: 1,
        musicVolume: 1,
        effectVolume: 1,
        audioStereo: 0,
    }
}

const userConfig: userConfig = {
    userInfo: {
        name: "Guest",
        id: ""
    }
}



export { environment, resourcesDownloaded, DBVersion, gameConfig, musicSelect, userConfig };