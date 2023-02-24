import { Howl, HowlOptions } from "howler";

import clickSound from "Assets/Sounds/ui/clickDown.m4a";
import selectSound from "Assets/Sounds/ui/select.m4a";


function playClickAudio(): Howl {
    const audio = new Howl({
        src: clickSound
    });
    audio.play();

    audio.once("end", () => audio.unload());

    return audio;
}

function playHoverAudio(): Howl {
    const audio = new Howl({
        src: selectSound
    });
    audio.play();

    audio.once("end", () => audio.unload());

    return audio;
}

export { playHoverAudio, playClickAudio };