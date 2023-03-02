import { useBeforeLeave, useLocation, useNavigate } from "@solidjs/router";
import * as solid from "solid-js";
import { useTransContext } from "@mbarzda/solid-i18next";

import style from "./home.module.scss";

import TranslateText from "Components/TranslateText/translateText";
import { useButtonModel } from "Components/Functions/ActivateModel/activateModel";


const MenuContent: solid.Component = () => {
    const [t] = useTransContext();
    let containerRef: HTMLDivElement | undefined;
    const navigate = useNavigate();
    const buttonModel = useButtonModel();

    function handleClick() {
        navigate("/select");
    }

    return (
        <div class={style.menu} ref={containerRef} >
            <button class={style.playButton} onClick={handleClick} use:buttonModel={{}}><TranslateText key="menu.play" /></button>
        </div >
    )
}

export default MenuContent;