import * as solid from "solid-js";
import style from "./rangeInput.module.scss";
import clsx from "clsx";

interface rangeInputPropsType extends propsType {
    min?: number
    max?: number
    step?: number
    value?: number
    size?: "tiny" | "fit" | "large"
    onChange?: FunctionWithTypedProps<number>
}

const RangeInput: solid.Component<rangeInputPropsType> = (props) => {

    const [value, setValue] = solid.createSignal(props.value || 50);

    function handleChange(newValue: number) {
        if (newValue) {
            setValue(Number(newValue));
            if (props.onChange)
                props.onChange(newValue)
        }
    }

    return (
        <div class={style.rangeinputWrapper}>
            <input type="range" class={clsx(style.rangeinput, style[props.size || "tiny"], props.class)} min={props.min || 0} max={props.max || 100} step={props.step || 1} value={value()} onInput={(e) => { handleChange(Number(e.currentTarget.value)) }} />
            <input type="number" class={style.rangeinputNumber} min={props.min} max={props.max || 100} step={props.step || 1} value={value()} onChange={(e) => { handleChange(Number(e.currentTarget.value)) }} />
        </ div>
    )
}

export default RangeInput;