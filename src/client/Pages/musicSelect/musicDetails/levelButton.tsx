import * as solid from "solid-js";
import upperCaseFirstCharacter from "Utils/upperCaseFirstCharacter/upperCaseFirstCharacter";
import NormalButton from "Components/Button/normalButton/normalButton";

import { selectedMusic, setMusicDifficulty } from "../musicSelectState";

import style from "./musicDetails.module.scss";

const LevelButton: solid.Component<{ level: difficulty }> = (props) => {

    const [avaliable, setAvaliable] = solid.createSignal<boolean>(false);
    const [levelValue, setLevelValue] = solid.createSignal<string | number>("-");

    function handleClick() {
        setMusicDifficulty(props.level)
    }

    solid.createEffect(() => {
        setAvaliable(Boolean(selectedMusic().data?.chart[props.level]));
        setLevelValue(avaliable() ? (selectedMusic().data?.chart[props.level] as gameChart).metadata?.level : "-")
    });

    return (
        <NormalButton onClick={handleClick} class={style[props.level]} disabled={!avaliable()}>
            {upperCaseFirstCharacter(props.level)}&#8195;
            {levelValue()}
        </NormalButton>
    )

}

export default LevelButton;