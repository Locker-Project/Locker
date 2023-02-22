import * as solid from "solid-js";
import { useBeforeLeave, useLocation, useNavigate } from "@solidjs/router";
import { BsArrowUp, BsArrowUpLeft, BsGear } from "solid-icons/bs";
import { useTransContext } from "@mbarzda/solid-i18next";

import GlitchImage from "Components/GlitchImage/glitchImage";
import TranslateText from "Components/TranslateText/translateText";

import { showModal, setShowModal, canBegin } from "./titleState";
import SettingsModal from "./settingsModal/settingsModal";

import playAudio from "Utils/PlayAudio/playAudio";

import version from "Assets/StaticInfo/version.json";

/* import background from "Assets/Images/tidal_wreck_far_camera.png"; */
import clickSound from "Assets/Sounds/uiFallBack/clickDown.m4a";
import selectSound from "Assets/Sounds/uiFallBack/select.m4a";

import style from "./title.module.scss";
import clsx from "clsx";


declare module "solid-js" {
    namespace JSX {
        interface Directives {
            titleButtonModel: boolean;
        }
    }
}

const Title: solid.Component = () => {
    const navigate = useNavigate();
    const [t, intl] = useTransContext();
    const [fadeOut, setFadeOut] = solid.createSignal<boolean>(false);

    let containerRef: HTMLDivElement | undefined;

    function closeWindow() {
        window.close();
        //location.href = "https://feature-me-.onrender.com/"
        history.back()
    }

    function navigateHome() {
        navigate("/home");
    }

    function handleClick() {
        playAudio(clickSound);
        navigator.vibrate(50);
    }

    function handleHover() {
        playAudio(selectSound);
    }

    function titleButtonModel(el: Element) {
        solid.onMount(() => {
            el.addEventListener("click", handleClick);
            el.addEventListener("pointerenter", handleHover);
            el.addEventListener("focusin", handleHover);
        });
        solid.onCleanup(() => {
            el.removeEventListener("click", handleClick);
            el.removeEventListener("pointerenter", handleHover);
            el.removeEventListener("focusin", handleHover);
        })
    }

    useBeforeLeave(async (e) => {
        if (!e.defaultPrevented) e.preventDefault();
        if (!containerRef) return;
        setFadeOut(true);
        setTimeout(() => {
            e.retry(true);
        }, 1000)
    })

    return (
        <div class={style.title} ref={containerRef} classList={{ blackOut: fadeOut() }}>
            <div class={style.background}>
                {/* <GlitchImage src={background} /> */}
            </div>
            <div class={style.titleText}>
                <h1 class={clsx("shadowTitle", style.titleName)}>Locker</h1>
                <div class={style.buttons}>
                    <solid.Show when={canBegin()} fallback={<button use:titleButtonModel><TranslateText key="title.needReload" /></button>}>
                        <button onClick={navigateHome} use:titleButtonModel>
                            <TranslateText key="title.start" />
                        </button>
                    </solid.Show>
                </div>
            </div>
            <div class={style.footer}>
                <p>Locker {version.version}<br /> ©{new Date().getFullYear()} Locker Project All rights reserved. Designed by Mksk.</p>
                <span><TranslateText key="title.language" /></span>
                <button class={`iconWrapper ${style.settings}`} onClick={() => { setShowModal(m => !m) }} use:titleButtonModel >
                    <BsGear class={style.settingsIcon} />
                </button>
            </div>
            <SettingsModal />
        </div >
    )
}

export default Title;