import * as solid from "solid-js";
import { useTransContext } from "@mbarzda/solid-i18next";
import { Route, Routes, useBeforeLeave } from "@solidjs/router";

import Header from "Components/Header/header";
import SettingToolbar from "./toolBar";

import GeneralSettings from "./settingsContent/general/general";
import AudioSettings from "./settingsContent/audio/audio";

import { gameConfigStore } from "State/gameCondigStore";

import style from "./settings.module.scss";
import GameplaySettings from "./settingsContent/gameplay/gameplay";


const Settings: solid.Component = () => {

    const [fadeOut, setFadeOut] = solid.createSignal<boolean>(false);
    const [t] = useTransContext();

    let containerRef: HTMLDivElement | undefined;
    let animationTimeout: NodeJS.Timeout;

    solid.onMount(() => {
        if (containerRef) containerRef.style.animation = "fadeIn 0.3s linear forwards";
        animationTimeout = setTimeout(() => {
            if (containerRef) containerRef.style.animation = "";
        }, 300);
    });

    solid.onCleanup(() => {
        clearTimeout(animationTimeout);
    });

    solid.createEffect(() => {
        localStorage.setItem("gameConfig", JSON.stringify(gameConfigStore.data));

    })

    useBeforeLeave(async (e) => {
        if (!e.defaultPrevented) e.preventDefault();
        if (!containerRef) return;
        if (e.to.toString().includes("settings")) {
            e.retry(true);
            return;
        }
        setFadeOut(true);
        setTimeout(() => {
            e.retry(true);
        }, 500)
    });


    return (
        <div class={style.settings} ref={containerRef} classList={{ fadeOut: fadeOut() }}>
            <Header title={t("settings.title")} />
            <SettingToolbar />
            <div class={style.settingContent}>
                <Routes>
                    <Route path={"/"} element={<GeneralSettings />} />
                    <Route path={"/gameplay"} element={<GameplaySettings />} />
                    <Route path={"/graphics"} element={<>graphics</>} />
                    <Route path={"/audio"} element={<AudioSettings />} />
                </Routes>
            </div>

        </div>
    )
}

export default Settings;