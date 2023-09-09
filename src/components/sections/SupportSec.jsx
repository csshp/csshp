import React from "react";
import { Link } from "react-router-dom";
import bg from "../../images/keyvisual/contact.png";

export const SupportSec = () => {
    return (
        <section className="support" id="support">
            <div className="inner setV">
                <h2>お問い合わせはこちら</h2>
                <Link to="/support">
                    <button className="btn-A">
                        <span className="spn1">入力フォーム</span>
                        <span className="spn2">→</span>
                    </button>
                </Link>
            </div>
            <img src={bg} alt="" className="bg js-rellax" data-rellax-percentage="0.5"/>
        </section>
    );
};
