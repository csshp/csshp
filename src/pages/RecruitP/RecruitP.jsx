import React from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

export const RecruitP = (props) => {
    return (
        <>
            <Header page={"recruit"} scrolledClass={true}></Header>
            <div className="pageContents recruitP">
                <div className="inner">
                <h2 className="pageTitle">採用情報</h2>
                    <div className="infoBlock">
                        {props.recruit ? (
                            <ul className="recruitInfo">
                                <li>
                                    <p className="title">職種</p>
                                    <div className="texts">
                                        <p>■カスタマーセンター事業：インバウンドカスタマーサポート、アウトバウンド業務など</p>
                                        <p>■データ監視事業：システム監視、不正監視など</p>
                                    </div>
                                </li>
                                <li>
                                    <p className="title">対象となる方・資格</p>
                                    <p className="texts">未経験者・異業種からの転職も大歓迎</p>
                                </li>
                                <li>
                                    <p className="title">勤務地</p>
                                    <p className="texts">〒060-0063 札幌市中央区南３条西１３丁目３２０－１３ アクアステージ４階</p>
                                </li>
                                <li>
                                    <p className="title">勤務期間</p>
                                    <p className="texts">最低勤務日数 …… 週5日 最低勤務時間 …… 1日8時間</p>
                                </li>
                                <li>
                                    <p className="title">シフト詳細</p>
                                    <p className="texts">★有給休暇の取得もしやすい環境です！</p>
                                </li>
                                <li>
                                    <p className="title">採用予定人数</p>
                                    <p className="texts">1~2名</p>
                                </li>
                                <li>
                                    <p className="title">交通費詳細</p>
                                    <p className="texts">
                                        全額支給 <br />
                                        ★地下鉄「西11丁目駅」より徒歩10分→駅チカで通勤ラクラクです◎★休憩室環境もバッチリ！
                                        →菓子、飲み物の販売・冷蔵庫・電子レンジが設置されています♪
                                    </p>
                                </li>
                                <li>
                                    <p className="title">待遇・福利厚生</p>
                                    <p className="texts">
                                        社保完備、有給休暇、昇給有、服装・髪色自由
                                        <br />
                                        ※試用期間(3ヵ月間・同条件 ※研修期間(3週間/同条件)
                                    </p>
                                </li>
                            </ul>
                        ) : (
                            <h3 className="noRecruiting">現在募集は行っておりません。</h3>
                        )}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};
