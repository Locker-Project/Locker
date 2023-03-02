import { DBVersion, environment, gameConfig, musicSelect, resources, userConfig } from "Utils/Storage/LocalStorage/defaultValue";

function getDBVersion(): typeof DBVersion {
    return JSON.parse(localStorage.getItem("DBVersion") || JSON.stringify(DBVersion));
}


function getEnvironment(): environment {
    return JSON.parse(localStorage.getItem("environment") || JSON.stringify(environment));
}

function getGameConfig(): gameConfig {
    return JSON.parse(localStorage.getItem("gameConfig") || JSON.stringify(gameConfig));
}

function getUserData(): userConfig {
    return JSON.parse(localStorage.getItem("userData") || JSON.stringify(userConfig));
}

function getSelectedMusic(): typeof musicSelect {
    return JSON.parse(localStorage.getItem("musicSelect") || JSON.stringify(musicSelect));
}

function getResources(): resources {
    return JSON.parse(localStorage.getItem("resources") || JSON.stringify(resources));
}

export { getDBVersion, getEnvironment, getGameConfig, getSelectedMusic, getUserData, getResources };