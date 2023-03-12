import * as solid from "solid-js";

import TranslateText from "Components/TranslateText/translateText";
import NormalButton from "Components/Button/normalButton/normalButton";

import playAudio from "Utils/PlayAudio/playAudio";

import testSound from "Assets/Sounds/ui/audioPreview.m4a";

import { Howl } from "howler";

const AudioDetailsWithPreview: solid.Component<{ volume?: number, key: string }> = (props) => {

    let audio: Howl;

    function testPlay() {
        if (audio) {
            audio.stop();
            audio.unload();
        }
        audio = playAudio({ src: testSound, volume: props.volume || 1 });
    }

    solid.onCleanup(() => {
        if (audio) {
            audio.stop();
            audio.unload();
        }
    })

    return (
        <>
            <TranslateText key={props.key} />
            <NormalButton onClick={testPlay}>
                <TranslateText key="settings.audio.preview" />
            </NormalButton>
        </>
    )
}

export default AudioDetailsWithPreview;