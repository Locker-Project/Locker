import * as solid from "solid-js";
import { useTransContext } from "@mbarzda/solid-i18next";

import TranslateText from "Components/TranslateText/translateText";

import SettingsTemplate from "Pages/settings/settingsTemplate/settingsTemplate";

import { settingsData } from "Types/Settings/settings";

import style from "./gameplay.module.scss";
import KeybindDetails from "./keybindDetails";



const GameplaySettings: solid.Component = () => {
    const [t, intl] = useTransContext();

    const generalContents: Array<settingsData> = [
        {
            label: <TranslateText key="settings.gameplay.keybind.key2.name" />,
            input: <></>,
            details: {
                description: <KeybindDetails key="settings.gameplay.keybind.key2" count={2} />
            }
        },
        {
            label: <TranslateText key="settings.gameplay.keybind.key3.name" />,
            input: <></>,
            details: {
                description: <KeybindDetails key="settings.gameplay.keybind.key3" count={3} />
            }
        },
        {
            label: <TranslateText key="settings.gameplay.keybind.key4.name" />,
            input: <></>,
            details: {
                description: <KeybindDetails key="settings.gameplay.keybind.key4" count={4} />
            }
        },
        {
            label: <TranslateText key="settings.gameplay.keybind.key5.name" />,
            input: <></>,
            details: {
                description: <KeybindDetails key="settings.gameplay.keybind.key5" count={5} />
            }
        }
    ]

    return (
        <SettingsTemplate
            title={t("settings.gameplay.title")}
            content={generalContents}
        />
    )
}

export default GameplaySettings;