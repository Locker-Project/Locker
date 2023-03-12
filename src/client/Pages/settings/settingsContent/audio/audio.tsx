import * as solid from "solid-js";
import { createStore } from "solid-js/store";
import { useTransContext } from "@mbarzda/solid-i18next";

import TranslateText from "Components/TranslateText/translateText";
import RangeInput from "Components/RangeInput/rangeInput";
import AudioDetailsWithPreview from "./audioDetailsWithPreview";

import SettingsTemplate from "Pages/settings/settingsTemplate/settingsTemplate";

import { getGameConfig } from "Utils/getConfig/getConfig";

import { gameConfigStore, setGameConfigStore } from "State/gameCondigStore";

import { settingsData } from "Types/Settings/settings";

import style from "./audio.module.scss";



const AudioSettings: solid.Component = () => {
    const [t, intl] = useTransContext();
    const [audioConfig, setAudioConfig] = createStore(gameConfigStore.ready ? gameConfigStore.data.audio : getGameConfig().audio);

    const audioContents: Array<settingsData> = [
        {
            label: <TranslateText key="settings.audio.masterVolume.name" />,
            input: <RangeInput value={audioConfig.masterVolume * 100} max={100} min={0} onChange={v => setAudioConfig("masterVolume", v / 100)} />,
            details: {
                description: <AudioDetailsWithPreview key="settings.audio.masterVolume.description" volume={1} />
            }
        },
        {
            label: <TranslateText key="settings.audio.musicVolume.name" />,
            input: <RangeInput value={audioConfig.musicVolume * 100} max={100} min={0} onChange={v => setAudioConfig("musicVolume", v / 100)} />,
            details: {
                description: <AudioDetailsWithPreview key="settings.audio.musicVolume.description" volume={audioConfig.musicVolume} />
            }
        },
        {
            label: <TranslateText key="settings.audio.effectVolume.name" />,
            input: <RangeInput value={audioConfig.effectVolume * 100} max={100} min={0} onChange={v => setAudioConfig("effectVolume", v / 100)} />,
            details: {
                description: <AudioDetailsWithPreview key="settings.audio.effectVolume.description" volume={audioConfig.effectVolume} />
            }
        },
        {
            label: <TranslateText key="settings.audio.uiVolume.name" />,
            input: <RangeInput value={audioConfig.uiVolume * 100} max={100} min={0} onChange={v => setAudioConfig("uiVolume", v / 100)} />,
            details: {
                description: <AudioDetailsWithPreview key="settings.audio.uiVolume.description" volume={audioConfig.effectVolume} />
            }
        },
        {
            label: <TranslateText key="settings.audio.stereo.name" />,
            input: <RangeInput value={(audioConfig.audioStereo + 1 * 50)} max={100} min={0} onChange={v => setAudioConfig("audioStereo", (v / 50) - 1)} />,
            details: {
                description: <AudioDetailsWithPreview key="settings.audio.stereo.description" volume={1} />
            }
        },
    ]

    solid.createEffect(() => {
        setGameConfigStore("data", { audio: audioConfig });
        Howler.volume(audioConfig.masterVolume);
        Howler.stereo(audioConfig.audioStereo);
    });

    return (
        <SettingsTemplate
            title={t("settings.audio.title")}
            content={audioContents}
        />
    )
}

export default AudioSettings;