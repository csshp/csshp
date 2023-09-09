import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import SendedFormModal from "../components/SendedFormModal";

export const SupportP = () => {

    return (
        <>
            <Header page={"privacy"} scrolledClass={true}></Header>
            <div className="supportP contents">
                <div className="inner">
                    <h2>お問い合わせ</h2>
                    <Form></Form>
                </div>
            </div>
            <SendedFormModal></SendedFormModal>
            <Footer></Footer>
        </>
    );
};
