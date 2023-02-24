import { useBeforeLeave, useLocation, useNavigate } from "@solidjs/router";
import * as solid from "solid-js";
import { useTransContext } from "@mbarzda/solid-i18next";

import style from "./home.module.scss";

import TranslateText from "Components/TranslateText/translateText";


const MenuContent: solid.Component = () => {
    const [t] = useTransContext();
    let containerRef: HTMLDivElement | undefined;


    return (
        <div class={style.menu} ref={containerRef} >
            <button class={style.playButton}><TranslateText key="menu.play" /></button>
        </div >
    )
}

export default MenuContent;