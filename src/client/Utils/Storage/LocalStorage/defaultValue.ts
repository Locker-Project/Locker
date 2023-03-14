const environment: environment = {
    language: navigator.language.toLowerCase().replace(/-/g, "_"),
    termsVersion: "0.0.0",
    termsAccepted: false,
    initializedSettings: false,
}

const resources = {
    music: {
        installed: [],
        updated: 0, //put date number
    },
}

const musicSelect = {
    selected: "",
}

const DBVersion = {
    version: "0.0.0",
    initialized: false,
    updated: 0, //put Date number
}


const gameConfig: gameConfig = {
    graphics: {
        resolution: 1,
        fps: 120,
        antiAlias: true
    },
    gameplay: {
        scrollSpeed: 10,
        random: false,
        fieldWall: false,
        key: {
            key2: ["KeyF", "KeyJ"],
            key3: ["KeyF", "Space", "KeyJ"],
            key4: ["KeyD", "KeyF", "KeyJ", "KeyK"],
            key5: ["KeyD", "KeyF", "Space", "KeyJ", "KeyK"]
        },
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
        uiVolume: 1,
        audioStereo: 0,
    }
}

const userConfig: userConfig = {
    userInfo: {
        name: "Guest",
        id: ""
    }
}



export { environment, resources, DBVersion, gameConfig, musicSelect, userConfig };