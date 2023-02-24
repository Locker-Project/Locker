import * as solid from "solid-js";
import buttonModel from "Components/Functions/Models/ButtonModel";

import style from "./gradientButton.module.scss";

import activateModel from "Components/Functions/ActivateModel/activateModel";

interface buttonPropsType extends solid.JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    accentColor?: string
}


const GradientButton: solid.Component<buttonPropsType> = (props) => {

    let buttonRef: HTMLButtonElement | undefined;

    activateModel(buttonModel);

    function handleClick() {
        navigator.vibrate(50);
    }

    const buttonProps = props;
    delete buttonProps.accentColor;


    return (
        <button tabIndex={0} ref={buttonRef} {...buttonProps} class={`${style.gradientButton} ${props.class || ""}`} use:buttonModel={{ handleClick }} >
            {props.children}
        </button>
    )
}

export default GradientButton;