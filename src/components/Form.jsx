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
    const handleSubmit = () => {
        console.log(name);
    };

    //送信ボタンpreventDefault
    useEffect(() => {
        const submitBtn = document.querySelector('#sendBtn');
        submitBtn.addEventListener("click",(e)=>{
            e.preventDefault();
        })
        return () => {
            submitBtn.removeEventListener("click",(e)=>{
                e.preventDefault();
            })
        };
    }, []);

    return (
        <form>
            <label htmlFor="name">お名前（必須）</label>
            <input type="text" name="name" value={name} onChange={handleNameChange} placeholder="Name" />

            <label htmlFor="mailAddress">メールアドレス（必須）</label>
            <input type="mail" name="mailAddress" value={mailAddress} onChange={handleMailAddressChange} placeholder="Mail" />

            <label htmlFor="title">題名</label>
            <input type="text" name="title" value={title} onChange={handleTitleChange} placeholder="Title" />

            <label htmlFor="message">メッセージ本文</label>
            <textarea name="message" id="" cols="30" rows="10" value={message} onChange={handleMessageChange} placeholder="Message"></textarea>

            <button className="btn-A" onClick={handleSubmit} id="sendBtn">
                <span className="spn1">送信</span>
                {/* <span className="spn2">→</span> */}
            </button>
        </form>
    );
};
