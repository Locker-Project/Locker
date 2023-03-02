import * as solid from "solid-js";
import i18next from "i18next";
import JSZip from "jszip";
import fetchResourcesUpdate from "Utils/Storage/resources/fetchUpdate/fetchUpdate";
import downloadResourceFile from "Utils/Storage/resources/downloadResources/downloadFile";
import getVersionMapInfo from "Utils/getVersionMapInfo/getVersionMapInfo";
import fileSize from "filesize";
import path from "path-browserify";
import { parseMusicCollection } from "Utils/Storage/resources/installResources/musicResources/parseMusicCollection";
import { getResources } from "Utils/getConfig/getConfig";

function uptdateResourcesFromLoader(setTitle: solid.Setter<string>, setDescription: solid.Setter<string>) {
    const [download, setDownload] = solid.createSignal({
        type: "",
        count: 0,
        size: 0,
        totalSize: 0
    });

    const resources = getResources();

    return new Promise<void>(async (resolve, reject) => {

        if (!navigator.onLine) {
            resolve();
            return;
        }

        setTitle(i18next.t("appLoader.resources.title").toString());
        setDescription(i18next.t("appLoader.resources.fetchUpdate").toString());
        const versionMap = await fetchResourcesUpdate();
        console.log(versionMap);


        for (const update of versionMap) {
            let file: JSZip;
            await downloadResourceFile(update)
                .then(res => file = res)
                .then(() => parseMusicCollection(file))
                .then(a => a)
                .then(() => resources.music.installed.push(update));
            //.then(async res => { fileInfo = JSON.parse(await res.file("information.json")?.async("string") || "{}") })
            setDownload(ct => Object.assign(ct, { count: ct.count++, size: ct.size += 0 }));
        }
        localStorage.setItem("resources", JSON.stringify(resources));
        resolve();
    });

}

export default uptdateResourcesFromLoader;