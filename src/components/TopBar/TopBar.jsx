import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";

const TopBar = ({ t }) => {
    const { i18n } = useTranslation();
    const [load, setload] = useState(false);
    const [langu, setLangu] = useState("ar");
    const [langug, setLangug] = useState("العربية");
    const options = [
        { value: "en", label: "English" },
        { value: "ar", label: "العربية" },
    ];

    useEffect(() => {
        let lang = localStorage.getItem("language");
        if (lang == "en") {
            setload(true);
        } else {
            setload(false);
        }
    }, []);
    const changeLanguage = (e) => {
        localStorage.setItem("language", e.target.value);
        i18n.changeLanguage(e.target.value);
        window.location.reload();
    };

    return (
        <div
            dir={t("direction")}
            className="w-full h-7 flex justify-end items-center px-3 md:px-6 z-100 shadow-md"
        >
            <a
                className="p-1 md:py-1 md:px-6 mr-4 text-sm md:text-base text-white font-semibold uppercase"
                href="tel:0114311111"
                style={{ background: "#588325" }}
            >
                {t("top-emergency")}
            </a>
            <div className="relative flex px-8">
                <h1>{!load ? "العربية" : "English"}</h1>

                <form className="px-1 absolute top-0 right-12 opacity-0 cursor-pointer">
                    <select
                        onChange={changeLanguage}
                        style={{ width: "20px" }}
                        className="w-full h-full text-center outline-none cursor-pointer"
                    >
                        <option className="" value=""></option>
                        <option className="" value="ar">
                            العربية{" "}
                        </option>
                        <option className="" value="en">
                            English
                        </option>
                    </select>
                </form>
            </div>
        </div>
    );
};

export default withTranslation()(TopBar);
