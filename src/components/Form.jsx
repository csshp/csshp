import React, { useState, useEffect } from "react";

export const Form = () => {
    const [name, setName] = useState("");
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const [mailAddress, setMailAddress] = useState("");
    const handleMailAddressChange = (event) => {
        setMailAddress(event.target.value);
    };
    const [title, setTitle] = useState("");
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const [message, setMessage] = useState("");
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const openModal = () => {
        const modal = document.querySelector(".modal");
        modal.classList.add("isShow");
    };

    const handleSubmit = () => {
        setName("");
        setMailAddress("");
        setTitle("");
        setMessage("");
        openModal();
    };

    const formKeys = {
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScFl-FUmuOgGlSjMy_nVtbJhQjRc20JMhSkYC9uoqho1q0v6A/formResponse",
        name: "595514514",
        mail: "1381327282",
        title: "1513220957",
        message: "1894209287",
    };

    return (
        <>
            <form action={formKeys.url} id="form" method="POST" target="hidden_iframe" onSubmit={handleSubmit}>
                <label htmlFor={"entry." + formKeys.name}>お名前（必須）</label>
                <input type="text" name={"entry." + formKeys.name} id={"entry." + formKeys.name} value={name} onChange={handleNameChange} placeholder="Name" />

                <label htmlFor={"entry." + formKeys.mail}>メールアドレス（必須）</label>
                <input type="mail" name={"entry." + formKeys.mail} id={"entry." + formKeys.mail} value={mailAddress} onChange={handleMailAddressChange} placeholder="Mail" />

                <label htmlFor={"entry." + formKeys.title}>題名</label>
                <input type="text" name={"entry." + formKeys.title} id={"entry." + formKeys.title} value={title} onChange={handleTitleChange} placeholder="Title" />

                <label htmlFor={"entry." + formKeys.message}>メッセージ本文</label>
                <textarea
                    name={"entry." + formKeys.message}
                    id={"entry." + formKeys.message}
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Message"
                ></textarea>

                <button className="btn-A" id="sendBtn">
                    <span className="spn1">送信</span>
                    {/* <span className="spn2">→</span> */}
                </button>
            </form>
            <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
        </>
    );
};
