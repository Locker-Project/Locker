import * as solid from "solid-js";
import { BsPlus, BsDash, BsChevronDoubleLeft, BsChevronDoubleRight } from "solid-icons/bs";

import style from "./numberInput.module.scss";

interface rangeInputPropsType extends propsType {
    min?: number
    max?: number
    step?: number
    bigStep?: number
    value?: number
    onChange?: FunctionWithTypedProps<number>
}

const NumberInput: solid.Component<rangeInputPropsType> = (props) => {

    const min = props.min ?? 0;
    const max = props.max ?? 100;
    const step = props.step ?? 1;
    const [value, setValue] = solid.createSignal(props.value ?? ((max - min) / 2 + min));

    function handleChange(num: number) {
        let newValue = value();
        newValue += num;
        if (newValue < min) newValue = min
        else if (newValue > max) num = max

        setValue(newValue);

        if (props.onChange)
            props.onChange(newValue)
    }


    return (
        <div class={style.numberinput_wrapper}>
            <div class={style.icon} onClick={() => handleChange(-step * 10)}>
                <BsChevronDoubleLeft />
            </div>
            <div class={style.icon} onClick={() => handleChange(-step)}>
                <BsDash />
            </div>
            <input type="number" class={style.number} max={max} min={min} step={step} value={value()} onInput={e => handleChange(Number(e.currentTarget.value) - value())} />
            <div class={style.icon} onClick={() => handleChange(step)}>
                <BsPlus />
            </div>
            <div class={style.icon} onClick={() => handleChange(step * 10)}>
                <BsChevronDoubleRight />
            </div>
        </ div>
    )
}

export default NumberInput;