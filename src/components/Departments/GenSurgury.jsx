import React, { useEffect, useState } from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import { demoDatas } from "../DemoData/demodatas";
import SingleDoctor from "../Doctor/SingleDoctor";
import { withTranslation } from "react-i18next";
import Loading from "../Loading/Loading";

function Gen_surgery({ t }) {
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
                    data1.department.includes("general_surgeon")
                );
                setData(filterdDoc);
            } else {
                console.log("en");
                const filterdDoc = demoData.filter((data1) =>
                    data1.department.includes("general_surgeon")
                );
                setData(filterdDoc);
            }

            //setDepartment(demodept);
        };
        getDept();
        setloading(false);
    }, []);

    const treatmentOffered = {
        DiagnosticModalities: [
            {
                name: `${t("GeneralSurgery.dm1")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.dm2")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.dm3")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.dm4")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.dm5")}`,
                detail: "",
                logo: "",
            },
        ],
        TherapeuticModalities: [
            {
                name: `${t("GeneralSurgery.tm1")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.tm2")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.tm3")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.tm4")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.tm5")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.tm6")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.tm7")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.tm8")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.tm9")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.tm10")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.tm11")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.tm12")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.tm13")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.tm14")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("GeneralSurgery.tm15")}`,
                detail: "",
                logo: "",
            },
        ],
    };
    const filterdDoc = demoData.filter((data) =>
        data.department.includes("general_surgeon")
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
                            src="/assets/department/5-min.png"
                            alt="department Back"
                        />
                        <div className="depMainOverlay">
                            <h1 className="depMainText">
                                {t("GeneralSurgery.dname")}
                            </h1>
                        </div>
                    </div>

                    <div className="depDetail">
                        <div className="depDetailContainer">
                            <div className="depTextHead">
                                <h1 className="depDetailTitle">
                                    {t("GeneralSurgery.dname")}
                                </h1>
                                <div className="depDetailAbout">
                                    {t("GeneralSurgery.detail")}
                                </div>
                            </div>
                            <div className="depImgWrapper">
                                <img
                                    className="depDetailImg"
                                    src="/assets/images/generalsurgery.jpg"
                                    alt="Gen_surgery"
                                />
                            </div>
                        </div>
                    </div>

                    {/* <div className="treatmentDetails">
        <div className="depMain">
          <h1 className="depMainHead">{t("to")}</h1>
          <p className="depMainPara">
          {t("GeneralSurgery.treatment")}
          </p>
          <div className="depLine"></div>
        </div>

        <div className="treatmentWrapper">
          <h1 className="depMainHead">{t("dm")}</h1>
        </div>
        <div className="treatmentWrapper">
          {treatmentOffered.DiagnosticModalities.map((item, index) => (
            <>
              <div className="treatmentCard" key={index}>
                <div className="checkLogo">
                  <img src="/assets/dr/customcheck.jpg" alt="check" />
                </div>
                <div className="treatmentText">
                  <h2 className="treatmentTitle">{item.name}</h2>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="treatmentWrapper">
          <h1 className="depMainHead">{t("tm")}</h1>
        </div>
        <div className="treatmentWrapper">
          {treatmentOffered.TherapeuticModalities.map((item, index) => (
            <>
              <div className="treatmentCard" key={index}>
                <div className="checkLogo">
                  <img src="/assets/dr/customcheck.jpg" alt="check" />
                </div>
                <div className="treatmentText">
                  <h2 className="treatmentTitle">{item.name}</h2>
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
            Our extensively trained, certified surgeons a use state-of-the art
            equipment to achieve your desired healthcare results
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

export default withTranslation()(Gen_surgery);
