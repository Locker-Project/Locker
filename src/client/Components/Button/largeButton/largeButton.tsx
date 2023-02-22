import * as solid from "solid-js";
import playAudio from "Utils/PlayAudio/playAudio";
import buttonModel from "Components/Functions/Models/ButtonModel";

import style from "./largeButton.module.scss";

import clickSound from "Assets/Sounds/ui/clickDown.m4a";
import selectSound from "Assets/Sounds/ui/select.m4a";
import activateModel from "Components/Functions/ActivateModel/activateModel";


interface buttonPropsType extends solid.JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    accentColor?: string
}

const LargeButton: solid.Component<buttonPropsType> = (props) => {

    let buttonRef: HTMLButtonElement | undefined;

    const buttonProps = props;
    delete buttonProps.accentColor;
    
    activateModel(buttonModel);

    function handleClick() {
        playAudio(clickSound);
        navigator.vibrate(50);
    }

    function handleHover() {
        playAudio(selectSound);
    }

    return (
        <button tabIndex={0} ref={buttonRef} {...buttonProps} class={`${style.largeButton} ${props.class || ""}`} use:buttonModel={{ handleClick, handleHover }} >
            <h2>{props.children}</h2>
        </button>
    )
}

export default LargeButton;