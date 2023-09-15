import React from "react";
import bg from "../../images/keyvisual/companyProfile.jpg";

export const CompanyProfileSec = () => {
    return (
        <section className="companyProfile" id="companyProfile">
            <div className="inner setV">
                <h2>会社概要</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>・会社名</td>
                            <td>株式会社シーエスエス</td>
                        </tr>
                        <tr>
                            <td>・代表者</td>
                            <td>松原　久美子</td>
                        </tr>
                        <tr>
                            <td>・所在地</td>
                            <td>
                                〒060-0063 <br />
                                <span className="nowrap">札幌市中央区南３条西１３丁目３２０－１３　</span><span className="nowrap">アクアステージ４階</span>
                            </td>
                        </tr>
                        <tr>
                            <td>・電話番号</td>
                            <td>011-211-0740</td>
                        </tr>
                        <tr>
                            <td>・E-mail</td>
                            <td>info@css-sp.jp</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <img src={bg} alt="" className="bg js-rellax" data-rellax-percentage="0.5"/>
        </section>
    );
};
