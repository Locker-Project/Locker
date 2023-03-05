import * as solid from "solid-js";
import Dexie, { Table } from "dexie";

import databaseInfo from "Assets/StaticInfo/databaseinfo.json";
import { musicFilter, musicSearchText, setSelectedMusic } from "./musicSelectState";
import MusicCard from "./musicCard/musicCard";
import { getSelectedMusic } from "Utils/getConfig/getConfig";

import style from "./musicSelect.module.scss";

const MusicList: solid.Component = () => {

    const [musics, setMusics] = solid.createSignal<Array<musicAsset>>([])

    let table: Table;

    const filterList = [
        ["official", "fanmade"],
        ["official"],
        ["fanmade"]
    ]

    solid.onMount(async () => {
        const selectedMusicData = getSelectedMusic();
        const db = new Dexie(databaseInfo.DBName);
        await db.open();
        table = db.table(databaseInfo.databases[0] || "music");
        setMusics(await table.toArray());
        const array = (await table.toArray());
        const data = array.find((d: musicAsset) => d.metadata.title == selectedMusicData.selected) || array[0];
        setSelectedMusic({ hasData: true, data })
    });

    solid.createEffect(async () => {
        //keep value and activate reactivity
        const f = musicFilter();
        const t = musicSearchText().toLowerCase();

        if (!table) return;
        else {
            //filter official or fanmade
            let musicData: Array<musicAsset> = await table.where("made").anyOf(filterList[f]).toArray();
            //filter with search text
            if (musicSearchText()) musicData = musicData.filter(m => m.metadata.title.toLowerCase().includes(t));
            setMusics(musicData);
        }
    })

    return (
        <div class={style.musicList}>
            <solid.For each={musics()}>
                {
                    music => <MusicCard data={music} />
                }
            </solid.For>
        </div>
    )
}

export default MusicList;