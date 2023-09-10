import React, { useRef } from "react";
export const Form = (props) => {
    const formRef = useRef();
    const errorSpanRef = useRef();
    const inputName = useRef();
    const inputEmail = useRef();
    const inputTitle = useRef();
    const inputMessage = useRef();

    const googleFormUrl = process.env.REACT_APP_GOOGLE_FORM_URL;
    const entryName = process.env.REACT_APP_FORM_NAME;
    const entryMail = process.env.REACT_APP_FORM_MAIL;
    const entryTitle = process.env.REACT_APP_FORM_TITLE;
    const entryMessage = process.env.REACT_APP_FORM_MESSAGE;


    const validateForm = () => {
        if (inputName.current.value === "") {
            errorSpanRef.current.textContent = "エラー：名前が入力されていません";
            return false;
        }
        if (inputEmail.current.value === "") {
            errorSpanRef.current.textContent = "エラー：メールアドレスが入力されていません";
            return false;
        }
        if (inputMessage.current.value === "") {
            errorSpanRef.current.textContent = "エラー：メッセージ本文が入力されていません";
            return false;
        }
        props.toggleModal(true);
        errorSpanRef.current.textContent = "";
        return true;
    };

    const resetInputs=()=>{
        inputName.current.value ="";
        inputEmail.current.value ="";
        inputTitle.current.value ="";
        inputMessage.current.value ="";
    }

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
                <label htmlFor={`entry.${entryName}`}>お名前（必須）</label>
                <input type="text" name={`entry.${entryName}`} placeholder="Name" ref={inputName} />

                <label htmlFor={`entry.${entryMail}`}>メールアドレス（必須）</label>
                <input type="email" name={`entry.${entryMail}`} placeholder="Mail" ref={inputEmail} />

                <label htmlFor={`entry.${entryTitle}`}>題名</label>
                <input type="text" name={`entry.${entryTitle}`} placeholder="Title" ref={inputTitle} />

                <label htmlFor={`entry.${entryMessage}`}>メッセージ本文</label>
                <textarea name={`entry.${entryMessage}`} cols="30" rows="10" placeholder="Message" ref={inputMessage}></textarea>

                <div className="btnArea">
                    <button className="btn-A" id="sendBtn">
                        <span className="spn1">送信</span>
                        {/* <span className="spn2">→</span> */}
                    </button>
                    <span className="errorMessage" ref={errorSpanRef}></span>
                </div>
            </form>
            <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
        </>
    );
};
