import * as solid from "solid-js"; 
import { useBeforeLeave, useNavigate } from "@solidjs/router";

import TranslateText from "Components/TranslateText/translateText";
import sleep from "Utils/sleep/sleep";

import style from "./settings.module.scss"
import NormalButton from "Components/Button/normalButton/normalButton";


const SetupSettings: solid.Component = () => {
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = solid.createSignal<boolean>(false);

    function navigation() {
        navigate("/title");
    }

    useBeforeLeave(async (e) => {
        console.log(location);
        if (location.pathname != "/setup/settings") return;
        if (!e.defaultPrevented) e.preventDefault();
        setFadeOut(true);
        await sleep(300);
        e.retry(true);
    })

    return (
        <div class={style.settings} classList={{ blackOut: fadeOut() }}>
            <h1 class="shadowTitle"><TranslateText key="setup.settings" /></h1>
            <hr />
            <div class={style.contents}>

            </div>
            <hr />
            <div class={style.interactions}>
                <NormalButton onClick={navigation} class={style.button}>
                    <TranslateText key="setup.next" />
                </NormalButton>
            </div>
        </div>
    )
}

export default SetupSettings;