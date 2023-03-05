import { useTransContext } from "@mbarzda/solid-i18next";
import { Howl } from "howler";
import * as solid from "solid-js";

import NormalButton from "Components/Button/normalButton/normalButton";
import { useButtonModel } from "Components/Functions/ActivateModel/activateModel";

import joinMimeAndArrayBuffer from "Utils/mimeType/joinMime/joinMimeAndArrayBuffer";
import msToStringTime from "Utils/msToStringTime/msToStringTime";
import { selectedMusic } from "../musicSelectState";

import style from "./musicDetails.module.scss"
import upperCaseFirstCharacter from "Utils/upperCaseFirstCharacter/upperCaseFirstCharacter";
import LevelButton from "./levelButton";


const MusicDetails: solid.Component = () => {

    const [t] = useTransContext();

    let thumbnailRef: HTMLDivElement | undefined;
    let fadeOutTimeout: NodeJS.Timeout;
    let musicTimeout: NodeJS.Timeout;
    let demoAudio: Howl;

    const madeType = {
        official: t("musicSelect.details.officialMusic"),
        fanmade: t("musicSelect.details.fanmadeMusic")
    }

    const levelNames = ["easy", "normal", "hard", "expert"]

    function playMusic() {
        if (!selectedMusic().hasData) return;
        if (fadeOutTimeout) clearTimeout(fadeOutTimeout);
        const data = selectedMusic().data as musicAsset;
        demoAudio.play("music");
        demoAudio.fade(0, 0.8, 3000);
        fadeOutTimeout = setTimeout(() => {
            demoAudio.fade(0.8, 0, 3000);
            musicTimeout = setTimeout(() => {
                demoAudio.stop();
                playMusic();
            }, 3500);
        }, data.metadata.demo.end - data.metadata.demo.start + 3000);
    }

    solid.createEffect(() => {
        if (!selectedMusic().hasData) return;
        const data = selectedMusic().data as musicAsset;

        if (thumbnailRef) {
            thumbnailRef.style.backgroundImage = `url(${joinMimeAndArrayBuffer(data.thumbnail)})`
        }

        //audio
        //cleanup
        if (demoAudio) {
            demoAudio.stop();
            demoAudio.unload();
        }

        new Promise<void>((resolve) => {
            //set new audio
            setTimeout(() => {
                demoAudio = new Howl({
                    src: joinMimeAndArrayBuffer(data.music),
                    loop: true,
                    sprite: {
                        music: [data.metadata.demo.start - 3000, data.metadata.demo.end + 3000]
                    }
                });
                resolve();
            }, 0);
        }).then(playMusic);
    })

    solid.onCleanup(() => {
        clearTimeout(musicTimeout);
        clearTimeout(fadeOutTimeout);
        demoAudio.fade(0.8, 0, 500);
        setTimeout(() => {
            demoAudio.stop();
            demoAudio.unload();
        }, 500);
    });


    return (
        <solid.Show when={selectedMusic().hasData}>
            <div class={style.musicDetails}>
                <p class={style.made}>{madeType[selectedMusic().data?.made || "fanmade"]}</p>
                <h1>{selectedMusic().data?.metadata.title}</h1>
                <h2>{selectedMusic().data?.metadata.composer}</h2>
                <h3 class={style.details}>
                    <span>BPM : {selectedMusic().data?.metadata.bpm}</span>
                    <span>Time : {msToStringTime(selectedMusic().data?.metadata.time || 0)}</span>
                    <span class={style.license}>{selectedMusic().data?.metadata.license}</span>
                </h3>
                <div class={style.thumbnail} ref={thumbnailRef} />
                <div class={style.selectButtons}>
                    <solid.For each={levelNames}>
                        {
                            level =>
                                <LevelButton {...{ level }} />
                        }
                    </solid.For>
                </div>
            </div>
        </solid.Show>

    )
}

export default MusicDetails;