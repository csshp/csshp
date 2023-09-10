import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import img from "../../images/404NotFound.png";

export const NotFoundP = () => {
    return (
        <>
            <Header page={"notFound"} scrolledClass={true}></Header>
            <div className="NotFound">
                <div className="inner">
                    <img src={img} alt="404NotFound" />
                    <p>指定されたページが見つかりません</p>
                    <Link to="/">
                        <button className="btn-A">
                            <span className="spn1">トップページ</span>
                            <span className="spn2">→</span>
                        </button>
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};
