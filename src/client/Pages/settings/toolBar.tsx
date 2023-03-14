import { useBeforeLeave, useLocation, useNavigate } from "@solidjs/router";
import * as solid from "solid-js";
import { BsArrowUp, BsArrowUpLeft, BsChevronLeft, BsGear } from "solid-icons/bs";
import { useTransContext } from "@mbarzda/solid-i18next";
import clsx from "clsx";


import TranslateText from "Components/TranslateText/translateText";
import { useButtonModel } from "Components/Functions/ActivateModel/activateModel";
import TransparentInput from "Components/TextInput/TransparentInput/TransparentInput";
import { setSettingsSearchText } from "./settingsState";

import style from "./settings.module.scss";
import NormalButton from "Components/Button/normalButton/normalButton";
import { v4 as uuidv4 } from "uuid";



const SettingToolbar: solid.Component = () => {
    const [t] = useTransContext();
    const navigate = useNavigate();
    const buttonModel = useButtonModel();
    const [selectedTab, setSelectedTab] = solid.createSignal(t("settings.general.title"));

    let containerRef: HTMLDivElement | undefined;

    const settingTabs = [
        { label: t("settings.general.title"), url: "./" },
        { label: t("settings.gameplay.title"), url: "./gameplay" },
        { label: t("settings.graphics.title"), url: "./graphics" },
        { label: t("settings.audio.title"), url: "./audio" }
    ]

    function navigateHome() {
        navigate("/home");
    }

    return (
        <div class={style.toolbar} ref={containerRef} >
            <button onClick={navigateHome} class={style.navigateButton} use:buttonModel={{}}>
                <BsChevronLeft />
                <TranslateText key="settings.back" />
            </button>
            <div class={style.tabs}>
                <solid.For each={settingTabs}>
                    {tab => {
                        const handleClick = () => {
                            setSelectedTab(tab.label); navigate(tab.url)
                        }
                        return (
                            <label class={clsx(style.tab, (tab.label == selectedTab()) && style.active)} tabIndex={0} use:buttonModel={{}} onClick={handleClick} >
                                {tab.label}
                            </label>
                        )
                    }}
                </solid.For>
            </div>
            <div class={style.searchContainer}>
                <TransparentInput class={style.search} placeholder={t("settings.search").toString()} onInput={(e) => setSettingsSearchText(e.currentTarget.value)} />
            </div>
        </div>
    )
}

export default SettingToolbar;