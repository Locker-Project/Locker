import * as solid from "solid-js";
import { useTransContext } from "@mbarzda/solid-i18next";

import TranslateText from "Components/TranslateText/translateText";

import SettingsTemplate from "Pages/settings/settingsTemplate/settingsTemplate";

import { settingsData } from "Types/Settings/settings";

import style from "./gameplay.module.scss";
import { gameConfigStore } from "State/gameCondigStore";
import { selectedMusic } from "Pages/musicSelect/musicSelectState";

const KeybindDetails: solid.Component<{ key: string, count: laneKeys }> = (props) => {
    const [t, intl] = useTransContext();

    let keyLabel = t(`${props.key}.lanes`).split(",");

    solid.createEffect(() => {
        keyLabel = t(`${props.key}.lanes`).split(",");
    })


    return (
        <>
            <TranslateText key="settings.gameplay.keybind.description" />
            <div>
                <solid.For each={keyLabel}>
                    {
                        data => {
                            return (
                                <div>{data}</div>
                            )
                        }
                    }
                </solid.For>
            </div>
        </>
    )
}

export default KeybindDetails;
