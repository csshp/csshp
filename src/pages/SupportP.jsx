import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";

export const SupportP = () => {
    
    // const nodemailer = require("nodemailer");
    // // SMTPサーバーの設定
    // const transporter = nodemailer.createTransport({
    //     service: "Gmail",
    //     auth: {
    //         user: "avaparasa58@gmail.com",
    //         pass: "senichi7410",
    //     },
    // });

    return (
        <>
            <Header page={"privacy"} scrolledClass={true}></Header>
            <div className="supportP contents">
                <div className="inner">
                    <h2>お問い合わせ</h2>
                    <Form></Form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};
