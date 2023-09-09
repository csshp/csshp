import React from "react";
import { PromptScroll } from "../components/PromptScroll";
import Swiperr from "./Swiperr";

export const KeyVisual = () => {
    return (
        <div className="KeyVisual" id="top">
            <div className="content">
                <h1>～Hospitality mind～</h1>
                <p>「顧客満足度を高める」気持ちの在り方</p>
                <p>それは</p>
                <p>「サービス」の更に上を追求すること</p>
            </div>
            <Swiperr></Swiperr>
            <PromptScroll></PromptScroll>
        </div>
    );
};
