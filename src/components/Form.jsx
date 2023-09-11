import React, { useRef, useState } from "react";
export const Form = (props) => {
    const formRef = useRef();
    const errorSpanRef = useRef();
    const inputName = useRef();
    const inputEmail = useRef();
    const inputTitle = useRef();
    const inputMessage = useRef();
    const nameEle = useRef();

    const googleFormUrl = process.env.REACT_APP_GOOGLE_FORM_URL;
    const entryName = process.env.REACT_APP_FORM_NAME;
    const entryMail = process.env.REACT_APP_FORM_MAIL;
    const entryTitle = process.env.REACT_APP_FORM_TITLE;
    const entryMessage = process.env.REACT_APP_FORM_MESSAGE;

    const [inputNameS, setInputNameS] = useState("");
    const handleChangeName=(e)=>{
        setInputNameS(e.target.value)
    }
    const [inputEmailS, setInputEmailS] = useState("");
    const handleChangeEmail=(e)=>{
        setInputEmailS(e.target.value)
    }
    const [inputTitleS, setInputTitleS] = useState("");
    const handleChangeTitle=(e)=>{
        setInputTitleS(e.target.value)
    }
    const [inputMessageS, setInputMessageS] = useState("");
    const handleChangeMessage=(e)=>{
        setInputMessageS(e.target.value)
    }

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
                <label htmlFor={`entry.${entryName}`} ref={nameEle}>お名前（必須）</label>
                <input type="text" name={`entry.${entryName}`} id={`entry.${entryName}`} placeholder="Name" ref={inputName} onChange={handleChangeName} value={inputNameS}/>

                <label htmlFor={`entry.${entryMail}`}>メールアドレス（必須）</label>
                <input type="email" name={`entry.${entryMail}`} id={`entry.${entryMail}`} placeholder="Mail" ref={inputEmail} onChange={handleChangeEmail} value={inputEmailS}/>

                <label htmlFor={`entry.${entryTitle}`}>題名</label>
                <input type="text" name={`entry.${entryTitle}`} id={`entry.${entryTitle}`} placeholder="Title" ref={inputTitle} onChange={handleChangeTitle} value={inputTitleS}/>

                <label htmlFor={`entry.${entryMessage}`}>メッセージ本文</label>
                <textarea name={`entry.${entryMessage}`} id={`entry.${entryMessage}`} cols="30" rows="10" placeholder="Message" ref={inputMessage} onChange={handleChangeMessage} value={inputMessageS}></textarea>

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
