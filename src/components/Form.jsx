import React, { useState, useEffect, useRef } from "react";
import MailChecker from "mailchecker";
export const Form = (props) => {
    const [name, setName] = useState("");
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const [mailAddress, setMailAddress] = useState("");
    const handleMailAddressChange = (e) => {
        setMailAddress(e.target.value);
    };
    const [title, setTitle] = useState("");
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const [message, setMessage] = useState("");
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const formRef = useRef(null);
    useEffect(() => {
        const form = formRef.current;
        if (form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
            });
        } else {
            console.warn("フォームが参照できませんでした");
        }
        return () => {
            if (form) {
                form.removeEventListener("submit", (e) => {
                    e.preventDefault();
                });
            }
        };
    }, []);

    const validateForm = () => {
        if (name === "") {
            alert("名前を入力してください。");
            return false;
        }
        if (!MailChecker.isValid(mailAddress)) {
            console.log(mailAddress);
            alert("有効なメールアドレスを入力してください。");
            return false;
        }

        props.changeModalState(true);
        return true;
    };

    const formSubmit = (bool, form) => {
        if (bool) {
            form.submit();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        formSubmit(validateForm(), e.target);
    };

    return (
        <>
            <form action={props.formKeys.url} id="form" method="POST" target="hidden_iframe" ref={formRef} onSubmit={handleSubmit}>
                <label htmlFor={"entry." + props.formKeys.name}>お名前（必須）</label>
                <input
                    type="text"
                    name={"entry." + props.formKeys.name}
                    id={"entry." + props.formKeys.name}
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Name"
                />

                <label htmlFor={"entry." + props.formKeys.mail}>メールアドレス（必須）</label>
                <input
                    type="mail"
                    name={"entry." + props.formKeys.mail}
                    id={"entry." + props.formKeys.mail}
                    value={mailAddress}
                    onChange={handleMailAddressChange}
                    placeholder="Mail"
                />

                <label htmlFor={"entry." + props.formKeys.title}>題名</label>
                <input
                    type="text"
                    name={"entry." + props.formKeys.title}
                    id={"entry." + props.formKeys.title}
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Title"
                />

                <label htmlFor={"entry." + props.formKeys.message}>メッセージ本文</label>
                <textarea
                    name={"entry." + props.formKeys.message}
                    id={"entry." + props.formKeys.message}
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
