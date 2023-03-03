import JSZip from "jszip";
import json5 from "json5";

import { v4 as uuidv4, v5 as uuidv5 } from "uuid";

import databaseInfo from "Assets/StaticInfo/databaseinfo.json";
import getMimeFromFileName from "Utils/mimeType/getMime/getMime";
import Dexie from "dexie";

function installMusic(zip: JSZip) {
    return new Promise<void | Error>(async (resolve, reject) => {

        //if there are any errors, resolve with error
        if (!zip.file("information.json")) {
            console.error("Error installing music: FileMap.json not found");
            resolve(new Error("Error installing music: FileMap.json not found"));
        }

        const fileMapJsonData: MusicAssetMap = json5.parse(await zip.file("information.json")!.async("string"));

        const assetData = {
            made: fileMapJsonData.made,
            metadata: {
                title: fileMapJsonData.title,
                composer: fileMapJsonData.composer,
                bpm: fileMapJsonData.showBpm,
                time: fileMapJsonData.time,
                demo: fileMapJsonData.demo,
            },
            music: {
                data: await zip.file("audio.mp3")?.async("arraybuffer"),
                mime: "audio/mp3"
            },
            thumbnail: {
                data: await zip.file("thumbnail.png")?.async("arraybuffer"),
                mime: "image/png"
            },
            chart: {
                easy: json5.parse(await zip.file("easy.json")?.async("string") || "false"),
                normal: json5.parse(await zip.file("normal.json")?.async("string") || "false"),
                hard: json5.parse(await zip.file("hard.json")?.async("string") || "false"),
                expert: json5.parse(await zip.file("expert.json")?.async("string") || "false"),
            },
            id: uuidv4(),
            installed: Date.now(),
        }

        const db = new Dexie(databaseInfo.DBName);
        await db.open();

        await db.table(databaseInfo.databases[0] || "music")
            .put(assetData)
        db.close();
        resolve();


    })
}

export { installMusic };