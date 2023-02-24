import * as solid from "solid-js";
import buttonModel from "Components/Functions/Models/ButtonModel";

import style from "./largeButton.module.scss";

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
        navigator.vibrate(50);
    }

    return (
        <button tabIndex={0} ref={buttonRef} {...buttonProps} class={`${style.largeButton} ${props.class || ""}`} use:buttonModel={{ handleClick }} >
            <h2>{props.children}</h2>
        </button>
    )
}

export default LargeButton;