import React from "react";
import bg from "../../images/keyvisual/services.jpg";
import bg1 from "../../images/greetings1.jpg";
import bg2 from "../../images/greetings2.jpg";

export const ServicesSec = () => {
    return (
        <section className="services" id="services">
            <div className="inner">
                <h2 className="setHleft">事業内容</h2>
                <div className="contents">
                    <div className="content setHleft">
                        <div className="texts">
                            <h3 className="bold">■カスタマーセンター事業</h3>
                            <p>
                                ・インバウンドカスタマーサポート
                                <br />
                                ・アウトバウンド業務　など
                            </p>
                        </div>
                        <div className="img">
                            <img src={bg1} alt=""/>
                        </div>
                    </div>
                    <div className="content setHright">
                        <div className="img">
                            <img src={bg2} alt="" />
                        </div>
                        <div className="texts">
                            <h3 className="bold">■カスタマーセンター事業</h3>
                            <p>
                                ・インバウンドカスタマーサポート
                                <br />
                                ・アウトバウンド業務　など
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={bg} alt="" className="bg js-rellax" data-rellax-percentage="0.5" />
        </section>
    );
};
