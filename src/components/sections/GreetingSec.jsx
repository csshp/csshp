import React from "react";
import bg from "../../images/keyvisual/greetings.jpg";

export const GreetingSec = () => {
    return (
        <section className="greetings" id="greetings">
            <div className="inner setV">
                <h2>「真心を持って」</h2>
                <p>
                    私共はクライアント様の意向に沿って、真摯に誠実に誠意を持って お客様との関係をサポートさせていただきます。
                    またクライアント様の一員となった気持ちでお客様に寄り添い、 お客様の気持ちを大切に心のこもった対応をいたします。
                </p>
                <p>クライアント様、お客様から日々学ばせていただき、 より良いものを提供していけるよう邁進していく所存です。</p>
                <p>これからも真心を持って顧客第一のサービスに努めてまいります。</p>
                <div>
                    株式会社シーエスエス 代表取締役 <br />
                    松原　久美子
                </div>
            </div>
            <img src={bg} alt="" className="bg js-rellax" data-rellax-percentage="0.3"/>
        </section>
    );
};
