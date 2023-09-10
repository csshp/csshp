import React, { useEffect } from "react";
import Rellax from "rellax";

import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { KeyVisual } from "../components/keyVisual/KeyVisual";

import { HomeSec } from "../components/sections/HomeSec";
import { GreetingSec } from "../components/sections/GreetingSec";
import { CompanyProfileSec } from "../components/sections/CompanyProfileSec";
import { ServicesSec } from "../components/sections/ServicesSec";
import { RecruitSec } from "../components/sections/RecruitSec";
import { SupportSec } from "../components/sections/SupportSec";
import { AccessSec } from "../components/sections/AccessSec";
import { MoveTopBtn } from "../components/moveTopBtn/MoveTopBtn";

export const HomeP = () => {

    useEffect(() => {
        var rellax = new Rellax(".js-rellax", {
            speed: -2,
        });

        // IntersectionObserverの作成
        const observer = new IntersectionObserver(
            function (entries) {
                for (let i = 0; i < entries.length; i++) {
                    // 領域内なら処理を実行
                    if (entries[i].intersectionRatio <= 0) continue;
                    showElm(entries[i].target);
                }
            },
            {
                // オプション
                rootMargin: "-10% 0% -30% 0%",
            }
        );
        const targetClasses = ["setV", "setHright", "setHleft"];

        const targetElements = [];

        // 各クラスをループして該当する要素を探します。
        targetClasses.forEach((className) => {
            const elementsWithClass = document.querySelectorAll("." + className);
            if (elementsWithClass.length > 0) {
                targetElements.push(...elementsWithClass);
            }
        });
        // 監視対象の追加
        const elements = targetElements;
        for (let i = 0; i < elements.length; i++) {
            observer.observe(elements[i]);
        }
        // 領域内に入ったとき実行する処理
        function showElm(e) {
            e.classList.add("set-isShow");
            observer.unobserve(e);
        }

        return () => {
            rellax.destroy();
        };
    }, []);

    return (
        <>
            <Header page={"home"}></Header>
            <KeyVisual></KeyVisual>
            <HomeSec></HomeSec>
            <GreetingSec></GreetingSec>
            <CompanyProfileSec></CompanyProfileSec>
            <ServicesSec></ServicesSec>
            <RecruitSec></RecruitSec>
            <SupportSec></SupportSec>
            <AccessSec></AccessSec>
            <MoveTopBtn></MoveTopBtn>
            <Footer></Footer>
        </>
    );
};
