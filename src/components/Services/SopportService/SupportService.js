import React from "react";
import SupportGrid from "./SupportGrid";
import { withTranslation } from "react-i18next";

const SupportService = ({ t }) => {
    return (
        <div dir={t("direction")}>
            <div
                className="bg-center bg-cover"
                style={{
                    backgroundImage: `url("/assets/department/6-min.png")`,
                    width: "100%",
                    height: "55vh",
                }}
            >
                <div className="flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
                    <div className="text-center font-semibold text-white text-4xl md:text-7xl">
                        <h1 className="mb-7">{t("alldeps")}</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center py-10 px-2 md:px-20">
                <SupportGrid
                    imgUrl="/assets/departmentlogos/radiology.png"
                    title={t("departments.a.name")}
                    desc={t("departments.a.info")}
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/lab.png"
                    title={t("departments.b.name")}
                    desc={t("departments.b.info")}
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/physio.png"
                    title={t("departments.c.name")}
                    desc={t("departments.c.info")}
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/opc.png"
                    title={t("departments.d.name")}
                    desc={t("departments.d.info")}
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/ip.png"
                    title={t("departments.e.name")}
                    desc={t("departments.e.info")}
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/or.png"
                    title={t("departments.f.name")}
                    desc={t("departments.f.info")}
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/hc.png"
                    title={t("departments.g.name")}
                    desc={t("departments.g.info")}
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/phar.png"
                    title={t("departments.h.name")}
                    desc={t("departments.h.info")}
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/delivery.png"
                    title={t("departments.i.name")}
                    desc={t("departments.i.info")}
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/icu2.png"
                    title={t("departments.j.name")}
                    desc={t("departments.j.info")}
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/er.png"
                    title={t("departments.k.name")}
                    desc={t("departments.k.info")}
                />
                {/* <SupportGrid
                    imgUrl="/assets/departmentlogos/intmed.png"
                    title={t("departments.l.name")}
                    desc={t("departments.l.info")}
                /> */}
                <SupportGrid
                    imgUrl="/assets/departmentlogos/nicu.png"
                    title={t("departments.m.name")}
                    desc={t("departments.m.info")}
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/icu.png"
                    title={t("departments.n.name")}
                    desc={t("departments.n.info")}
                />
            </div>
        </div>
    );
};

export default withTranslation()(SupportService);
