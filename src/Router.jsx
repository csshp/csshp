import React from "react";
import { Route, Routes } from "react-router-dom";


import { HomeP } from "./pages/HomeP";
import { GreetingsP } from "./pages/GreetingsP";
import { CompanyProfileP } from "./pages/CompanyProfileP";
import { ServicesP } from "./pages/ServiceP";
import { RecruitP } from "./pages/RecruitP";
import { PrivacyP } from "./pages/PrivacyP";
import { SupportP } from "./pages/SupportP";
import { AccessP } from "./pages/AccessP";
import { NotFoundP } from "./pages/NotFoundP";
import { ScrollTop } from "./components/ScrollTop";

export const Router = () => {

    return (
        <>
            <ScrollTop></ScrollTop>
            <Routes>
                <Route path="/" element={<HomeP />} />
                <Route path="/greetings" element={<GreetingsP />} />
                <Route path="/companyProfile" element={<CompanyProfileP />} />
                <Route path="/services" element={<ServicesP />} />
                <Route path="/recruit" element={<RecruitP />} />
                <Route path="/privacy" element={<PrivacyP />} />
                <Route path="/support" element={<SupportP />} />
                <Route path="/access" element={<AccessP />} />
                <Route path="*" element={<NotFoundP />} />
            </Routes>
        </>
    );
};
