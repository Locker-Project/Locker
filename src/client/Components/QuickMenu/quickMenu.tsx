import * as solid from "solid-js";

import style from "./quickMenu.module.scss";
import { Transition } from "solid-transition-group";
import { setShowQuickMenu, showQuickMenu } from "State/quickMenuState";
import TranslateText from "Components/TranslateText/translateText";
import { useNavigate } from "@solidjs/router";
import { useButtonModel } from "Components/Functions/ActivateModel/activateModel";

const QuickMenu: solid.Component = () => {

    const navigate = useNavigate();
    const buttonModel = useButtonModel();

    let innerRef: HTMLDivElement | undefined;

    const pages = [
        { key: "quickMenu.pages.title", url: "/" },
        { key: "quickMenu.pages.settings", url: "/settings" },
        { key: "quickMenu.pages.select", url: "/select" },
    ]

    function enterAnimation(el: Element, done: () => void) {
        const animation = el.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 300,
            fill: "forwards",
            easing: "ease"
        });
        Promise.all([innerEnter(), animation.finished]).then(done);
    }

    function innerEnter() {
        return new Promise<void>(resolve => {
            if (!innerRef) {
                resolve();
                return;
            }
            const animation = innerRef.animate([{ right: "-25%" }, { right: 0 }], {
                duration: 300,
                fill: "forwards",
                easing: "ease"
            });
            animation.finished.then(() => resolve())
        })
    }

    function exitAnimation(el: Element, done: () => void) {
        const animation = el.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 300,
            fill: "forwards",
            easing: "ease"
        });
        Promise.all([innerExit(), animation.finished]).then(done);
    }

    function innerExit() {
        return new Promise<void>(resolve => {
            if (!innerRef) {
                resolve();
                return;
            }
            const animation = innerRef.animate([{ right: 0 }, { right: "-25%" }], {
                duration: 300,
                fill: "forwards",
                easing: "ease"
            });
            animation.finished.then(() => resolve())
        })
    }

    return (
        <Transition onEnter={enterAnimation} onExit={exitAnimation}>
            <solid.Show when={showQuickMenu()}>
                <div class={style.quickMenu} onClick={() => setShowQuickMenu(false)}>
                    <div class={style.inner} ref={innerRef} onClick={e => e.stopPropagation()}>
                        <h2>Locker Quick Menu</h2>
                        <hr />
                        <h3><TranslateText key="quickMenu.jump" /></h3>
                        <div>
                            <solid.For each={pages}>
                                {
                                    page => (
                                        <div class={style.jumpPage} onClick={() => navigate(page.url)} use:buttonModel={{}}>
                                            <h3><TranslateText key={page.key} /></h3>
                                        </div>
                                    )
                                }
                            </solid.For>
                        </div>
                    </div>
                </div>
            </solid.Show>
        </Transition>
    )
}

export default QuickMenu;