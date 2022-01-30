import React from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
// linear-gradient(to right, #017439 0%, #3eac55 100%)

function Footer({ t }) {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div
            className="md:pt-8 pt-4"
            style={{ background: "#431423", color: "#fff" }}
        >
            <footer className="dark:bg-gray-300">
                <div className="container px-6 py-2 mx-auto bg-transparent">
                    <div className="lg:flex bg-transparent">
                        <div className="w-full -mx-7 lg:w-2/5 bg-transparent">
                            <div className="px-6 bg-transparent">
                                <div className="bg-transparent">
                                    <Link
                                        onClick={scrollToTop}
                                        to="/"
                                        className="text-xl font-bold bg-transparent hover:text-blue-400 dark:hover:text-gray-700"
                                    >
                                        <img
                                            className="h-24 w-44 md:h-28 md:w-48 bg-transparent"
                                            src="/OIH.logo.011.png"
                                            alt="brandlogofooter"
                                        />
                                        {/* Company Name */}
                                    </Link>
                                </div>

                                <div
                                    dir={t("direction")}
                                    className="max-w-md mt-2 font-semibold dark:text-gray-800 bg-transparent px-2 md:pr-28 cursor-default "
                                >
                                    {t("maintitle")}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:flex-1 lg:ml-4 bg-transparent">
                            <div className="grid grid-cols-1 md:gap-3 gap-2 sm:grid-cols-4 md:grid-cols-4 bg-transparent">
                                <div
                                    dir={t("direction")}
                                    className="bg-transparent font-semibold"
                                >
                                    <h3 className=" font-semibold text-lg uppercase dark: bg-transparent cursor-default">
                                        {t("quicklinks")}
                                    </h3>
                                    <Link
                                        onClick={scrollToTop}
                                        to="/"
                                        className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-700 delay-100"
                                    >
                                        {t("nav.nav_home")}
                                    </Link>
                                    <Link
                                        onClick={scrollToTop}
                                        to="/about"
                                        className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {t("nav.nav_about")}
                                    </Link>
                                    <Link
                                        onClick={scrollToTop}
                                        to="/departments"
                                        className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {t("nav.nav_dept")}
                                    </Link>
                                    <Link
                                        onClick={scrollToTop}
                                        to="/clinics"
                                        className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {t("nav.nav_clinic")}
                                    </Link>
                                    <Link
                                        onClick={scrollToTop}
                                        to="/insurance"
                                        className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {t("nav.nav_insurance")}
                                    </Link>
                                    <Link
                                        onClick={scrollToTop}
                                        to="/media"
                                        className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {t("nav.nav_media")}
                                    </Link>
                                    {/* <Link
                                        onClick={scrollToTop}
                                        to="/blog"
                                        className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-300"
                                    >
                                        Blog
                                    </Link> */}
                                    <Link
                                        onClick={scrollToTop}
                                        to="/contact"
                                        className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {t("nav.nav_contact")}
                                    </Link>
                                </div>

                                <div
                                    dir={t("direction")}
                                    className="bg-transparent font-semibold"
                                >
                                    <h3 className=" font-semibold uppercase text-lg dark: bg-transparent cursor-default">
                                        {t("getsup")}
                                    </h3>
                                    <div className="block mt-2 text-sm  dark: bg-transparent">
                                        <div className="inline-flex md:pr-4 mb-2 hover:text-blue-400 transition-colors duration-700 delay-100">
                                            <svg
                                                className="w-4 h-4 rounded-md bg-transparent"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>{" "}
                                            <div className="pl-1 bg-transparent">
                                                <a
                                                
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    href="tel: 011-431-11111"
                                                    className="bg-transparent"
                                                >
                                                    011-431-1111
                                                </a>{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-700 delay-100">
                                        <div className="inline-flex bg-transparent">
                                            <svg
                                                className="w-5 h-5 bg-transparent"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                            <div className="pl-1 bg-transparent">
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    href="mailto:info@alosrah-hospital.com"
                                                    className="bg-transparent"
                                                >
                                                    info@alosrah-hospital.com
                                                </a>{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-700 delay-100">
                                        <div className="inline-flex bg-transparent">
                                            <svg
                                                className="w-5 h-5 bg-transparent"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <div className="pl-1 bg-transparent">
                                                <a
                                                    target="_blank"
                                                    className="bg-transparent"
                                                    rel="noreferrer"
                                                    href="https://www.google.com/maps?ll=24.584713,46.592886&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=8710480857477383593"
                                                >
                                                    {t("addressfull")}
                                                </a>{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* -------------------- */}
                                <div
                                    dir={t("direction")}
                                    className="font-semibold"
                                >
                                    <h3 className="pb-2 font-semibold text-lg uppercase dark: bg-transparent cursor-default">
                                        {t("workinghrs")}
                                    </h3>
                                    <div className="py-1 text-sm text-blue-300 uppercase">
                                        {t("outpat")}
                                    </div>
                                    <div className="text-sm">
                                        {t("morn")} : 9:00 a.m &#x202b; to
                                        &#x202c; 12:00 p.m
                                    </div>
                                    <div className="text-sm">
                                        {t("even")}: 4:00 p.m &#x202b; to
                                        &#x202c; 9:30 p.m
                                    </div>

                                    <div className="py-1 text-sm text-blue-300 uppercase">
                                        {t("text-footer")}:
                                    </div>
                                    <div>{t("hrs")}</div>

                                    <div className="py-1 text-sm text-blue-300 uppercase">
                                        {t("inpatfooter")}:
                                    </div>
                                    <div className="text-sm">
                                        {t("stt")} : 7:00 a.m &#x202b; to
                                        &#x202c; 12:00 a.m
                                    </div>
                                    <div className="text-sm">
                                        {t("fr")} : 2:00 p.m &#x202b; to
                                        &#x202c; 12:00 a.m
                                    </div>
                                </div>
                                {/* ------------------------- */}
                                <div
                                    dir={t("direction")}
                                    className="bg-transparent"
                                >
                                    <h3 className=" font-semibold text-lg uppercase dark: bg-transparent cursor-default">
                                        {t("findus")}
                                    </h3>
                                    <div className="flex mt-4 -mx-2 bg-transparent">
                                        <a
                                            href="https://twitter.com/alosrahhospital"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mx-2 bg-transparent cursor-pointer text-gray-200 dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-400"
                                            aria-label="twitter"
                                        >
                                            <img
                                                className="w-10 h-10 bg-transparent"
                                                src="/assets/logo/tt.png"
                                                alt="twitter"
                                            />
                                        </a>

                                        <a
                                            href="https://www.instagram.com/alosrah.hospital/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mx-2 bg-transparent cursor-pointer text-gray-200 dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-400"
                                            aria-label="Facebook"
                                        >
                                            <img
                                                className="w-10 h-10 bg-transparent"
                                                src="/assets/logo/ig.png"
                                                alt="instagram"
                                            />
                                        </a>
                                        <a
                                            href="https://www.facebook.com/alosrah.hospital"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mx-2 cursor-pointer text-gray-200 dark:text-gray-200 bg-transparent hover:text-gray-200 dark:hover:text-gray-400"
                                            aria-label="Facebook"
                                        >
                                            <img
                                                className="w-10 h-10 bg-transparent"
                                                src="/assets/logo/fb.png"
                                                alt="facebook"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="h-px my-6 bg-green-500 border-none dark:bg-gray-900 " />

                    <div className="bg-transparent font-semibold cursor-default">
                        <div className="md:flex-row flex flex-col text-center  dark:text-white justify-center bg-transparent">
                            <p
                                dir={t("direction")}
                                className="md:border-r-2 px-2 bg-transparent"
                            >
                              
                                {t("allrihtres")}
                            </p>{" "}
                            <p className="px-2 bg-transparent">
                                {" "}
                                {t("devby")}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default withTranslation()(Footer);
