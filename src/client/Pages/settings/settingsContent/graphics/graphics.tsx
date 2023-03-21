import * as solid from "solid-js";
import { createStore } from "solid-js/store";
import { useTransContext } from "@mbarzda/solid-i18next";

import TranslateText from "Components/TranslateText/translateText";
import RangeInput from "Components/RangeInput/rangeInput";

import SettingsTemplate from "Pages/settings/settingsTemplate/settingsTemplate";

import { getGameConfig } from "Utils/getConfig/getConfig";

import { gameConfigStore, setGameConfigStore } from "State/gameCondigStore";

import { settingsData } from "Types/Settings/settings";

import style from "./graphics.module.scss";
import ToggleSwitch from "Components/toggleSwitch/toggleSwitch";



const GraphicsSettings: solid.Component = () => {
    const [t, intl] = useTransContext();
    const [graphicsConfig, setGraphicsConfig] = createStore(gameConfigStore.ready ? gameConfigStore.data.graphics : getGameConfig().graphics);

    const graphicsContents: Array<settingsData> = [
        {
            label: <TranslateText key="settings.graphics.gameResolution.name" />,
            input: <RangeInput value={graphicsConfig.resolution * 100} max={200} min={1} onChange={v => setGraphicsConfig("resolution", v / 100)} />,
            details: {
                description: <TranslateText key="settings.graphics.gameResolution.description" />
            }
        },
        {
            label: <TranslateText key="settings.graphics.gameFps.name" />,
            input: <RangeInput value={graphicsConfig.fps} max={900} min={1} onChange={v => setGraphicsConfig("fps", v)} />,
            details: {
                description: <TranslateText key="settings.graphics.gameFps.description" />
            }
        },
        {
            label: <TranslateText key="settings.graphics.gameAntiAliasing.name" />,
            input: <ToggleSwitch checked={graphicsConfig.antiAlias} onChange={v => setGraphicsConfig("antiAlias", v.currentTarget.checked)} />,
            details: {
                description: <TranslateText key="settings.graphics.gameAntiAliasing.description" />
            }
        },
        {
            label: <TranslateText key="settings.graphics.autoFullScreen.name" />,
            input: <ToggleSwitch checked={graphicsConfig.autoFullScreen} onChange={v => setGraphicsConfig("autoFullScreen", v.currentTarget.checked)} />,
            details: {
                description: <TranslateText key="settings.graphics.autoFullScreen.description" />
            }
        },
    ]

    solid.createEffect(() => {
        setGameConfigStore("data", { graphics: graphicsConfig });
    });

    return (
        <SettingsTemplate
            title={t("settings.graphics.title")}
            content={graphicsContents}
        />
    )
}

export default GraphicsSettings;