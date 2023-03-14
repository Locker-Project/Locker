import * as solid from "solid-js";
import { useTransContext } from "@mbarzda/solid-i18next";
import { Howl } from "howler";

import TranslateText from "Components/TranslateText/translateText";
import NormalButton from "Components/Button/normalButton/normalButton";

import { settingsData } from "Types/Settings/settings";

import style from "./gameplay.module.scss";

import adjustSound from "Assets/Sounds/ui/audioPreview.m4a";
import { gameConfigStore } from "State/gameCondigStore";
import { getGameConfig } from "Utils/getConfig/getConfig";
import LargeButton from "Components/Button/largeButton/largeButton";
import sumArray from "Utils/sumArray/sumArray";

const JudgeTimingDetails: solid.Component = () => {
    const [t, intl] = useTransContext();

    const [adjsting, setAdjusting] = solid.createSignal(false);
    const [count, setCount] = solid.createSignal(0);
    const [timing, setTiming] = solid.createSignal<Array<number>>([]);
    const [result, setResult] = solid.createSignal(0);

    let started: number;

    let adjustTimeout: NodeJS.Timeout;

    const adjustAudio = new Howl({
        src: adjustSound,
        volume: gameConfigStore.ready ? gameConfigStore.data.audio.uiVolume : getGameConfig().audio.uiVolume,
    });

    function startAdjust() {
        setAdjusting(true);
        setTiming([]);
        setCount(0);
        adjustAudio.play();
        started = performance.now();
        adjustTimeout = setTimeout(() => {
            setAdjusting(false);
            calculateResult();
        }, 10000)
    }

    function addTiming() {
        setCount(c => c + 1);
        const timing = performance.now() - started;
        const accuracy = timing - ((count() * 2000) - 500);
        setTiming(t => [...t, accuracy]);
        calculateResult();
    }

    function calculateResult() {
        setResult(sumArray(timing()) / count());
    }

    solid.onCleanup(() => {
        clearTimeout(adjustTimeout);
        calculateResult();
        adjustAudio.fade(1, 0, 500);
        setTimeout(() => {
            adjustAudio.stop();
            adjustAudio.unload();
        }, 500);
    });

    solid.createEffect(() => {
        if (count() > 3) {
            setAdjusting(false);
            clearTimeout(adjustTimeout);
        }
    });

    return (
        <>
            <TranslateText key="settings.gameplay.judgeTiming.description" />
            <NormalButton onClick={startAdjust}>
                <TranslateText key="settings.gameplay.startAdjust" />
            </NormalButton>
            <solid.Show when={adjsting()}>
                <TranslateText key="settings.gameplay.judgeTiming.adjust" />
                ({count()} /4);
                <br />
                <NormalButton onPointerDown={addTiming}>
                    <TranslateText key="settings.gameplay.judgeTiming.button" />
                </NormalButton>
            </solid.Show>
            <solid.Show when={timing().length}>
                <div class={style.timingAccuracy}>
                    <solid.For each={timing()}>
                        {
                            data => {
                                return (
                                    <span>{Math.round(data)}</span>
                                )
                            }
                        }
                    </solid.For>
                </div>
                <TranslateText key="settings.gameplay.judgeTiming.result" end={`: ${Math.round(result())}`} />
            </solid.Show>
        </>
    )
}

export default JudgeTimingDetails;
