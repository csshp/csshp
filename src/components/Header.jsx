import React, { useEffect } from "react";
import Logo from "../images/css-icon-title-w.png";
import { Cross, TextAlignJustified } from "akar-icons";
import { Link } from "react-router-dom";

export const Header = (props) => {
    const handleScroll = () => {
        const headerElem = document.querySelector("header");
        if (window.scrollY > 830 || props.scrolledClass == true) {
            headerElem.classList.add("scrolled");
        } else {
            headerElem.classList.remove("scrolled");
        }
    };
    useEffect(() => {
        if (props.scrolledClass == true) {
            const headerElem = document.querySelector("header");
            headerElem.classList.add("scrolled");
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll, { passive: true });
        };
    }, []);

    const hamburgerOpen = () => {
        document.querySelector(".hamburgerMenu").classList.add("isShow");
    };
    const hamburgerClose = () => {
        document.querySelector(".hamburgerMenu").classList.remove("isShow");
    };
    const moveTop = () => {
        window.scrollTo(0, 0);
    };

    if (props.page == "home") {
        return (
            <>
                <header>
                    <div className="inner">
                        <a href="#">
                            <img src={Logo} alt="Logo" />
                        </a>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#top">ホーム</a>
                                    <div className="underLine"></div>
                                </li>
                                <li>
                                    <a href="#greetings">代表挨拶</a>
                                    <div className="underLine"></div>
                                </li>
                                <li>
                                    <a href="#companyProfile">会社概要</a>
                                    <div className="underLine"></div>
                                </li>
                                <li>
                                    <a href="#services">事業内容</a>
                                    <div className="underLine"></div>
                                </li>
                                <li>
                                    <a href="#recruit">採用情報</a>
                                    <div className="underLine"></div>
                                </li>
                                <li>
                                    <a href="#support">お問い合わせ</a>
                                    <div className="underLine"></div>
                                </li>
                                <li>
                                    <a href="#access">アクセス</a>
                                    <div className="underLine"></div>
                                </li>
                                <li>
                                    <Link to="/privacy" onClick={moveTop}>
                                        プライバシーポリシー
                                    </Link>
                                    <div className="underLine"></div>
                                </li>
                            </ul>
                        </nav>
                        <div className="hamburger" onClick={hamburgerOpen}>
                            <TextAlignJustified strokeWidth={2} size={36} />
                        </div>
                    </div>
                </header>
                <div className="hamburgerMenu" onClick={hamburgerClose}>
                    <nav>
                        <ul>
                            <li>
                                <a href="#top" onClick={hamburgerClose}>
                                    ホーム
                                </a>
                                <div className="underLine"></div>
                            </li>
                            <li>
                                <a href="#greetings" onClick={hamburgerClose}>
                                    代表挨拶
                                </a>
                                <div className="underLine"></div>
                            </li>
                            <li>
                                <a href="#companyProfile" onClick={hamburgerClose}>
                                    会社概要
                                </a>
                                <div className="underLine"></div>
                            </li>
                            <li>
                                <a href="#services" onClick={hamburgerClose}>
                                    事業内容
                                </a>
                                <div className="underLine"></div>
                            </li>
                            <li>
                                <a href="#recruit" onClick={hamburgerClose}>
                                    採用情報
                                </a>
                                <div className="underLine"></div>
                            </li>
                            <li>
                                <a href="#support" onClick={hamburgerClose}>
                                    お問い合わせ
                                </a>
                                <div className="underLine"></div>
                            </li>
                            <li>
                                <a href="#access" onClick={hamburgerClose}>
                                    アクセス
                                </a>
                                <div className="underLine"></div>
                            </li>
                            <li>
                                <Link to="/privacy" onClick={moveTop}>
                                    プライバシーポリシー
                                </Link>
                                <div className="underLine"></div>
                            </li>
                        </ul>
                    </nav>
                    <button className="close" onClick={hamburgerClose}>
                        <Cross strokeWidth={1} size={25} />
                        <span> 閉じる</span>
                    </button>
                </div>
            </>
        );
    } else {
        return (
            <>
                <header>
                    <div className="inner">
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">ホーム</Link>
                                    <div className="underLine"></div>
                                </li>
                                <li>
                                    <Link to="/">代表挨拶</Link>
                                    <div className="underLine"></div>
                                </li>
                                <li>
                                    <Link to="/">会社概要</Link>
                                    <div className="underLine"></div>
                                </li>
                                <li>
                                    <Link to="/">事業内容</Link>
                                    <div className="underLine"></div>
                                </li>
                                <li>
                                    <Link to="/">採用情報</Link>
                                    <div className="underLine"></div>
                                </li>
                                <li>
                                    <Link to="/">お問い合わせ</Link>
                                    <div className="underLine"></div>
                                </li>
                                <li>
                                    <Link to="/">アクセス</Link>
                                    <div className="underLine"></div>
                                </li>
                                <li>
                                    <Link to="/privacy" onClick={moveTop}>
                                        プライバシーポリシー
                                    </Link>
                                    <div className="underLine"></div>
                                </li>
                            </ul>
                        </nav>
                        <div className="hamburger" onClick={hamburgerOpen}>
                            <TextAlignJustified strokeWidth={2} size={36} />
                        </div>
                    </div>
                </header>
                <div className="hamburgerMenu">
                    <nav>
                        <ul>
                            <li>
                                {/* <Link to="/">ホーム</Link> */}
                                <a href="#" onClick={hamburgerClose}>
                                    ホーム
                                </a>
                                <div className="underLine"></div>
                            </li>
                            <li>
                                {/* <Link to="/greetings">代表挨拶</Link> */}
                                <a href="#greetings" onClick={hamburgerClose}>
                                    代表挨拶
                                </a>
                                <div className="underLine"></div>
                            </li>
                            <li>
                                {/* <Link to="/companyprofile">会社概要</Link> */}
                                <a href="#companyProfile" onClick={hamburgerClose}>
                                    会社概要
                                </a>
                                <div className="underLine"></div>
                            </li>
                            <li>
                                {/* <Link to="/services">事業内容</Link> */}
                                <a href="#services" onClick={hamburgerClose}>
                                    事業内容
                                </a>
                                <div className="underLine"></div>
                            </li>
                            <li>
                                {/* <Link to="/recruit">採用情報</Link> */}
                                <a href="#recruit" onClick={hamburgerClose}>
                                    事業内容
                                </a>
                                <div className="underLine"></div>
                            </li>
                            <li>
                                {/* <Link to="/support">お問い合わせ</Link> */}
                                <a href="#support" onClick={hamburgerClose}>
                                    お問い合わせ
                                </a>
                                <div className="underLine"></div>
                            </li>
                            <li>
                                {/* <Link to="/access">アクセス</Link> */}
                                <a href="#access" onClick={hamburgerClose}>
                                    アクセス
                                </a>
                                <div className="underLine"></div>
                            </li>
                            <li>
                                <Link to="/privacy" onClick={hamburgerClose}>
                                    プライバシーポリシー
                                </Link>
                                <div className="underLine"></div>
                            </li>
                        </ul>
                    </nav>
                    <button className="close" onClick={hamburgerClose}>
                        <Cross strokeWidth={1} size={25} />
                        <span> 閉じる</span>
                    </button>
                </div>
            </>
        );
    }
};
