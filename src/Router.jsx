import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomeP } from "./pages/HomeP";
import { PrivacyP } from "./pages/PrivacyP/PrivacyP";
import { SupportP } from "./pages/SupportP/SupportP";
import { NotFoundP } from "./pages/NotFoundP/NotFoundP";
import { ScrollTop } from "./components/ScrollTop";
import { RecruitP } from "./pages/RecruitP/RecruitP";

export const Router = () => {
    return (
        <>
            <ScrollTop></ScrollTop>
            <Routes>
                <Route path="/" element={<HomeP />} />
                <Route path="/recruit" element={<RecruitP/>} />
                <Route path="/privacy" element={<PrivacyP />} />
                <Route path="/support" element={<SupportP />} />
                <Route path="*" element={<NotFoundP />} />
                {/* <Route path={`${process.env.PUBLIC_URL}/`} element={<HomeP />} />
                <Route path={`${process.env.PUBLIC_URL}/privacy`} element={<PrivacyP />} />
                <Route path={`${process.env.PUBLIC_URL}/support`} element={<SupportP />} />
                <Route path={`${process.env.PUBLIC_URL}/*`} element={<NotFoundP />} /> */}
            </Routes>
        </>
    );
};
