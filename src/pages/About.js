import React from "react";
import AboutHead from "../components/About/AboutHead";
import { withTranslation } from "react-i18next";
// import BrandSlider from "../components/About/BrandSlider";
import WhyChooseUs from "../components/About/WhyChooseUs";
// import BoD from "../components/About/BoD";
import AdminMem from "../components/About/AdminMem";
// import AboutFacts from "../components/About/AboutFacts";
import Facts from "../components/Home/Facts";
// import Journey from "../components/About/Journey";
// import Testimonials from "../components/About/Testimonials";
// import { Link } from "react-router-dom";
import "../components/About/About.css";

const About = ({ t }) => {
    return (
        <>
            <AboutHead />
            {/*About Content  */}
            <div dir={t("direction")} className="p-5 flex flex-col md:flex-row">
                <img
                    className="p-2 md:p-20 abmain-img"
                    src="/assets/about/12-min.png"
                    alt="About Home"
                />
                <div className="p-2 md:p-8 mt-14">
                    <h2
                        className="text-2xl md:text-5xl font-semibold titleColor"
                        style={{ color: "#3f0f1e" }}
                    >
                        {t("about.about_hist")}
                    </h2>
                    <p className="mt-7 text-base md:text-xl w-4/5 text-gray-200 textColor">
                        {t("about.about_histpara")}
                    </p>
                    {/* <p className="mt-7 font-normal text-sm md:text-md w-4/5 text-gray-200 textColor">
            <ul class="list-inside sm:list-outside md:list-inside lg:list-outside xl:list-inside">
              <li className="flex">
                <img
                  className="w-4 h-4 m-1.5"
                  src="/assets/about/tick.png"
                  alt="tick"
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </li>
              <li className="flex">
                <img
                  className="w-4 h-4 m-1.5"
                  src="/assets/about/tick.png"
                  alt="tick"
                />
                <p>
                  {" "}
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </p>
              </li>
              <li className="flex">
                <img
                  className="w-4 h-4 m-1.5"
                  src="/assets/about/tick.png"
                  alt="tick"
                />
                <p>
                  {" "}
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </p>
              </li>
            </ul>
          </p> */}

                    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white mt-10 font-bold py-2 px-4 rounded">
            <Link to="/about">Learn More</Link>
          </button> */}
                </div>
            </div>
            {/*About Content Closed */}
            {/* <AboutFacts /> */}
            <div className="w-full flex justify-center items-center">
                <img
                    className="w-full md:w-4/6"
                    src={t("ujimages.journey")}
                    alt="chart"
                />
            </div>
            {/* <Journey /> */}
            <Facts />
            <WhyChooseUs />
            {/* <BoD /> */}
            <div className="w-full flex justify-center items-center">
                <img
                    className="w-full md:w-4/6"
                    src={t("ujimages.chart")}
                    alt="chart"
                />
            </div>
            <AdminMem />
            {/* <Testimonials /> */}
            {/* <BrandSlider /> */}
        </>
    );
};

export default withTranslation()(About);
