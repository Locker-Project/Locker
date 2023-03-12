import * as solid from "solid-js";
import { Routes, Route, Navigate } from "@solidjs/router";

import SplashScreen from "Pages/splash/splashScreen";
import Loader from "Pages/appLoader/loader";
import Title from "Pages/title/title";
import Setup from "Pages/setup/setup";
import Home from "Pages/home/home";
import MusicSelect from "Pages/musicSelect/musicSelect";
import Settings from "Pages/settings/settings";


const PageRouter: solid.Component = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Navigate href={"/splash"} />} />
            <Route path={"/splash"} element={<SplashScreen />} />
            <Route path={"/load"} element={<Loader />} />
            <Route path={"/title"} element={<Title />} />
            <Route path={"/setup/*"} element={<Setup />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/select"} element={<MusicSelect />} />
            <Route path={"/settings/*"} element={<Settings />} />
        </Routes>
    )
}

export default PageRouter;