import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import SuccessModal from "../components/SuccessModal";

export const SupportP = () => {
    const [modal, SetModal] = useState(false);
    const changeModalState =(bool)=>{
        SetModal(bool);
    }

    const formKeys = {
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScFl-FUmuOgGlSjMy_nVtbJhQjRc20JMhSkYC9uoqho1q0v6A/formResponse",
        name: "595514514",
        mail: "1381327282",
        title: "1513220957",
        message: "1894209287",
    };

    return (
        <>
            <Header page={"privacy"} scrolledClass={true}></Header>
            <div className="supportP contents">
                <div className="inner">
                    <h2>お問い合わせ</h2>
                    <Form formKeys={formKeys} changeModalState={changeModalState}></Form>
                </div>
            </div>
            {modal && <SuccessModal changeModalState={changeModalState}></SuccessModal>}
            <Footer></Footer>
        </>
    );
};
