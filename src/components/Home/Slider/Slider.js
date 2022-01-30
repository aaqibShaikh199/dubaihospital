import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./slider.css";
import { withTranslation } from "react-i18next";

const Slider = ({ t }) => {
    return (
        <div>
            <Carousel
                autoPlay={true}
                interval={4500}
                infiniteLoop={true}
                transitionTime={2000}
                showIndicators={false}
                swipeable={false}
                showStatus={false}
                showThumbs={false}
            >
                <div dir={t("direction")} className="slider-height w-full">
                    <img
                        className="h-full w-full bg-cover bg-center"
                        style={{ objectFit: "cover" }}
                        src="/assets/slider/Slide1.png"
                        alt="prod1"
                    />
                    <div className="w-full h-full main-dark-bg bg-black opacity-30"></div>
                    <div className="main-text bg-transparent text-grey-300">
                        {/* <p className="text-white text-left md:text-2xl bg-transparent mb-2">
                            {t("slider.home_slider1_a")}
                        </p> */}
                        <h1 className=" text-white text-left font-semibold text-3xl md:text-6xl bg-transparent mb-4">
                            {t("slider.home_slider1_b")}
                        </h1>
                        <p className=" text-white text-left md:text-2xl bg-transparent mb-4">
                            {t("slider.home_slider1_c")}
                        </p>
                        {/* <div className="flex justify-start">
                            <Link
                                to="/appointment"
                                className="text-white py-3 px-4 uppercase font-light bg-blue-600 hover:bg-green-400 md:text-xl mb-2"
                            >
                                Book Appointment
                            </Link>
                        </div> */}
                    </div>
                </div>

                <div dir={t("direction")} className="slider-height w-full">
                    <img
                        className="h-full w-full bg-cover bg-center"
                        style={{ objectFit: "cover" }}
                        src="/assets/slider/Slide2.png"
                        alt="prod1"
                    />
                    <div className="w-full h-full main-dark-bg bg-black opacity-30"></div>
                    <div className="main-text bg-transparent text-grey-300">
                        <h1 className=" text-white text-left font-semibold text-3xl md:text-6xl bg-transparent mb-4">
                            {t("slider.home_slider2_b")}
                        </h1>
                        <p className=" text-white text-left md:text-2xl bg-transparent mb-4">
                            {t("slider.home_slider2_c")}
                        </p>
                        {/* <div className="flex justify-start">
                            <Link
                                to="/doctor"
                                className="text-white py-3 px-4 uppercase font-light bg-blue-600 hover:bg-green-400 md:text-xl mb-2"
                            >
                                Find a Doctor
                            </Link>
                        </div> */}
                    </div>
                </div>

                <div dir={t("direction")} className="slider-height w-full">
                    <img
                        className="h-full w-full bg-cover bg-center"
                        style={{ objectFit: "cover" }}
                        src="/assets/slider/Slide3.png"
                        alt="prod1"
                    />
                    <div className="w-full h-full main-dark-bg bg-black opacity-30"></div>
                    <div className="main-text bg-transparent text-grey-300">
                        {/* <p className="text-white text-left md:text-2xl bg-transparent mb-2">
                            {t("slider.home_slider1_a")}
                        </p> */}
                        <h1 className=" text-white text-left font-semibold text-3xl md:text-6xl bg-transparent mb-4">
                            {t("slider.home_slider3_b")}
                        </h1>
                        <p className=" text-white text-left md:text-2xl bg-transparent mb-4">
                            {t("slider.home_slider3_c")}
                        </p>
                        {/* <div className="flex justify-start">
                            <Link
                                to="/clinics"
                                className="text-white py-3 px-4 uppercase font-light bg-blue-600 hover:bg-green-400 md:text-xl mb-2"
                            >
                                Visitor Guide
                            </Link>
                        </div> */}
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default withTranslation()(Slider);
