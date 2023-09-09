import React from 'react';

const SendedFormModal = () => {
    const closeModal =()=>{
        const modal = document.querySelector(".modal");
        modal.classList.remove("isShow")
    }
    return (
        <div className='modal' onClick={closeModal}>
            <div className="content">
                <div className="inner">
                    <p>お問い合わせの送信が完了しました。</p>
                    <button className='btn-A' onClick={closeModal}>閉じる</button>
                </div>
            </div>
        </div>
    );
}

export default SendedFormModal;
