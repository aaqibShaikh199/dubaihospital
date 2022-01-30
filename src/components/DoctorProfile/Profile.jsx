import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Departments/departments.css";
import { useLocation } from "react-router-dom";
import { demoData } from "../DemoData/demodata";
import { demoDatas } from "../DemoData/demodatas";
import { withTranslation } from "react-i18next";
import Loading from "../Loading/Loading";

const Profile = ({ t }) => {
    const [doctors, setDoctors] = useState();
    const [loading, setloading] = useState(true);
    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const singleDoc = demoData.filter(
        (data) => data.linkto === splitLocation[2]
    );
    const singleDocar = demoDatas.filter(
        (data) => data.linkto === splitLocation[2]
    );

    useEffect(() => {
        setloading(true);
        const getDept = () => {
            const language = localStorage.getItem("language");
            console.log(language === "ar");
            if (language === "ar") {
                console.log("ar");
                setDoctors(singleDocar);
            } else {
                console.log("en");
                setDoctors(singleDoc);
            }

            //setDepartment(demodept);
        };
        getDept();
        setloading(false);
    }, []);

    return (
        <>
            {loading ? (
                <div className="w-full h-full flex justify-center items-center py-4">
                    <Loading />
                </div>
            ) : (
                <div>
                    {" "}
                    {doctors.map((doc) => (
                        <div className="departments">
                            <div className="depDetail">
                                <div className="depProfileDetailContainer">
                                    <div className="drTextHead">
                                        <div className="drDetailAbout8">
                                            <div className="my-24 ml-10">
                                                <div className="my-2 flex">
                                                    <img
                                                        className="w-7 h-6"
                                                        src="/assets/dr/map.png"
                                                        alt="data"
                                                    />
                                                    <h4
                                                        className="text-lg mx-1"
                                                        dir={t("directionc")}
                                                    >
                                                        {doc.Nationality}
                                                    </h4>
                                                </div>
                                                <h2
                                                    className="text-4xl font-semibold"
                                                    dir={t("directionc")}
                                                >
                                                    {doc.namear}
                                                </h2>
                                                <h4
                                                    className="mt-4"
                                                    dir={t("directionc")}
                                                >
                                                    {doc.positionar}
                                                </h4>
                                                <div className="mt-20">
                                                    <h5 className="flex mb-2">
                                                        {t("qualification")} :
                                                        <p
                                                            className="ml-1"
                                                            dir={t(
                                                                "directionc"
                                                            )}
                                                        >
                                                            {doc.Qualification}
                                                        </p>
                                                    </h5>
                                                    {!doc.License < 1 && (
                                                        <h5
                                                            className="flex flex-col mb-2"
                                                            dir={t(
                                                                "directionc"
                                                            )}
                                                        >
                                                            {t("License")} :
                                                            {doc.License.map(
                                                                (lic) => (
                                                                    <>
                                                                        <p
                                                                            className="ml-3"
                                                                            dir={t(
                                                                                "directionc"
                                                                            )}
                                                                        >
                                                                            {
                                                                                lic
                                                                            }
                                                                        </p>
                                                                    </>
                                                                )
                                                            )}
                                                        </h5>
                                                    )}
                                                    <h4
                                                        className="flex"
                                                        dir={t("directionc")}
                                                    >
                                                        {t("yearsofex")}:{" "}
                                                        <p
                                                            className="ml-1"
                                                            dir={t(
                                                                "directionc"
                                                            )}
                                                        >
                                                            {doc.Experience}
                                                        </p>
                                                    </h4>
                                                </div>
                                                <button
                                                    dir={t("directionc")}
                                                    className="border-white border-2 px-4 py-2 rounded-full mt-4 transition-all duration-500 hover:bg-white hover:text-black"
                                                >
                                                    <Link to="/appointment">
                                                        {t("book_appoi")}
                                                    </Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="docProfileImgWrapper">
                                        <img
                                            className="depDetailImg"
                                            src={doc.imgUrl}
                                            alt="dermatology"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="treatmentDetails">
                                <div className="depMain">
                                    <h1
                                        className="depMainHead"
                                        dir={t("directionc")}
                                    >
                                        {t("Procedures")}
                                    </h1>
                                    <div className="depLine"></div>
                                </div>

                                <div className="treatmentWrapper">
                                    {doc.skillsar.map((skill, index) => (
                                        <div
                                            className="treatmentCard"
                                            key={index}
                                        >
                                            <div className="checkLogo">
                                                <img
                                                    src="/assets/dr/customcheck.jpg"
                                                    alt="check"
                                                />
                                            </div>
                                            <div className="treatmentText">
                                                <h2
                                                    className="drskillTitle"
                                                    dir={t("directionc")}
                                                >
                                                    {skill}
                                                </h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default withTranslation()(Profile);
