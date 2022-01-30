import React, { useEffect, useState } from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import { demoDatas } from "../DemoData/demodatas";
import SingleDoctor from "../Doctor/SingleDoctor";
import { withTranslation } from "react-i18next";
import Loading from "../Loading/Loading";

function Dietitian({ t }) {
    const [data, setData] = useState();
    const [loading, setloading] = useState(true);

    // const filterdDoc = data.filter((data1) =>
    //     data1.department.includes("bariatic")
    // );
    useEffect(() => {
        setloading(true);
        const getDept = () => {
            const language = localStorage.getItem("language");
            console.log(language === "ar");
            if (language === "ar") {
                console.log("ar");
                const filterdDoc = demoDatas.filter((data1) =>
                    data1.department.includes("dietitian")
                );
                setData(filterdDoc);
            } else {
                console.log("en");
                const filterdDoc = demoData.filter((data1) =>
                    data1.department.includes("dietitian")
                );
                setData(filterdDoc);
            }

            //setDepartment(demodept);
        };
        getDept();
        setloading(false);
    }, []);

    const treatmentsOffered = [
        {
            name: `${t("dietitian.treatment1")}`,
            detail: "",
            logo: "",
        },
        {
            name: `${t("dietitian.treatment2")}`,
            detail: "",
            logo: "",
        },
        {
            name: `${t("dietitian.treatment3")}`,
            detail: "",
            logo: "",
        },
        {
            name: `${t("dietitian.treatment4")}`,
            detail: "",
            logo: "",
        },
    ];
    const filterdDoc = demoData.filter((data) =>
        data.department.includes("dietitian")
    );

    return (
        <>
            {loading ? (
                <div className="w-full h-full flex justify-center items-center py-4">
                    <Loading />
                </div>
            ) : (
                <div dir={t("direction")} className="departments">
                    <div className="depMainBack">
                        <img
                            className="depMainImg"
                            src="/assets/department/2-min.png"
                            alt="department Back"
                        />
                        <div className="depMainOverlay">
                            <h1 className="depMainText">
                                {t("dietitian.title")}
                            </h1>
                        </div>
                    </div>

                    <div className="depDetail">
                        <div className="depDetailContainer">
                            <div className="depTextHead">
                                <h1 className="depDetailTitle">
                                    {t("dietitian.subTitle")}
                                </h1>
                                <div className="depDetailAbout">
                                    {t("dietitian.bodyPart1")}
                                    {/* <br />
                            <br />
                            {t("dietitian.bodyPart2")} */}
                                </div>
                            </div>
                            <div className="depImgWrapper">
                                <img
                                    className="depDetailImg"
                                    src="/assets/department/diet.png"
                                    alt="earnose"
                                />
                            </div>
                        </div>
                    </div>
                    {/* 
            <div className="treatmentDetails">
                <div className="depMain">
                    <h1 className="depMainHead">
                        {t("dietitian.treatmentHead")}
                    </h1>
                    <p className="depMainPara">
                        {t("dietitian.treatmentBody")}
                    </p>
                    <div className="depLine"></div>
                </div>

                <div className="treatmentWrapper">
                    {treatmentsOffered.map((item, index) => (
                        <>
                            <div className="treatmentCard" key={index}>
                               
                                <div className="checkLogo">
                                    <img
                                        src="/assets/dr/customcheck.jpg"
                                        alt="check"
                                    />
                                </div>
                                <div className="treatmentText">
                                    <h2 className="treatmentTitle">
                                        {item.name}
                                    </h2>
                                   
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div> */}

                    <div className="depDoctors">
                        <div className="depMain">
                            <h1 className="depMainHead">{t("depdoc")}</h1>
                            {/* <p className="depMainPara">
                        Our expert team of dietitian specializes
                    </p> */}
                            <div className="depLine"></div>
                        </div>
                        <div className="grid grid-cols-1 justify-center justify-items-center items-center gap-4 md:grid-cols-4 px-2 md:px-10">
                            {data.map((doc, index) => (
                                <SingleDoctor
                                    key={index}
                                    imgUrl={doc.imgUrl}
                                    namear={doc.namear}
                                    positionar={doc.positionar}
                                    mobno={doc.mobno}
                                    email={doc.email}
                                    linkto={doc.linkto}
                                />
                            ))}
                        </div>
                    </div>

                    {/* <div className="depBanner">
                <img
                    class="depBannerImg"
                    src="/assets/department/depLastBack.jpg"
                    alt="anyimg"
                />
                <div className="depBannerOverlay">
                    <h3 className="depBannerText">Reliable & Trusted</h3>
                    <h1 className="depBannerHead">
                        Get the Best Ortho Treatment
                    </h1>
                    <p className="depBannerPara">
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Excepteur sint, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                    <div className="depBannerButton">
                        <a className="depBannerBtn" href="/contact">
                            Contact Us Now
                        </a>
                    </div>
                </div>
            </div> */}
                </div>
            )}
        </>
    );
}

export default withTranslation()(Dietitian);
