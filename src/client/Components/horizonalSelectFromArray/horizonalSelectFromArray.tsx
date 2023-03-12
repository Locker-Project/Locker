import * as solid from "solid-js";
import { BsChevronLeft, BsChevronRight } from "solid-icons/bs";
import style from "./horizonalSelectFromArray.module.scss";
import clsx from "clsx";

interface horizonalSelectPropsType extends propsType {
    contents: Array<selectContents>
    onChange?: FunctionWithTypedProps<selectContents>
    value: selectContents
}

const HorizonalSelectFromArray: solid.Component<horizonalSelectPropsType> = (props) => {
    const [value, setValue] = solid.createSignal<any>(props.value.value);
    const [label, setLabel] = solid.createSignal<solid.JSXElement>(props.value.label);
    const [index, setIndex] = solid.createSignal<number>(props.contents.findIndex(c => c == props.value) || 0);

    //when button is clicked,index is changed.after,value will be changed
    solid.createSignal(() => {
        const newData = props.contents[index()];

        setValue(newData.value);
        setLabel(newData.label);
        if (props.onChange) props.onChange({ ...newData });
    })

    function handleClick(num: number) {
        let indexValue = index();
        indexValue += num;
        if (indexValue < 0) indexValue = props.contents.length - 1;
        else if (indexValue > props.contents.length - 1) indexValue = 0;

        setIndex(indexValue);
    }

    return (
        <div class={clsx(style.horizonalSelect, props.class)}>
            <div class={style.arrowBtn} onClick={() => handleClick(-1)}>
                <BsChevronLeft />
            </div>
            <div class={style.label}>
                <span>{label}</span>
                <div class={style.indexPoint}>
                    <solid.Index each={props.contents}>
                        {(item, indexNum) =>
                            <div data-index={String(Boolean(indexNum == index()))}></div>
                        }
                    </solid.Index>
                </div>
            </div>
            <div class={style.arrowBtn} onClick={() => handleClick(1)}>
                <BsChevronRight />
            </div>
        </div>
    )
}

export default HorizonalSelectFromArray;