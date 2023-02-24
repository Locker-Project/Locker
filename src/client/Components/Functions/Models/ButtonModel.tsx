import * as solid from "solid-js";

import * as playAudio from "Utils/PlayAudio/playButtonAudio";

declare module "solid-js" {
    namespace JSX {
        interface Directives {
            buttonModel: {
                handleClick?: EventListenerOrEventListenerObject,
                handleHover?: EventListenerOrEventListenerObject
            };
        }
    }
}

function buttonModel(el: Element, props: () => solid.JSX.Directives["buttonModel"]) {
    solid.onMount(() => {
        el.addEventListener("click", props().handleClick || function () { });
        el.addEventListener("click", playAudio.playClickAudio);
        el.addEventListener("pointerenter", props().handleHover || function () { });
        el.addEventListener("pointerenter", playAudio.playHoverAudio);
        el.addEventListener("focusin", props().handleClick || function () { });
        el.addEventListener("focusin", playAudio.playHoverAudio);
    });
    solid.onCleanup(() => {
        el.removeEventListener("click", props().handleClick || function () { });
        el.removeEventListener("click", playAudio.playClickAudio);
        el.removeEventListener("pointerenter", props().handleHover || function () { });
        el.removeEventListener("pointerenter", playAudio.playHoverAudio);
        el.removeEventListener("focusin", props().handleClick || function () { });
        el.removeEventListener("focusin", playAudio.playHoverAudio);
    })
}

export default buttonModel