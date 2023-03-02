import * as solid from "solid-js";
import clsx from "clsx";


import style from "./NormalInput.module.scss";
import { useInputModel } from "Components/Functions/ActivateModel/activateModel";



const NormalInput: solid.Component<solid.JSX.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const lengthFlag = props.maxLength;
    const [length, setLength] = solid.createSignal(0);

    const inputModel = useInputModel();

    return (
        <div class={style.inputContainer}>
            <input {...props} class={clsx(style.input, props.class)} placeholder={""} use:inputModel={[length, setLength]} />
            <span class={clsx(style.placeholder, !length() && style.active)}>
                {props.placeholder}
            </span>
            <span class={clsx(style.textCount, lengthFlag && style.active)}>
                {length} / {props.maxLength}
            </span>
        </div>
    )
}

export default NormalInput;