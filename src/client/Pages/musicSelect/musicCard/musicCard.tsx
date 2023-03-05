import clsx from "clsx";
import { useButtonModel } from "Components/Functions/ActivateModel/activateModel";
import * as solid from "solid-js";
import { getSelectedMusic } from "Utils/getConfig/getConfig";
import joinMimeAndArrayBuffer from "Utils/mimeType/joinMime/joinMimeAndArrayBuffer";
import { selectedMusic, setSelectedMusic } from "../musicSelectState";

import style from "./musicCard.module.scss";

const MusicCard: solid.Component<{ data: musicAsset }> = (props) => {

    const buttonModel = useButtonModel();

    const [flag, setFlag] = solid.createSignal(false);

    const levelNames = ["easy", "normal", "hard", "expert"]

    function handleClick() {
        setSelectedMusic({ hasData: true, data: props.data });
        const selectedMusic = getSelectedMusic();
        selectedMusic.selected = props.data.metadata.title;
        localStorage.setItem("musicSelect", JSON.stringify(selectedMusic));
    }

    solid.createEffect(() => {
        setFlag(selectedMusic().data?.metadata.title == props.data.metadata.title);
    })

    return (
        <div use:buttonModel={{ handleClick }} class={clsx(style.musicCard, flag() && style.active)}>
            <div class={style.background}>
                <img src={joinMimeAndArrayBuffer(props.data.thumbnail)} alt="" />
            </div>
            <div class={style.content}>
                <div class={style.subTitle}>
                    <p>{props.data.metadata.composer}</p>
                    <solid.For each={levelNames}>
                        {level => {
                            const avaliable = Boolean(props.data.chart[level]);
                            if (!avaliable) return;
                            const chart = props.data.chart[level] as gameChart
                            return (
                                <span class={style[level]}>
                                    {chart.metadata.level}
                                </span>
                            )
                        }}
                    </solid.For>
                </div>
                <div class={style.mainTitle}>
                    <h2>{props.data.metadata.title}</h2>
                </div>
            </div>
        </div>
    )
}

export default MusicCard;