import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import { withTranslation } from "react-i18next";
import "react-alice-carousel/lib/alice-carousel.css";

import "./About.css";

const BrandSlider = ({ t }) => {
    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 4 },
    };

    const items = [
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/radiology.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">{t("departments.a.name")}</h1>
                    <p className="depDetailHome">{t("departments.a.info")}</p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/lab.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">{t("departments.b.name")}</h1>
                    <p className="depDetailHome">{t("departments.b.info")}</p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/physio.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">{t("departments.c.name")}</h1>
                    <p className="depDetailHome">{t("departments.c.info")}</p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/opc.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">{t("departments.d.name")}</h1>
                    <p className="depDetailHome">{t("departments.d.info")}</p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/ip.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">{t("departments.e.name")}</h1>
                    <p className="depDetailHome">{t("departments.e.info")}</p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/hc.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">{t("departments.g.name")}</h1>
                    <p className="depDetailHome">{t("departments.g.info")}</p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/radiology.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">{t("departments.f.name")}</h1>
                    <p className="depDetailHome">{t("departments.f.info")}</p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/delivery.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">{t("departments.i.name")}</h1>
                    <p className="depDetailHome">{t("departments.i.info")}</p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/phar.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">{t("departments.h.name")}</h1>
                    <p className="depDetailHome">{t("departments.h.info")}</p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/icu2.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">{t("departments.j.name")}</h1>
                    <p className="depDetailHome">{t("departments.j.info")}</p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/er.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">{t("departments.k.name")}</h1>
                    <p className="depDetailHome">{t("departments.k.info")}</p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/nicu.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">{t("departments.m.name")}</h1>
                    <p className="depDetailHome">{t("departments.m.info")}</p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/icu.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">{t("departments.n.name")}</h1>
                    <p className="depDetailHome">{t("departments.n.info")}</p>
                </div>
            </div>
        </div>,
    ];

    return (
        <div dir={t("direction")} className="bg-gray-200 w-full px-5">
            <div className="p-2 text-center">
                <h2
                    className="mt-12 text-4xl font-medium"
                    style={{ color: "#3f0f1e" }}
                >
                    {t("departments.dtitle")}
                </h2>
                <p className="text-xl my-4" style={{ color: "#3f0f1e" }}>
                    {t("departments.dpara")}
                </p>
                <div className="flex justify-center items-center w-full">
                    <div className="h-1 w-16 bg-blue-500"></div>
                </div>
            </div>
            <div className="relative">
                <AliceCarousel
                    mouseTracking
                    infinite={true}
                    animationDuration={900}
                    paddingLeft={6}
                    paddingRight={6}
                    items={items}
                    autoPlay={true}
                    autoPlayInterval={2000}
                    responsive={responsive}
                    disableDotsControls={true}
                    disableButtonsControls={false}
                    controlsStrategy="default"
                    // renderPrevButton={() => {
                    //     <div className="p-4 absolute left-3 top-3">
                    //         <svg
                    //             xmlns="http://www.w3.org/2000/svg"
                    //             className="h-7 w-7"
                    //             viewBox="0 0 20 20"
                    //             fill="currentColor"
                    //         >
                    //             <path
                    //                 fillRule="evenodd"
                    //                 d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                    //                 clipRule="evenodd"
                    //             />
                    //         </svg>
                    //     </div>;
                    // }}
                    // renderNextButton={() => {
                    //     <div className="p-4 absolute right-3 top-3">
                    //         <svg
                    //             xmlns="http://www.w3.org/2000/svg"
                    //             className="h-7 w-7"
                    //             viewBox="0 0 20 20"
                    //             fill="currentColor"
                    //         >
                    //             <path
                    //                 fillRule="evenodd"
                    //                 d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    //                 clipRule="evenodd"
                    //             />
                    //         </svg>
                    //     </div>;
                    // }}
                />
            </div>
        </div>
    );
};

export default withTranslation()(BrandSlider);
