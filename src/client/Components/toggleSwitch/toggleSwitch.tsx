import * as solid from "solid-js";
import style from "./toggleSwitch.module.scss"

import clsx from "clsx";
const ToggleSwitch: solid.Component<solid.JSX.HTMLAttributes<HTMLInputElement>> = (props) => {

    return (
        <label class={clsx(style.wrapper, props.class)}>
            <input {...props} type="checkbox" class={style.toggle} />
        </label>
    )
}

export default ToggleSwitch