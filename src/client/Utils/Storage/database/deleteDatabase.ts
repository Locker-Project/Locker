import databaseInfo from "Assets/StaticInfo/databaseinfo.json";
import { getResources } from "Utils/getConfig/getConfig";
function deleteDatabase() {
    const resources = getResources();
    indexedDB.deleteDatabase(databaseInfo.DBName);
    resources.music.installed = [];
    localStorage.setItem("resources", JSON.stringify(resources));
}

export default deleteDatabase;