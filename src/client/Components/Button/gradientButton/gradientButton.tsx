import * as solid from "solid-js";
import playAudio from "Utils/PlayAudio/playAudio";
import buttonModel from "Components/Functions/Models/ButtonModel";

import style from "./gradientButton.module.scss";

import clickSound from "Assets/Sounds/ui/clickDown.m4a";
import selectSound from "Assets/Sounds/ui/select.m4a";
import activateModel from "Components/Functions/ActivateModel/activateModel";

interface buttonPropsType extends solid.JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    accentColor?: string
}


const GradientButton: solid.Component<buttonPropsType> = (props) => {

    let buttonRef: HTMLButtonElement | undefined;

    activateModel(buttonModel);

    function handleClick() {
        playAudio(clickSound);
        navigator.vibrate(50);
    }

    function handleHover() {
        playAudio(selectSound);
    }

    const buttonProps = props;
    delete buttonProps.accentColor;


    return (
        <button tabIndex={0} ref={buttonRef} {...buttonProps} class={`${style.gradientButton} ${props.class || ""}`} use:buttonModel={{handleClick,handleHover}} >
            {props.children}
        </button>
    )
}

export default GradientButton;