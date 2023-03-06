import * as solid from "solid-js";
import { BsArrowUp, BsArrowUpLeft, BsBatteryFull, BsChatLeftDots, BsGear, BsGithub, BsGrid3x3Gap, BsLink45deg, BsVolumeUp, BsWifi } from "solid-icons/bs";

import timeDegitFormat from "Utils/timeFormat/timeDigitFormat";
import TranslateText from "Components/TranslateText/translateText";

import defaultUrl from "Assets/StaticInfo/defaultUrl.json";

import style from "./header.module.scss";

import { useButtonModel } from "Components/Functions/ActivateModel/activateModel";

declare module "solid-js" {
    namespace JSX {
        interface Directives {
            headerIconModel: boolean;
        }
    }
}

const Header: solid.Component<{ title: solid.JSXElement }> = (props) => {
    let containerRef: HTMLDivElement | undefined;

    const [clock, setClock] = solid.createSignal(new Date());

    const [elapsedTime, setElapsedTime] = solid.createSignal(performance.now());
    const [elapsedHours, setElapsedHours] = solid.createSignal(0);
    const [elapsedMinutes, setElapsedMinutes] = solid.createSignal(0);

    let clockInterval: NodeJS.Timer;

    const icons = [
        //{ element: <BsVolumeUp />, onClick: () => { } },
        //{ element: <BsGear />, onClick: () => { } },
        { element: <BsLink45deg />, onClick: () => { } },
        { element: <BsGithub />, onClick: () => { open(defaultUrl.github.repo) } },
        { element: <BsGrid3x3Gap />, onClick: () => { } },
    ]

    const buttonModel = useButtonModel();

    solid.onMount(() => {
        clockInterval = setInterval(updateClock, 1000);
    });

    solid.onCleanup(() => {
        clearInterval(clockInterval);
    });

    function updateClock() {
        const elapsed = performance.now()
        setClock(new Date());
        setElapsedTime(elapsed);
        const hr = elapsed / 3600000;
        const min = elapsed / 60000;
        setElapsedHours(Math.floor(hr));
        setElapsedMinutes(Math.floor(min - Math.floor(hr) * 60));

    }

    function handleClick() {
        navigator.vibrate(50);
    }

    return (
        <header class={style.header} ref={containerRef} >
            <h1 class="shadowTitle">{props.title}</h1>
            <div class={style.spacer} />
            <div class={style.clock}>
                {timeDegitFormat(clock().getHours())}:{timeDegitFormat(clock().getMinutes())}
                (
                {timeDegitFormat(elapsedHours())}:{timeDegitFormat(elapsedMinutes())}
                <TranslateText key="head.sessionTime" />
                )
            </div>
            <div class={style.icons}>
                <solid.For each={icons}>
                    {
                        content => {
                            return (
                                <button class={style.icon} onClick={content.onClick} use:buttonModel={{ handleClick }}>
                                    {content.element}
                                </button>
                            )
                        }
                    }
                </solid.For>
            </div>
        </header >
    )
}

export default Header;