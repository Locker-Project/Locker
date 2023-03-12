import { Howl, HowlOptions } from "howler";

import clickSound from "Assets/Sounds/ui/clickDown.m4a";
import selectSound from "Assets/Sounds/ui/select.m4a";
import { gameConfigStore } from "State/gameCondigStore";
import { getGameConfig } from "Utils/getConfig/getConfig";


function playClickAudio(): Howl {

    const volume = gameConfigStore.ready && gameConfigStore.data.audio.uiVolume || getGameConfig().audio.uiVolume;

    const audio = new Howl({
        src: clickSound,
        volume
    });
    audio.play();

    audio.once("end", () => audio.unload());

    return audio;
}

function playHoverAudio(): Howl {

    const volume = gameConfigStore.ready && gameConfigStore.data.audio.uiVolume || getGameConfig().audio.uiVolume;

    const audio = new Howl({
        src: selectSound,
        volume
    });
    audio.play();

    audio.once("end", () => audio.unload());

    return audio;
}

export { playHoverAudio, playClickAudio };