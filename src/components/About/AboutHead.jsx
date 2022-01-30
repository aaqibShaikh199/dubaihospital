import React from "react";
import { withTranslation } from "react-i18next";
import "./About.css";

const AboutHead = ({ t }) => {
    return (
        <div
            dir={t("direction")}
            className="w-full relative"
            style={{ height: "40vh" }}
        >
            <img
                className="h-full w-full bg-cover bg-center"
                style={{ objectFit: "cover" }}
                src="/assets/about/about.png"
                alt="prod1"
            />
            <div className="w-full main-dark-bg-about bg-black opacity-30"></div>
            <div className="main-text-about bg-transparent text-grey-300">
                <h3 className="text-white font-semibold text-left text-4xl md:text-6xl mb-2">
                    {t("about.abus")}
                </h3>
                {/* <div className="absolute text-lg md:text-2xl text-white font-light mt-28 md:mt-20">
                    Home / About Us
                </div> */}
            </div>
        </div>
    );
};

export default withTranslation()(AboutHead);
