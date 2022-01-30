import React from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import SingleDoctor from "../Doctor/SingleDoctor";
import { withTranslation } from "react-i18next";

const treatmentsOffered = [
    {
        name: "Critical cases",
        detail: "",
        logo: "",
    },
    {
        name: "Sutures",
        detail: "",
        logo: "",
    },
    {
        name: "Fever",
        detail: "",
        logo: "",
    },
    {
        name: "Common Illness",
        detail: "",
        logo: "",
    },
    {
        name: "Trauma",
        detail: "",
        logo: "",
    },
    {
        name: "High Blood Pressure",
        detail: "",
        logo: "",
    },
    {
        name: "Diabetes",
        detail: "",
        logo: "",
    },
    {
        name: "Hyperlipidemia",
        detail: "",
        logo: "",
    },
];

function ER() {
    const filterdDoc = demoData.filter((data) =>
        data.department.includes("er")
    );
    return (
        <div className="departments">
            <div className="depMainBack">
                <img
                    className="depMainImg"
                    src="/assets/department/7-min.png"
                    alt="department Back"
                />
                <div className="depMainOverlay">
                    <h1 className="depMainText">ER Department</h1>
                </div>
            </div>

            <div className="depDetail">
                <div className="depDetailContainer">
                    <div className="depTextHead">
                        <h1 className="depDetailTitle">ER Department</h1>
                        <div className="depDetailAbout">
                            The department of a hospital responsible for the
                            provision of medical and surgical care to patients
                            arriving at the hospital in need of immediate care..
                            <br />
                            <br />
                            If you have a health problem with your head or neck,
                            your doctor might recommend that you see an
                            otolaryngologist. That's someone who treats issues
                            in your ears, nose, or throat as well as related
                            areas in your head and neck.
                        </div>
                    </div>
                    <div className="depImgWrapper">
                        <img
                            className="depDetailImg"
                            src="/assets/department/4-min.png"
                            alt="earnose"
                        />
                    </div>
                </div>
            </div>

            <div className="treatmentDetails">
                <div className="depMain">
                    <h1 className="depMainHead">Treatments Offered</h1>
                    <p className="depMainPara">
                        Our ER department is dedicated to exceeding
                        expectations. We provide cutting edge treatment of
                        disorders below
                    </p>
                    <div className="depLine"></div>
                </div>

                <div className="treatmentWrapper">
                    {treatmentsOffered.map((item, index) => (
                        <>
                            <div className="treatmentCard" key={index}>
                                {/* for logo uncomment n remove check */}
                                {/* <div className="treatmentLogo">
                  <img src="/assets/department/surgery.png" alt="anyimg" />
                </div> */}
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
                                    {/* for content  */}
                                    {/* <p className="treatmentAbout">
                    Dunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                  </p> */}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>

            <div className="depDoctors">
                <div className="depMain">
                    <h1 className="depMainHead">Department Doctors</h1>
                    <p className="depMainPara">Department doctors are</p>
                    <div className="depLine"></div>
                </div>
                <div className="grid grid-cols-1 justify-center justify-items-center items-center gap-4 md:grid-cols-4 px-2 md:px-10">
                    {filterdDoc.map((doc, index) => (
                        <SingleDoctor
                            key={index}
                            imgUrl={doc.imgUrl}
                            name={doc.name}
                            position={doc.position}
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
    );
}

export default withTranslation()(ER);

