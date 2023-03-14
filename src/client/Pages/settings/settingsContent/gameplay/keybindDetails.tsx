import * as solid from "solid-js";
import { useTransContext } from "@mbarzda/solid-i18next";
import { createStore } from "solid-js/store";

import TranslateText from "Components/TranslateText/translateText";

import SettingsTemplate from "Pages/settings/settingsTemplate/settingsTemplate";

import { settingsData } from "Types/Settings/settings";

import style from "./gameplay.module.scss";
import { gameConfigStore, setGameConfigStore } from "State/gameCondigStore";
import { selectedMusic } from "Pages/musicSelect/musicSelectState";
import { getGameConfig } from "Utils/getConfig/getConfig";
import { cloneDeep } from "lodash";
import { useButtonModel } from "Components/Functions/ActivateModel/activateModel";


const KeybindDetails: solid.Component<{ key: string, count: laneKeys }> = (props) => {
    const [t, intl] = useTransContext();
    const [keybindStore, setKeybindStore] = createStore(gameConfigStore.ready && gameConfigStore.data.gameplay.key || getGameConfig().gameplay.key);

    const buttonModel = useButtonModel();

    let key = `key${props.count}` as keyof typeof keybindStore;
    const [keybind, setKeybind] = solid.createSignal(keybindStore[key]);

    let keyLabel = t(`${props.key}.lanes`).split(",");

    solid.createEffect(() => {
        keyLabel = t(`${props.key}.lanes`).split(",");
    });

    function updateKey(key: string, index: number) {
        const keys = cloneDeep(keybind());
        keys[index] = key;
        setKeybind(keys);
    }

    solid.createEffect(() => {
        setKeybindStore(key, keybind());
        setGameConfigStore("data", d => ({ ...d, gameplay: { ...(d as gameConfig).gameplay, key: keybindStore } }));
    })


    return (
        <>
            <TranslateText key="settings.gameplay.keybind.description" />
            <div class={style.keySettings}>
                <solid.For each={keyLabel}>
                    {
                        (data, index) => {
                            const [isActive, setIsActive] = solid.createSignal(false);
                            return (
                                <div class={style.keyBind} tabIndex={0} onKeyDown={e => { setIsActive(false); updateKey(e.code, index()); e.currentTarget.blur() }} onFocusIn={() => setIsActive(true)} onFocusOut={() => setIsActive(false)} use:buttonModel={{}}>
                                    <span>{data}</span>
                                    <span>
                                        {
                                            isActive() ? <TranslateText key="settings.gameplay.keybind.edit" /> : keybind()[index()]
                                        }
                                    </span>
                                </div>
                            )
                        }
                    }
                </solid.For>
            </div>
        </>
    )
}

export default KeybindDetails;
