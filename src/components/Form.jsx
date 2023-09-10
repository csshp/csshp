import React, { useRef } from "react";
export const Form = (props) => {
    const formRef = useRef();
    const errorSpanRef = useRef();
    const inputName = useRef();
    const inputEmail = useRef();
    const inputTitle = useRef();
    const inputMessage = useRef();

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
            <form action={props.formKeys.url} id="form" method="POST" target="hidden_iframe" ref={formRef} onSubmit={handleSubmit}>
                <label htmlFor={"entry." + props.formKeys.name}>お名前（必須）</label>
                <input type="text" name={"entry." + props.formKeys.name} placeholder="Name" ref={inputName} />

                <label htmlFor={"entry." + props.formKeys.mail}>メールアドレス（必須）</label>
                <input type="email" name={"entry." + props.formKeys.mail} placeholder="Mail" ref={inputEmail} />

                <label htmlFor={"entry." + props.formKeys.title}>題名</label>
                <input type="text" name={"entry." + props.formKeys.title} placeholder="Title" ref={inputTitle} />

                <label htmlFor={"entry." + props.formKeys.message}>メッセージ本文</label>
                <textarea name={"entry." + props.formKeys.message} cols="30" rows="10" placeholder="Message" ref={inputMessage}></textarea>

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
