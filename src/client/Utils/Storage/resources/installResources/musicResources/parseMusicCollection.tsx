import JSZip from "jszip";
import json5 from "json5";

import TranslateText from "Components/TranslateText/translateText";
import { installMusic } from "./installMusic";

function parseMusicCollection(zip: JSZip) {
    return new Promise<void>(async (resolve, reject) => {
        if (!zip.file("information.json")) {
            resolve();
        }
        const folders = json5.parse(await zip.file("information.json")!.async("string"))
        let promises = [];

        for (const folder of folders.add) {
            const zipFilter = zip.filter(path => path.startsWith(folder));
            const zipFolder = new JSZip();
            for (const file of zipFilter) {
                if (file.dir) continue;
                zipFolder.file(file.name.replace(folder + "/", ""), await file.async("arraybuffer"));
            }
            promises.push(installMusic(zipFolder));
        }
        Promise.all(promises).then((results) => {
            resolve();
            const errors = results.filter(result => result instanceof Error);
            if (errors.length > 0) {
                console.warn(`${errors.length} errors occured while installing music`);
            }
        })


    })
}

export { parseMusicCollection }