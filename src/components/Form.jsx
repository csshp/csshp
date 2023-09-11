import React, { useRef, useState } from "react";
export const Form = (props) => {
    const formRef = useRef();
    const errorSpanRef = useRef();

    const googleFormUrl = process.env.REACT_APP_GOOGLE_FORM_URL;
    const entryName = process.env.REACT_APP_FORM_NAME;
    const entryMail = process.env.REACT_APP_FORM_MAIL;
    const entryTitle = process.env.REACT_APP_FORM_TITLE;
    const entryMessage = process.env.REACT_APP_FORM_MESSAGE;

    const [inputNameS, setInputNameS] = useState("");
    const handleChangeName = (e) => {
        setInputNameS(e.target.value);
    };
    const [inputEmailS, setInputEmailS] = useState("");
    const handleChangeEmail = (e) => {
        setInputEmailS(e.target.value);
    };
    const [inputTitleS, setInputTitleS] = useState("");
    const handleChangeTitle = (e) => {
        setInputTitleS(e.target.value);
    };
    const [inputMessageS, setInputMessageS] = useState("");
    const handleChangeMessage = (e) => {
        setInputMessageS(e.target.value);
    };

    const validateForm = () => {
        if (inputNameS === "") {
            errorSpanRef.current.textContent = "エラー：名前が入力されていません";
            return false;
        }
        if (inputEmailS === "") {
            errorSpanRef.current.textContent = "エラー：メールアドレスが入力されていません";
            return false;
        }
        if (inputMessageS === "") {
            errorSpanRef.current.textContent = "エラー：メッセージ本文が入力されていません";
            return false;
        }
        props.toggleModal(true);
        errorSpanRef.current.textContent = "";
        return true;
    };

    const resetInputs = () => {
        setInputNameS("");
        setInputEmailS("");
        setInputTitleS("");
        setInputMessageS("");
    };

    const formSubmit = (bool, form) => {
        if (bool) {
            form.submit();
            resetInputs();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        formSubmit(validateForm(), e.target);
    };

    return (
        <>
            <form action={googleFormUrl} id="form" method="POST" target="hidden_iframe" ref={formRef} onSubmit={handleSubmit}>
                <label htmlFor={`entry.${entryName}`}>
                    お名前（必須）
                </label>
                <input
                    type="text"
                    name={`entry.${entryName}`}
                    id={`entry.${entryName}`}
                    placeholder="Name"
                    onChange={handleChangeName}
                    value={inputNameS}
                />

                <label htmlFor={`entry.${entryMail}`}>メールアドレス（必須）</label>
                <input
                    type="email"
                    name={`entry.${entryMail}`}
                    id={`entry.${entryMail}`}
                    placeholder="Mail"
                    onChange={handleChangeEmail}
                    value={inputEmailS}
                />

                <label htmlFor={`entry.${entryTitle}`}>題名</label>
                <input
                    type="text"
                    name={`entry.${entryTitle}`}
                    id={`entry.${entryTitle}`}
                    placeholder="Title"
                    onChange={handleChangeTitle}
                    value={inputTitleS}
                />

                <label htmlFor={`entry.${entryMessage}`}>メッセージ本文</label>
                <textarea
                    name={`entry.${entryMessage}`}
                    id={`entry.${entryMessage}`}
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    onChange={handleChangeMessage}
                    value={inputMessageS}
                ></textarea>

                <div className="btnArea">
                    <button className="btn-A" id="sendBtn">
                        <span className="spn1">送信</span>
                        {/* <span className="spn2">→</span> */}
                    </button>
                    <span className="errorMessage" ref={errorSpanRef}></span>
                </div>
            </form>
            <iframe name="hidden_iframe" style={{ display: "block" }}></iframe>
        </>
    );
};
