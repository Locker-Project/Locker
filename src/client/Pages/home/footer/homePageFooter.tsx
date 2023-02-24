import { useTransContext } from "@mbarzda/solid-i18next";
import { BsAspectRatio, BsBook, BsGear, BsInfoCircle, BsMusicNoteList } from "solid-icons/bs";
import * as solid from "solid-js";
import { setHideUi } from "../homeState";
import FooterContent from "./footerContent";

import style from "./homePageFooter.module.scss";


const HomePageFooter: solid.Component = () => {

    const [t, intl] = useTransContext();

    const footerMenu = [
        { element: <FooterContent icon={<BsGear />} label={t("menu.settings").toString()} onClick={() => { }} /> },
        { element: <FooterContent icon={<BsInfoCircle />} label={t("menu.about").toString()} onClick={() => { }} /> },
        { element: <FooterContent icon={<BsBook />} label={t("menu.story").toString()} onClick={() => { }} /> },
        { element: <FooterContent icon={<BsMusicNoteList />} label={t("menu.music").toString()} onClick={() => { }} /> },
        { element: <FooterContent icon={<BsAspectRatio />} label={t("menu.viewbg").toString()} onClick={(e) => { e.stopPropagation(); setHideUi(true) }} /> }
    ]

    function handleClick() {

    }

    return (
        <div class={style.footerWrapper} onClick={handleClick}>
            <footer class={style.footer}>
                <solid.For each={footerMenu}>
                    {
                        menu => menu.element
                    }
                </solid.For>
            </footer>
        </div>
    )
}

export default HomePageFooter;