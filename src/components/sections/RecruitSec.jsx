import React from 'react';
import { Link } from "react-router-dom";
import bg from "../../images/keyvisual/recruit.png";

export const RecruitSec = () => {
    return (
        <section className="recruit" id="recruit">
        <div className="inner setV">
            <h2>採用情報</h2>
            <Link to="/recruit">
                <button className="btn-A">
                    <span className="spn1">採用情報を確認</span>
                    <span className="spn2">→</span>
                </button>
            </Link>
        </div>
        <img src={bg} alt="" className="bg js-rellax" data-rellax-percentage="0.5"/>
    </section>
    );
}
