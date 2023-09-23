import React, { useRef, useState, useEffect } from "react";
import { init, send } from "emailjs-com";

export const Form = (props) => {
    const formRef = useRef();
    const errorSpanRef = useRef();
    const sendBy = useRef();

    const googleFormUrl = process.env.REACT_APP_GOOGLE_FORM_URL;
    const entryName = process.env.REACT_APP_FORM_NAME;
    const entryMail = process.env.REACT_APP_FORM_MAIL;
    const entryTitle = process.env.REACT_APP_FORM_TITLE;
    const entryMessage = process.env.REACT_APP_FORM_MESSAGE;

    const [inputName, setinputName] = useState("");
    const [inputEmail, setinputEmail] = useState("");
    const [inputTitle, setinputTitle] = useState("");
    const [inputMessage, setinputMessage] = useState("");

    const handleChange = (e, setStateFunction) => {
        setStateFunction(e.target.value);
    };

    const validateForm = () => {
        if (inputName === "") {
            errorSpanRef.current.textContent = "エラー：名前が入力されていません";
            return false;
        }
        if (inputEmail === "") {
            errorSpanRef.current.textContent = "エラー：メールアドレスが入力されていません";
            return false;
        }
        if (inputMessage === "") {
            errorSpanRef.current.textContent = "エラー：メッセージ本文が入力されていません";
            return false;
        }
        props.toggleModal(true);
        errorSpanRef.current.textContent = "";
        return true;
    };

    const resetInputs = () => {
        setinputName("");
        setinputEmail("");
        setinputTitle("");
        setinputMessage("");
    };

    const callNetlifyFunctionGetEmailJsIDs = async () => {
        try {
            const endpoint = "/.netlify/functions/getEmailJsIDs";
            const response = await fetch(endpoint);

            if (response.ok) {
                // レスポンスからデータを取得
                const data = await response.json();
                return data;
            } else {
                console.error("エラー:", response.status);
            }
        } catch (error) {
            console.error("エラー:", error);
        }
    };

    callNetlifyFunctionGetEmailJsIDs().then((result)=>{
        console.log(result);
        console.log(result.emailJsIds.REACT_APP_EMAILJS_PUBLIC_ID);
        console.log(result.emailJsIds.REACT_APP_EMAILJS_SERVICE_ID);
        console.log(result.emailJsIds.REACT_APP_EMAILJS_TEMPLATE_ID);
    })

    const sendGoogleForm = (bool, form) => {
        if (bool) {
            form.submit();
            console.log("GoogleFormにお問い合わせが送信されました。 ");
        }
    };

    const sendMailByEmailjs = (bool) => {
        if (bool) {
            const emailJsIds = {
                publicID: process.env.REACT_APP_EMAILJS_PUBLIC_ID,
                serviceID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
                templateID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            };
            if (emailJsIds.publicID !== undefined && emailJsIds.serviceID !== undefined && emailJsIds.templateID !== undefined) {
                init(emailJsIds.publicID);
                const template_param = {
                    emj_name: inputName,
                    emj_email: inputEmail,
                    emj_title: inputTitle,
                    emj_message: inputMessage,
                };
                send(emailJsIds.serviceID, emailJsIds.templateID, template_param).then(() => {
                    console.log("EmailJSによりお問い合わせメールが送信されました。");
                    resetInputs();
                });
                props.toggleModal(true);
            } else {
                console.warn("EmailJSに必要な情報が読み込まれませんでした。envファイル（環境変数）を確認してください。");
                console.warn(emailJsIds);
            }
        }
    };

    let enableEmailJs = null;
    process.env.REACT_APP_ENABLE_EMAILJS == "true" ? (enableEmailJs = true) : (enableEmailJs = false);

    const handleSubmit = (e) => {
        e.preventDefault();
        enableEmailJs ? sendMailByEmailjs(validateForm()) : sendGoogleForm(validateForm(), e.target);
    };

    useEffect(() => {
        enableEmailJs ? (sendBy.current.textContent = "Send EmailJS") : (sendBy.current.textContent = "Send GoogleForm");
        return () => {};
    }, []);

    return (
        <>
            <form action={googleFormUrl} id="form" method="POST" target="hidden_iframe" ref={formRef} onSubmit={handleSubmit}>
                <label htmlFor={`entry.${entryName}`}>お名前（必須）</label>
                <input
                    type="text"
                    name={`entry.${entryName}`}
                    id={`entry.${entryName}`}
                    placeholder="Name"
                    onChange={(e) => handleChange(e, setinputName)}
                    value={inputName}
                />

                <label htmlFor={`entry.${entryMail}`}>メールアドレス（必須）</label>
                <input
                    type="email"
                    name={`entry.${entryMail}`}
                    id={`entry.${entryMail}`}
                    placeholder="Mail"
                    onChange={(e) => handleChange(e, setinputEmail)}
                    value={inputEmail}
                />

                <label htmlFor={`entry.${entryTitle}`}>題名</label>
                <input
                    type="text"
                    name={`entry.${entryTitle}`}
                    id={`entry.${entryTitle}`}
                    placeholder="Title"
                    onChange={(e) => handleChange(e, setinputTitle)}
                    value={inputTitle}
                />

                <label htmlFor={`entry.${entryMessage}`}>メッセージ本文</label>
                <textarea
                    name={`entry.${entryMessage}`}
                    id={`entry.${entryMessage}`}
                    cols="30"
                    rows="8"
                    placeholder="Message"
                    onChange={(e) => handleChange(e, setinputMessage)}
                    value={inputMessage}
                ></textarea>
                <span style={{ opacity: "0.5", fontSize: "0.3rem", textAlign: "end" }} ref={sendBy}>
                    xxxxx
                </span>
                <div className="btnArea">
                    <button className="btn-A" id="sendBtn">
                        <span className="spn1">送信</span>
                        {/* <span className="spn2">→</span> */}
                    </button>
                    <span className="errorMessage" ref={errorSpanRef}></span>
                </div>
            </form>
            <iframe name="hidden_iframe" style={{ display: "none" }} onLoad={resetInputs}></iframe>
        </>
    );
};
