import { useBeforeLeave, useLocation, useNavigate } from "@solidjs/router";
import * as solid from "solid-js";
import { BsArrowUp, BsArrowUpLeft, BsChevronLeft, BsGear } from "solid-icons/bs";
import { useTransContext } from "@mbarzda/solid-i18next";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";

import style from "./musicSelect.module.scss";

import TranslateText from "Components/TranslateText/translateText";
import { useButtonModel } from "Components/Functions/ActivateModel/activateModel";
import TransparentInput from "Components/TextInput/TransparentInput/TransparentInput";
import { filter, setFilter, setSearchText } from "./musicSelectState";


const MusicSelectToolbar: solid.Component = () => {
    const [t] = useTransContext();
    const navigate = useNavigate();
    const buttonModel = useButtonModel();

    const filterIdentifier = uuidv4();

    let containerRef: HTMLDivElement | undefined;

    const filterList = [
        { label: t("musicSelect.all"), value: 0 },
        { label: t("musicSelect.official"), value: 1 },
        { label: t("musicSelect.fanmade"), value: 2 }
    ]

    function navigateHome() {
        navigate("/home");
    }

    return (
        <div class={style.toolbar} ref={containerRef} >
            <button onClick={navigateHome} class={style.navigateButton} use:buttonModel={{}}>
                <BsChevronLeft />
                <TranslateText key="musicSelect.back" />
            </button>
            <div></div>
            <div class={style.searchContainer}>
                <TransparentInput class={style.search} placeholder={t("musicSelect.search").toString()} onInput={(e) => setSearchText(e.currentTarget.value)} />
            </div>
            <div class={style.filterContainer}>
                <span><TranslateText key="musicSelect.filter" /></span>
                <solid.For each={filterList}>
                    {
                        content => (
                            <label class={clsx(style.filterRadio, (content.value == filter()) && style.active)} use:buttonModel={{}}>
                                <input type="radio" name={filterIdentifier} value={content.value} onChange={() => setFilter(content.value)} />
                                {content.label}
                            </label>
                        )
                    }
                </solid.For>
            </div>
        </div >
    )
}

export default MusicSelectToolbar;