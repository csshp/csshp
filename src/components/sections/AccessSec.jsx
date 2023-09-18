import React from "react";
import { Map } from "../GoogleMap";
import bg from "../../images/keyvisual/access2.jpg";

export const AccessSec = () => {
    return (
        <>
            <section className="access" id="access">
                <div className="inner setV">
                    <h2>アクセス</h2>
                    <Map></Map>
                    <div className="adress">
                        <p>株式会社シーエスエス</p>
                        <p>〒060-0063　<span className="nowrap">札幌市中央区南３条西１３丁目３２０－１３　</span><span className="nowrap">アクアステージ４F</span></p>
                        <p>TEL：011-211-0740　<span className="nowrap">FAX：011-211-0741</span></p>
                    </div>
                </div>
                <img src={bg} alt="" className="bg js-rellax" data-rellax-percentage="0.5" />
            </section>
            <div id="map"></div>
        </>
    );
};
