import React, { useEffect, useRef } from "react";

const SuccessModal = (props) => {
    const modal = useRef(null);
    const content = useRef(null);
    const modalTransitionTime = 0.2;
    const handleClose = () => {
        modal.current.classList.remove("isShow");
        setTimeout(() => {
            props.changeModalState(false);
        }, modalTransitionTime * 1000);
    };
    useEffect(() => {
        setTimeout(() => {
            modal.current.classList.add("isShow");
        }, modalTransitionTime * 1000);
        return () => {};
    }, []);
    return (
        <div className="modal" ref={modal}>
            <div className="content" ref={content}>
                <div className="inner">
                    <p>お問い合わせの送信が完了しました。</p>
                    <button className="btn-A" onClick={handleClose}>
                        閉じる
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
