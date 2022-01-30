import React from "react";
import SingleDoctor from "./Doctor/SingleDoctor";
import { withTranslation } from "react-i18next";
import "./About.css";

const BoD = ({ t }) => {
    return (
        <>
            <div dir={t("direction")} className="md:p-2 md:my-6 text-center">
                <h2
                    className="mt-12 mb-4 text-4xl font-medium"
                    style={{ color: "#3f0f1e" }}
                >
                    {" "}
                    {t("about.board")}
                </h2>
                <div className="flex justify-center items-center w-full">
                    <div className="h-1 w-16 bg-primary-brown"></div>
                </div>
            </div>

            <div
                dir={t("direction")}
                className="grid grid-cols-1 justify-center justify-items-center items-center gap-4 md:grid-cols-4 px-2 md:px-10"
                style={{ color: "#3f0f1e" }}
            >
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name={t("bod.1.name")}
                    position={t("bod.1.pos")}
                />
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name={t("bod.2.name")}
                    position={t("bod.2.pos")}
                />
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name={t("bod.3.name")}
                    position={t("bod.3.pos")}
                />
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name={t("bod.4.name")}
                    position={t("bod.4.pos")}
                />
            </div>
        </>
    );
};

export default withTranslation()(BoD);
