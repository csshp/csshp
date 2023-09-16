import React, { useRef, useState } from "react";
import { init, emailjs } from "emailjs-com";

export const Form = (props) => {
    const formRef = useRef();
    const errorSpanRef = useRef();

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

    const formSubmit = (bool, form) => {
        if (bool) {
            form.submit();
        }
    };

    // https://qiita.com/Annoske/items/11bc6be57266d2c0dbe6
    // https://dashboard.emailjs.com/admin/templates/1itycnx
    const sendMail = () => {
        init("chocominticeeeee");
        const emailjsServiceId = "service_1fvknrn";
        const emailjsTemplateId = "service_1fvknrn";
        const templateParams = {
            from_name: emailName,
            message: emailText,
        };
        emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams).then(() => {
            // do something
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // formSubmit(validateForm(), e.target);
        try {
            const formData = {
                name: inputName,
                mail: inputEmail,
                title: inputTitle,
                message: inputMessage,
            };

            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                alert("メールが送信されました");
            } else {
                alert("メールの送信に失敗しました");
            }
        } catch (error) {
            console.error("エラー:", error);
        }
    };

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
