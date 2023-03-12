import * as solid from "solid-js";
import { useTransContext } from "@mbarzda/solid-i18next";

import { useButtonModel } from "Components/Functions/ActivateModel/activateModel";

import { settingsData } from "Types/Settings/settings";

import style from "./settingsTemplate.module.scss";


interface settingsTemplateProps {
    title: string,
    content: Array<settingsData>
}

const SettingsTemplate: solid.Component<settingsTemplateProps> = (props) => {

    const buttonModel = useButtonModel();
    const [currentDetails, setCurrentDetails] = solid.createSignal<settingsData>();

    function updateDetails(data: settingsData) {
        setCurrentDetails(data);
    }


    solid.onMount(() => {
        setCurrentDetails(props.content[0])
    })

    return (
        <div class={style.settingsWrapper}>
            <h1>{props.title}</h1>
            <div class={style.content}>
                <div class={style.list}>
                    <solid.For each={props.content}>
                        {
                            data => {
                                function update() {
                                    updateDetails(data)
                                }
                                return (
                                    <div class={style.listContent} tabindex={0} onPointerEnter={update} onFocusIn={update} use:buttonModel={{}}>
                                        <p>{data.label}</p>
                                        {data.input}
                                    </div>
                                )
                            }
                        }
                    </solid.For>
                </div>
                <div class={style.line}></div>
                <div class={style.details}>
                    <solid.Show when={currentDetails()}>
                        <h1>{currentDetails()?.label}</h1>
                        <div>
                            <solid.Show when={currentDetails()?.details.gpu}>
                                GPU : {currentDetails()?.details.gpu}
                            </solid.Show>
                            <solid.Show when={currentDetails()?.details.gpu}>
                                CPU : {currentDetails()?.details.cpu}
                            </solid.Show>
                        </div>
                        <div class={style.description}>
                            {currentDetails()?.details.description}
                        </div>
                    </solid.Show>
                </div>
            </div>
        </div>
    )
}

export default SettingsTemplate;