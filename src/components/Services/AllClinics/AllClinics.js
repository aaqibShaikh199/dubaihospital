import React from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import "./department.css";

function AllClinics({ t }) {
    const demoClinic = [
        {
            name: `${t("allclinics.a.name")}`,
            desc: `${t("allclinics.a.info")}`,
            imgurl: "assets/department/Pediatrics.png",
            linkto: "/clinics/pediatrics",
        },
        {
            name: `${t("allclinics.b.name")}`,
            desc: `${t("allclinics.b.info")}`,
            imgurl: "assets/department/ob.png",
            linkto: "/clinics/ob-gyne",
        },
        {
            name: `${t("allclinics.c.name")}`,
            desc: `${t("allclinics.c.info")}`,
            imgurl: "assets/department/bones.png",
            linkto: "/clinics/ophthalmology",
        },
        {
            name: `${t("allclinics.d.name")}`,
            desc: `${t("allclinics.d.info")}`,
            imgurl: "assets/department/gas.png",
            linkto: "/clinics/gastroenterology",
        },
        {
            name: `${t("allclinics.e.name")}`,
            desc: `${t("allclinics.e.info")}`,
            imgurl: "assets/department/cardio.png",
            linkto: "/clinics/cardiologist",
        },
        // {
        //     name: "Internal Medicine Department",
        //     desc: "The department of a hospital responsible for the provision of medical and surgical care to patients arriving at the hospital in need of immediate care.",
        //     imgurl: "assets/department/cardio.png",
        //     linkto: "/clinics/internal-medicine",
        // },
        {
            name: `${t("allclinics.f.name")}`,
            desc: `${t("allclinics.f.info")}`,
            imgurl: "assets/department/dentist.png",
            linkto: "/clinics/dentistry",
        },
        {
            name: `${t("allclinics.g.name")}`,
            desc: `${t("allclinics.g.info")}`,
            imgurl: "assets/department/die.png",
            linkto: "/clinics/dietitian",
        },
        {
            name: `${t("allclinics.h.name")}`,
            desc: `${t("allclinics.h.info")}`,
            imgurl: "assets/department/derma.png",
            linkto: "/clinics/dermatology",
        },
        {
            name: `${t("allclinics.i.name")}`,
            desc: `${t("allclinics.i.info")}`,
            imgurl: "assets/department/ortho.png",
            linkto: "/clinics/orthopedics",
        },
        {
            name: `${t("allclinics.j.name")}`,
            desc: `${t("allclinics.j.info")}`,
            imgurl: "assets/department/surgery.png",
            linkto: "/clinics/general-surgery",
        },
        {
            name: `${t("allclinics.k.name")}`,
            desc: `${t("allclinics.k.info")}`,
            imgurl: "assets/department/Urology.png",
            linkto: "/clinics/urology",
        },
        {
            name: `${t("allclinics.l.name")}`,
            desc: `${t("allclinics.l.info")}`,
            imgurl: "assets/department/neurology.png",
            linkto: "/clinics/neuro",
        },
        {
            name: `${t("allclinics.m.name")}`,
            desc: `${t("allclinics.m.info")}`,
            imgurl: "assets/department/Pshyciatric.png",
            linkto: "/clinics/pshyciatric",
        },
        {
            name: `${t("allclinics.n.name")}`,
            desc: `${t("allclinics.n.info")}`,
            imgurl: "assets/department/Bariatic.png",
            linkto: "/clinics/bariatic-surgery",
        },
        {
            name: `${t("departments.l.name")}`,
            desc: `${t("departments.l.info")}`,
            imgurl: "/assets/departmentlogos/intmeds.jpg",
            linkto: "/clinics/internal-medicine",
        },
        {
            name: `${t("allclinics.o.name")}`,
            desc: `${t("allclinics.o.info")}`,
            imgurl: "assets/department/physio.png",
            linkto: "/clinics/physiotherapist",
        },
        {
            name: `${t("allclinics.p.name")}`,
            desc: `${t("allclinics.p.info")}`,
            imgurl: "assets/department/EarNoseThroat.png",
            linkto: "/clinics/ear-nose-throat",
        },
    ];

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className="department py-6">
            <div dir={t("direction")} className="depMain">
                <h1 className="depMainHead">{t("hc")}</h1>
                <p style={{ color: "#3f0f1e" }} className="depMainPara">
                    {t("hcpara")}
                </p>
                <div className="depLine"></div>
            </div>
            <div className="depContainer">
                {demoClinic.map((clinic, index) => (
                    <Link
                        dir={t("direction")}
                        to={clinic.linkto}
                        key={index}
                        onClick={scrollToTop}
                        className="depCard"
                    >
                        <div className="depIcon">
                            <img
                                className="depIconImg"
                                src={clinic.imgurl}
                                alt="dept"
                            />
                        </div>
                        <h1 className="depHead">{clinic.name}</h1>
                        {/* <h3 className='depAbout'>Operations & surgeries</h3> */}
                        {/* <p className="depDetailHome">{clinic.desc}</p> */}
                        {/* <Link
                            onClick={scrollToTop}
                            to={clinic.linkto}
                            className="depLink"
                        >
                            Get Details..
                        </Link> */}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default withTranslation()(AllClinics);
