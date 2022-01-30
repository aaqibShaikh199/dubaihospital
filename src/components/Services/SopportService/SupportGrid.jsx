import React from "react";
import { withTranslation } from "react-i18next";
import "./support.css";

const SupportGrid = ({ imgUrl, title, desc }) => {
    return (
        <div className="flex flex-col md:flex-row md:h-72 gap-2 md:gap-4 border-2 shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:border-green-400">
            <div className="img-div flex justify-center items-center">
                <img className="w-3/4 hex" src={imgUrl} alt="service" />
            </div>
            <div className="content-div pl-2 md:pl-5 pr-2 py-2 md:py-3">
                <h2
                    className="text-base md:text-2xl mb-2 md:mb-4 text-blue-600"
                    style={{ color: "#3c0c1c" }}
                >
                    {title}
                </h2>
                <p className="text-sm md:text-base">{desc}</p>
            </div>
        </div>
    );
};

export default withTranslation()(SupportGrid);
