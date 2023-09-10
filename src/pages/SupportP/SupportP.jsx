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

    return (
        <>
            <Header page={"privacy"} scrolledClass={true}></Header>
            <div className="supportP contents">
                <div className="inner">
                    <h2>お問い合わせ</h2>
                    <Form toggleModal={toggleModal}></Form>
                </div>
            </div>
            {isModalOpen && <SuccessModal toggleModal={toggleModal}></SuccessModal>}
            <Footer></Footer>
        </>
    );
};
