import React from "react";
import InsuranceGrid from "./InsuranceGrid";
import { withTranslation } from "react-i18next";

const Insurance = ({ t }) => {
    return (
        <div>
            <div
                className="bg-center bg-cover"
                style={{
                    backgroundImage: `url("/assets/insurance/3-min.png")`,
                    width: "100%",
                    height: "55vh",
                }}
            >
                <div className="flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
                    <div className="text-center font-semibold text-white text-4xl md:text-7xl">
                        <h1 className="mb-7">{t("inc")}</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-7 justify-center items-center py-10 px-2 md:px-20">
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-6/6"
                        src="/assets/insurance/bupa.png"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-6/6"
                        src="/assets/insurance/Tuwuniya.png"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-6/6"
                        src="/assets/insurance/mednet.png"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-6/6"
                        src="/assets/insurance/Malath.jpg"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-4/6"
                        src="/assets/insurance/Medgulf.png"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-4/6"
                        src="/assets/insurance/Alrajhi-Takaful.jpg"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-4/6"
                        src="/assets/insurance/tcs.png"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-6/6"
                        src="/assets/insurance/allianz.jpg"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-6/6"
                        src="/assets/insurance/buruj.png"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-4/6"
                        src="/assets/insurance/aletihad.png"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-6/6"
                        src="/assets/insurance/walaa.jpg"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-6/6"
                        src="/assets/insurance/ARABIANSHEILD.png"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-4/6"
                        src="/assets/insurance/sncinc.png"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-4/6"
                        src="/assets/insurance/Gulf-Union.jpg"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-4/6"
                        src="/assets/insurance/globemed.png"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-6/6"
                        src="/assets/insurance/ALSAQER.png"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-4/6"
                        src="/assets/insurance/alahlia1.jpg"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-4/6"
                        src="/assets/insurance/senya.jpg"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-4/6"
                        src="/assets/insurance/ALARABIYA.png"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-4/6"
                        src="/assets/insurance/alsalama.png"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-6/6"
                        src="/assets/insurance/wt.png"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-6/6"
                        src="/assets/insurance/uca.jpg"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-4/6"
                        src="/assets/insurance/SOLIDARITY.png"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-4/6"
                        src="/assets/insurance/amana.jpg"
                        alt="chart"
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-4/6"
                        src="/assets/insurance/aljazeera.jpg"
                        alt="chart"
                    />
                </div>
                {/* <div className="w-full flex justify-center items-center">
                    <img
                        className="w-full md:w-4/6"
                        src="/assets/insurance/GLOBAL-NET.jpg"
                        alt="chart"
                    />
                </div> */}
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center py-10 px-2 md:px-20">
                <InsuranceGrid
                    imgUrl="/assets/insurance/bupa.png"
                    title="Bupa"
                    desc="Bupa's global network and reach enables Bupa Arabia to extract best practices and global medical guidelines from all around the world on an ongoing basis and implement them in Saudi Arabia."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/Tuwuniya.png"
                    title="Tuwuniya"
                    desc="Tawuniya provides its customers with more than 60 types of insurance including medical, motor, fire, property, engineering, casualty, marine, aviation, Takaful, liability insurance and many other types of insurance."
                />

                <InsuranceGrid
                    imgUrl="/assets/insurance/mednet.png"
                    title="Mednet"
                    desc="MedNet provide managed care service in Saudi Arabia and dedicated to serving high-quality healthcare solutions in Middle East."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/Malath.jpg"
                    title="Malath"
                    desc="Malath Cooperative Insurance Co. is a 100% Saudi Company established in 2007 by Saudi Leaders & Entrepreneurs. It is the 2nd insurance company that was listed in the Saudi Stock Market."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/Medgulf.png"
                    title="Medgulf"
                    desc="MEDGULF is one of the Kingdom's largest insurance companies, providing a comprehensive choice of cooperative Health, Motor, Property and other insurance and reinsurance services."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/Alrajhi-Takaful.jpg"
                    title="Alrajhi Takaful"
                    desc="Insurance Plans which Suits Your Need. Choose From Third Party, Wafi Smart & Comprehensive. Drive Worry Free & Ensure that Your Motor is Insured with Motor Comprehensive Insurance."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/tcs.png"
                    title="TCS"
                    desc="TCS delivers the best in personalized customer service to patients while controlling utilization and costs resulting from services rendered within the scoupe of health care policies."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/ALSAQER.png"
                    title="ALSAQER (TCS)"
                    desc="Al Saqer has Experienced Hospital and Health Service Administration with a demonstrated history of working in the hospital & health care industry."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/aletihad.png"
                    title="AL ETIHAD (TCS)"
                    desc="Al-Etihad Co-operative Insurance Co. is one of the largest insurance companies in the Kingdom today. We are authorized to transact all classes of insurance except life insurance, supervised and regulated by SAMA"
                />

                <InsuranceGrid
                    imgUrl="/assets/insurance/ARABIANSHEILD.png"
                    title="ARABIAN SHEILD"
                    desc="Arabian Shield Cooperative Insurance Company sells insurance products including motor, marine, property and medical insurance. In addition, the company also provides claim settlement services to its policyholders."
                />

                <InsuranceGrid
                    imgUrl="/assets/insurance/sncinc.png"
                    title="SAUDI NEXT CARE"
                    desc="We are trusted partners to insurers, businesses and healthcare providers around the world. We secure services with transparency in mind."
                />

                <InsuranceGrid
                    imgUrl="/assets/insurance/Gulf-Union.jpg"
                    title="Gulf Union"
                    desc="Gulf Union have grown to be among the top national insurers in the Kingdom of Saudi Arabia that enable us to be licensed as one of the recognized Insurance."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/GLOBMED.jpg"
                    title="GLOBMED"
                    desc="Through our network of world-class doctors and healthcare facilities, from the initial consultation to post-treatment recovery, we arrange every detail to provide you with the very best healthcare solutions."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/senya.jpg"
                    title="SAUDI ENAYA (GLOBEMED)"
                    desc="International Medical Center, aka IMC, has trusted Saudi Enaya to manage all their insurance needs for 2020."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/ALARABIYA.png"
                    title="AL ARABIYA (GLOBMED)"
                    desc="With a strong presence in several Arab countries and over 75 years of experience in the insurance industry, Arabia Insurance Company has become a synonym to trust, great customer care, and peace of mind."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/alsalama.png"
                    title="AL SALAMA (GLOBMED)"
                    desc="With more than 40 years of experience, SALAMA is considered one of the leading Insurance Companies in the Saudi Market and the whole region."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/alahlia.png"
                    title="AL AHLIA (GLOBMED)"
                    desc="Al Ahlia Insurance, one of the leading insurance companies in Oman, received the Oman Insurer of the Year award at MENA IR Awards 2021 for the 8th time."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/SOLIDARITY.png"
                    title="SOLIDARITY (GLOBMED)"
                    desc="Established in 2007, Solidarity - First Insurance Company is a relatively fresh face in Jordan's crowded insurance market."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/amana.jpg"
                    title="AMANA (GLOBMED)"
                    desc="AMANA complies with insurance regulatory requirements of SAMA (Saudi Arabian Monetary Authority) and CCHI (Council of Cooperative Health Insurance) and is publicly listed on TADAWUL (the Saudi Arabian Stock Exchange)."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/aljazeera.jpg"
                    title="ALJAZIRAH (GLOBMED)"
                    desc="AL Jazirah Providing comprehensive and innovative insurance services with competitive prices."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/GLOBAL-NET.jpg"
                    title="Globalnet"
                    desc="Globalnet Insurance LLC builds policies with both you and your vehicle in mind, customizing the types and levels of coverage to fit."
                />
            </div> */}
        </div>
    );
};

export default withTranslation()(Insurance);
