import * as solid from "solid-js";
import { useTransContext } from "@mbarzda/solid-i18next";
import { useLocation } from "@solidjs/router";
import path from "path-browserify";

import version from "Assets/StaticInfo/version.json";

import style from "./generalOverlay.module.scss";


const GeneralOverlay: solid.Component = () => {
    const [showOverlay, setShowOverlay] = solid.createSignal(false);
    const location = useLocation();
    const [_, intl] = useTransContext()
    const [screen, setScreen] = solid.createSignal([0, 0]);
    const [mouse, setMouse] = solid.createSignal([0, 0]);

    solid.onMount(() => {
        window.addEventListener("keydown", handleKey)
        if (solid.DEV) setShowOverlay(true);
        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouse);

        handleResize();
    })
    solid.onCleanup(() => {
        window.removeEventListener("keydown", handleKey);
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouse);
    })

    function handleKey(e: KeyboardEvent) {
        if (!e.shiftKey) return;
        if (e.key == "F1") {
            e.preventDefault();
            e.stopPropagation();
            setShowOverlay(s => !s)
        }
    }
    function handleResize() {
        setScreen([window.innerWidth, window.innerHeight]);
    }
    function handleMouse(e: MouseEvent) {
        setMouse([e.x, e.y]);
    }

    return (
        <div class={style.generalOverlay}>
            <solid.Show when={showOverlay()}>
                <p>Locker Debug Overlay (Press Shift + F1 to toggle)</p>
                <p>{solid.DEV ? "Development Build" : "Production Build"}</p>
                <p>Version : {version.version}</p>
                <p>URL {path.join(window.location.href, location.pathname)}</p>
                <p>Session Started : {new Date().toLocaleString()}</p>
                <p>Network Status : {String(navigator.onLine)}</p>
                <p>Service Worker Status : {navigator.serviceWorker.controller?.state}</p>
                <p>Device languages : {navigator.languages.toString()}</p>
                <p>Avaliable languages : {intl.getI18next().languages.toString()}</p>
                <p>Selected languages : {intl.getI18next().language}</p>
                <p>Page Resolution : {screen()[0]} x {screen()[1]}</p>
                <p>Aspect ratio : {screen()[0] / screen()[1]}</p>
                <p>Mouse Position : ({mouse()[0]} , {mouse()[1]}) </p>
                <button onClick={() => setShowOverlay(false)}>
                    Click Here or focus with Tab to hide Overlay
                </button>
            </solid.Show>
        </div>
    )
}

export default GeneralOverlay;