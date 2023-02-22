import { Navigate, Route, Routes, useBeforeLeave, useLocation, useMatch, useNavigate } from "@solidjs/router";
import * as solid from "solid-js";

import { getEnvironment } from "Utils/getConfig/getConfig";

import SetupTerms from "./contents/terms/terms";
import SetupSettings from "./contents/settings/settings";

import style from "./setup.module.scss"

const Setup: solid.Component = () => {

    solid.onCleanup(() => {
        const environment = getEnvironment();
        environment.initializedSettings = true;
        localStorage.setItem("environment", JSON.stringify(environment));
    })

    return (
        <div class={style.setup}>
            <Routes>
                <Route path={"/"} element={<Navigate href={"terms"} />} />
                <Route path={"/terms"} element={<SetupTerms />} />
                <Route path={"/settings"} element={<SetupSettings />} />
            </Routes>
        </div>
    )
}

export default Setup;