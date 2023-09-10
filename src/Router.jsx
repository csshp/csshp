import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomeP } from "./pages/HomeP";
import { PrivacyP } from "./pages/PrivacyP/PrivacyP";
import { SupportP } from "./pages/SupportP/SupportP";
import { NotFoundP } from "./pages/NotFoundP/NotFoundP";
import { ScrollTop } from "./components/ScrollTop";

export const Router = () => {

    return (
        <>
            <ScrollTop></ScrollTop>
            <Routes>
                <Route path="/" element={<HomeP />} />
                <Route path="/privacy" element={<PrivacyP />} />
                <Route path="/support" element={<SupportP />} />
                <Route path="*" element={<NotFoundP />} />
            </Routes>
        </>
    );
};
