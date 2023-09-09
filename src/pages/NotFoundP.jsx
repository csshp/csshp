import React from "react";
import { Link } from "react-router-dom";

export const NotFoundP = () => {
    return (
        <>
            <p>ページが存在しないURLです</p>
            <Link to="/home">ホームに戻る</Link>
        </>
    );
};
