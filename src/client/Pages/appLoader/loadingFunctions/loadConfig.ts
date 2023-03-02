import { Setter } from "solid-js";
import i18next from "i18next";
import { setGameConfigStore } from "State/gameCondigStore";
import { getGameConfig } from "Utils/getConfig/getConfig";

function loadConfigFromLoader(setTitle: Setter<string>, setDescription: Setter<string>) {
    return new Promise<void>((resolve, reject) => {

        try {
            setTitle(i18next.t("appLoader.loadConfig.title").toString());
            setDescription(i18next.t("appLoader.loadConfig.connecting").toString());

            const config = getGameConfig();

            setGameConfigStore("data", config);
            setGameConfigStore("ready", true);
            resolve();
        } catch (error) {
            reject(error);
        }
    })
}

export default loadConfigFromLoader;