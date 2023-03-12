function deleteLocalStorage() {
    const resources = localStorage.getItem("resources");
    localStorage.clear();
    localStorage.setItem("resources", resources || "");
}

function deleteAllLocalStorage() {
    localStorage.clear();
}

function deleteEnvironment() {
    try {
        if (localStorage.getItem("environment")) localStorage.removeItem("environment");
    } catch (error) {
        if (error instanceof Error) throw error
    }
}

function deleteGameConfig() {
    try {
        if (localStorage.getItem("gameConfig")) localStorage.removeItem("gameConfig");
    } catch (error) {
        if (error instanceof Error) throw error
    }
}

function deleteResourcesInfo() {
    try {
        //if (localStorage.getItem("resources")) localStorage.removeItem("resources");
        if (localStorage.getItem("DBVersion")) localStorage.removeItem("DBVersion");
    } catch (error) {
        if (error instanceof Error) throw error
    }
}

function deleteMusicSelect() {
    try {
        if (localStorage.getItem("musicSelect")) localStorage.removeItem("musicSelect");
    } catch (error) {
        if (error instanceof Error) throw error
    }
}

export { deleteLocalStorage, deleteEnvironment, deleteGameConfig, deleteResourcesInfo, deleteMusicSelect, deleteAllLocalStorage }