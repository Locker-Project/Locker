import * as solid from "solid-js";
import { useTransContext } from "@mbarzda/solid-i18next";
import { createStore } from "solid-js/store";

import TranslateText from "Components/TranslateText/translateText";
import { settingsData } from "Types/Settings/settings";

import style from "./gameplay.module.scss";
import NormalButton from "Components/Button/normalButton/normalButton";
const OffsetDetails: solid.Component = () => {
    const [t, intl] = useTransContext();

    return (
        <>
            <TranslateText key="settings.gameplay.offset.description" />
            <NormalButton>
                <TranslateText key="settings.gameplay.startAdjust" />
            </NormalButton>
        </>
    )
}

export default OffsetDetails;
