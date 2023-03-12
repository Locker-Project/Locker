import * as solid from "solid-js";
import { useTransContext } from "@mbarzda/solid-i18next";

import TranslateText from "Components/TranslateText/translateText";
import SelectBox from "Components/Selectbox/selectbox";

import SettingsTemplate from "Pages/settings/settingsTemplate/settingsTemplate";

import { settingsData } from "Types/Settings/settings";

import version from "Assets/StaticInfo/version.json";

import style from "./general.module.scss";



const GeneralSettings: solid.Component = () => {
    const [t, intl] = useTransContext();

    const languages = [
        { label: "言語 : JA - 日本語", value: "ja" },
        { label: "Language : EN(US) - English(United States)", value: "en_us" },
    ]

    const generalContents: Array<settingsData> = [
        {
            label: <TranslateText key="settings.general.language.name" />,
            input: <SelectBox contents={languages} value={languages.find(l => l.value == intl.getI18next().language) || languages[0]} onInput={value => intl.changeLanguage(value.value)} />,
            details: {
                description: <TranslateText key="settings.general.language.description" />,
            }
        },
        {
            label: <TranslateText key="settings.general.terms.name" />,
            input: <></>,
            details: {
                description: <TranslateText key="terms.content" start={`Ver.${version.termsVersion}`} />,
            }
        },
        {
            label: <TranslateText key="settings.general.information.name" />,
            input: <></>,
            details: {
                description: <TranslateText key="settings.general.information.description" options={{ version: version.version, year: new Date().getFullYear() }} />,
            }
        },
    ]

    return (
        <SettingsTemplate
            title={t("settings.general.title")}
            content={generalContents}
        />
    )
}

export default GeneralSettings;