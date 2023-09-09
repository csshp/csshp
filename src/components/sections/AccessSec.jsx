import React from "react";
import { Map } from "../GoogleMap";
import bg from "../../images/keyvisual/access.jpg";

export const AccessSec = () => {
    return (
        <>
            <section className="access" id="access">
                <div className="inner setV">
                    <h2>アクセス</h2>
                    <Map></Map>
                    <div className="adress">
                        <p>株式会社シーエスエス</p>
                        <p>〒060-0063　札幌市中央区南３条西１３丁目３２０－１３　アクアステージ４F</p>
                        <p>TEL：011-211-0740　FAX：011-211-0741</p>
                    </div>
                </div>
                <img src={bg} alt="" className="bg js-rellax" data-rellax-percentage="0.5" />
            </section>
            <div id="map"></div>
        </>
    );
};
