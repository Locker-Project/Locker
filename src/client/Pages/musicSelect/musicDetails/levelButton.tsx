import * as solid from "solid-js";
import upperCaseFirstCharacter from "Utils/upperCaseFirstCharacter/upperCaseFirstCharacter";
import NormalButton from "Components/Button/normalButton/normalButton";

import { selectedMusic } from "../musicSelectState";

import style from "./musicDetails.module.scss";

const LevelButton: solid.Component<{ level: string }> = (props) => {

    const [avaliable, setAvaliable] = solid.createSignal<boolean>(false);
    const [levelValue, setLevelValue] = solid.createSignal<string | number>("-");

    solid.createEffect(() => {
        setAvaliable(Boolean(selectedMusic().data?.chart[props.level]));
        setLevelValue(avaliable() ? (selectedMusic().data?.chart[props.level] as gameChart).metadata?.level : "-")
    })

    return (
        <NormalButton class={style[props.level]} disabled={!avaliable()}>
            {upperCaseFirstCharacter(props.level)}&#8195;
            {levelValue()}
        </NormalButton>
    )

}

export default LevelButton;