import clsx from "clsx";
import { useButtonModel } from "Components/Functions/ActivateModel/activateModel";
import * as solid from "solid-js";

import style from "./homePageFooter.module.scss";

interface footerContentProps extends solid.JSX.HTMLAttributes<HTMLButtonElement> {
    icon: solid.JSXElement
    label: string
}

const FooterContent: solid.Component<footerContentProps> = (props) => {

    const buttonModel = useButtonModel();

    return (
        <button {...props} class={clsx(style.footerIcon, props.class)} use:buttonModel={{}} >
            <div class="iconWrapper">
                {props.icon}
            </div>
            <span>{props.label}</span>
        </button>
    )
}

export default FooterContent;