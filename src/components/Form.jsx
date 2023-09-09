import React, { useState, useEffect } from "react";

export const Form = (props) => {
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
        // setTimeout(() => {
        //     setName("");
        //     setMailAddress("");
        //     setTitle("");
        //     setMessage("");
        // }, 1000);
        openModal();
    };

    return (
        <>
            <form action={props.formKeys.url} id="form" method="POST" target="hidden_iframe" onSubmit={handleSubmit}>
                <label htmlFor={"entry." + props.formKeys.name}>お名前（必須）</label>
                <input type="text" name={"entry." + props.formKeys.name} value={name} onChange={handleNameChange} placeholder="Name" />

                <label htmlFor={"entry." + props.formKeys.mail}>メールアドレス（必須）</label>
                <input type="mail" name={"entry." + props.formKeys.mail} value={mailAddress} onChange={handleMailAddressChange} placeholder="Mail" />

                <label htmlFor={"entry." + props.formKeys.title}>題名</label>
                <input type="text" name={"entry." + props.formKeys.title} value={title} onChange={handleTitleChange} placeholder="Title" />

                <label htmlFor={"entry." + props.formKeys.message}>メッセージ本文</label>
                <textarea
                    name={"entry." + props.formKeys.message}
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
