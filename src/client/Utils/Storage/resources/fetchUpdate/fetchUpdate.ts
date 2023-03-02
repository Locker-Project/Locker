import defaultUrl from "Assets/StaticInfo/defaultUrl.json";
import compareVersions, { validate } from "compare-versions";
import { getResources } from "Utils/getConfig/getConfig";

function fetchResourcesUpdate() {
    return new Promise<Array<string>>((resolve, reject) => {
        fetch(defaultUrl.resources.updateMap, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            }
        }).then(res => res.json()).then((res: updateMap) => {
            const resourcesInfo = getResources();
            let updateList: Array<string> = [];
            for (const file of res.updates) {
                if (resourcesInfo.music.installed.includes(file)) continue;
                else updateList.push(file);
            }
            resolve(updateList);
        }).catch(error => {
            console.error(error);
            resolve([]);
        })
    })
}

export default fetchResourcesUpdate;