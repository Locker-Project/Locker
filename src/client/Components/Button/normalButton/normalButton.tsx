import * as solid from "solid-js";

import style from "./normalButton.module.scss";

import { useButtonModel } from "Components/Functions/ActivateModel/activateModel";

interface buttonPropsType extends solid.JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    accentColor?: string
}


const NormalButton: solid.Component<buttonPropsType> = (props) => {

    let buttonRef: HTMLButtonElement | undefined;

    const buttonModel = useButtonModel();

    function handleClick() {
        navigator.vibrate(50);
    }

    const buttonProps = props;
    delete buttonProps.accentColor;


    return (
        <button tabIndex={0} ref={buttonRef} {...buttonProps} class={`${style.button} ${props.class || ""}`} use:buttonModel={{ handleClick }} >
            {props.children}
        </button>
    )
}

export default NormalButton;