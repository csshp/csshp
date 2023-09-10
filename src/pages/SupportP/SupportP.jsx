import React, { useState } from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Form } from "../../components/Form";
import SuccessModal from "../../components/modal/SuccessModal";

export const SupportP = () => {
    const [isModalOpen, SetModal] = useState(false);
    const toggleModal=(bool)=>{
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
                    <Form formKeys={formKeys} toggleModal={toggleModal}></Form>
                </div>
            </div>
            {isModalOpen && <SuccessModal toggleModal={toggleModal}></SuccessModal>}
            <Footer></Footer>
        </>
    );
};
