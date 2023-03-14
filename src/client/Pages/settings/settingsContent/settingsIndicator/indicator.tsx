import * as solid from "solid-js";
import { BsChevronRight } from "solid-icons/bs";

import style from "./indicator.module.scss";

const SettingsIndicator: solid.Component = () => {
    return (
        <div class={style.indicator}>
            設定する
            <BsChevronRight />
        </div>
    )
}

export default SettingsIndicator