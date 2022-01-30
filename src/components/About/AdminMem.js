import React from "react";
import SingleDoctor from "./Doctor/SingleDoctor";
import { withTranslation } from "react-i18next";
import "./About.css";

const AdminMem = ({ t }) => {
    return (
        <>
            <div dir={t("direction")} className="md:p-2 md:my-6 text-center">
                <h2
                    className="mt-12 mb-4 text-4xl font-medium"
                    style={{ color: "#3f0f1e" }}
                >
                    {" "}
                    {t("about.admin")}
                </h2>
                <div className="flex justify-center items-center w-full">
                    <div className="h-1 w-16 bg-primary-brown"></div>
                </div>
            </div>

            <div
            dir={t("direction")}
                className="grid grid-cols-1 justify-center justify-items-center justify-self-start items-center gap-4 md:grid-cols-3 px-2 md:px-10"
                style={{ color: "#3f0f1e" }}
            >
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name={t("adminmem.1.name")}
                    position={t("adminmem.1.pos")}
                />
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name={t("adminmem.2.name")}
                    position={t("adminmem.2.pos")}
                />
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name={t("adminmem.3.name")}
                    position={t("adminmem.3.pos")}
                />
                {/* <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name="Dr. Adulrahman Sweyfi "
                    position="Deputy Medical Director"
                /> */}
                {/* <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name="Mr. Alaa Awad"
                    position="Nursing Director"
                /> */}
                {/* <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name="Mr. Sameer Mohammed"
                    position="Internal controller"
                /> */}
            </div>
            <div
            dir={t("direction")}
                className="flex flex-col md:flex-row justify-center items-center gap-7 px-2 md:px-10"
                style={{ color: "#3f0f1e" }}
            >
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name={t("adminmem.4.name")}
                    position={t("adminmem.4.pos")}
                />
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name={t("adminmem.5.name")}
                    position={t("adminmem.5.pos")}
                />
            </div>
        </>
    );
};

export default withTranslation()(AdminMem);
