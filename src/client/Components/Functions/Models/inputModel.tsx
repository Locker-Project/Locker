import * as solid from "solid-js";
import { playClickAudio, playHoverAudio } from "Utils/PlayAudio/playButtonAudio";

declare module "solid-js" {
    namespace JSX {
        interface Directives {
            inputModel: [() => number, (v: number) => number];
        }
    }
}

function inputModel(el: HTMLInputElement, value: () => solid.JSX.Directives["inputModel"]) {
    const [length, setLength] = value();
    solid.onMount(() => {
        el.addEventListener("input", () => setLength(el.value.length));
        el.addEventListener("click", () => playClickAudio());
        el.addEventListener("pointerenter", () => playHoverAudio());
    });
    solid.onCleanup(() => {
        el.removeEventListener("input", () => setLength(el.value.length));
        el.removeEventListener("click", () => playClickAudio());
        el.removeEventListener("pointerenter", () => playHoverAudio());
    })
}

export default inputModel;