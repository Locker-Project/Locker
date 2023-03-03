import * as solid from "solid-js";
import Dexie, { Table } from "dexie";

import databaseInfo from "Assets/StaticInfo/databaseinfo.json";
import { filter, searchText } from "./musicSelectState";
import MusicCard from "./musicCard/musicCard";

const MusicList: solid.Component = () => {

    const [musics, setMusics] = solid.createSignal<Array<musicAsset>>([])

    let table: Table;

    const filterList = [
        ["official", "fanmade"],
        ["official"],
        ["fanmade"]
    ]

    solid.onMount(async () => {
        const db = new Dexie(databaseInfo.DBName);
        await db.open();
        table = db.table(databaseInfo.databases[0] || "music");
        setMusics(await table.toArray());
    });

    solid.createEffect(async () => {
        //keep value and activate reactivity
        const f = filter();
        const t = searchText().toLowerCase();

        if (!table) return;
        else {
            //filter official or fanmade
            let musicData: Array<musicAsset> = await table.where("made").anyOf(filterList[f]).toArray();
            //filter with search text
            if (searchText()) musicData = musicData.filter(m => m.metadata.title.toLowerCase().includes(t));
            setMusics(musicData);
        }
    })

    return (
        <div>
            <solid.For each={musics()}>
                {
                    music => <MusicCard data={music} />
                }
            </solid.For>
        </div>
    )
}

export default MusicList;