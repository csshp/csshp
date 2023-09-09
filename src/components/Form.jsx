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

    useEffect(() => {
        document.querySelector("#form").addEventListener("submit", (e) => {
            console.log(e);
        });

        return () => {};
    }, []);

    const formKeys = {
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScFl-FUmuOgGlSjMy_nVtbJhQjRc20JMhSkYC9uoqho1q0v6A/formResponse",
        name: "595514514",
        mail: "1381327282",
        title: "1513220957",
        message: "1894209287",
    };

    return (
        <form action={formKeys.url} id="form" method="POST">
            <label htmlFor={formKeys.name}>
                <input type="text" name={"entry." + formKeys.name} value={name} onChange={handleNameChange} placeholder="Name" />
                お名前（必須）
            </label>

            <label htmlFor={formKeys.mail}>
                <input type="mail" name={"entry." + formKeys.mail} value={mailAddress} onChange={handleMailAddressChange} placeholder="Mail" />
                メールアドレス（必須）
            </label>

            <label htmlFor={formKeys.title}>
                <input type="text" name={"entry." + formKeys.title} value={title} onChange={handleTitleChange} placeholder="Title" />
                題名
            </label>

            <label htmlFor={formKeys.message}>
                {" "}
                <textarea
                    name={"entry." + formKeys.message}
                    id=""
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Message"
                ></textarea>
                メッセージ本文
            </label>

            <button className="btn-A" id="sendBtn">
                <span className="spn1">送信</span>
                {/* <span className="spn2">→</span> */}
            </button>
        </form>
    );
};
