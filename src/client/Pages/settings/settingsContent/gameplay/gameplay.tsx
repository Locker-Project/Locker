import * as solid from "solid-js";
import { useTransContext } from "@mbarzda/solid-i18next";

import TranslateText from "Components/TranslateText/translateText";

import SettingsTemplate from "Pages/settings/settingsTemplate/settingsTemplate";

import { settingsData } from "Types/Settings/settings";

import style from "./gameplay.module.scss";
import KeybindDetails from "./keybindDetails";
import SettingsIndicator from "../settingsIndicator/indicator";
import OffsetDetails from "./offsetDetails";
import NumberInput from "Components/numberInput/numberInput";
import { gameConfigStore, setGameConfigStore } from "State/gameCondigStore";
import { getGameConfig } from "Utils/getConfig/getConfig";
import { createStore } from "solid-js/store";
import JudgeTimingDetails from "./judgeTimingDetails";



const GameplaySettings: solid.Component = () => {
    const [t, intl] = useTransContext();

    const [config, setConfig] = createStore(gameConfigStore.ready ? gameConfigStore.data.gameplay : getGameConfig().gameplay);

    const generalContents: Array<settingsData> = [
        {
            label: <TranslateText key="settings.gameplay.keybind.key2.name" />,
            input: <SettingsIndicator />,
            details: {
                description: <KeybindDetails key="settings.gameplay.keybind.key2" count={2} />
            }
        },
        {
            label: <TranslateText key="settings.gameplay.keybind.key3.name" />,
            input: <SettingsIndicator />,
            details: {
                description: <KeybindDetails key="settings.gameplay.keybind.key3" count={3} />
            }
        },
        {
            label: <TranslateText key="settings.gameplay.keybind.key4.name" />,
            input: <SettingsIndicator />,
            details: {
                description: <KeybindDetails key="settings.gameplay.keybind.key4" count={4} />
            }
        },
        {
            label: <TranslateText key="settings.gameplay.keybind.key5.name" />,
            input: <SettingsIndicator />,
            details: {
                description: <KeybindDetails key="settings.gameplay.keybind.key5" count={5} />
            }
        },
        {
            label: <TranslateText key="settings.gameplay.offset.name" />,
            input: <NumberInput value={config.timing.offset} min={-2000} max={2000} onChange={v => setConfig("timing", "offset", v)} />,
            details: {
                description: <OffsetDetails />
            }
        },
        {
            label: <TranslateText key="settings.gameplay.judgeTiming.name" />,
            input: <NumberInput value={config.timing.judge} min={-2000} max={2000} onChange={v => setConfig("timing", "judge", v)} />,
            details: {
                description: <JudgeTimingDetails />
            }
        }
    ]

    solid.createEffect(() => {
        setGameConfigStore("data", { gameplay: config })
    })
    return (
        <SettingsTemplate
            title={t("settings.gameplay.title")}
            content={generalContents}
        />
    )

}

export default GameplaySettings;