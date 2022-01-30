import React from "react";
import { withTranslation } from "react-i18next";
import "./About.css";

const WhyChooseUs = ({ t }) => {
    return (
        <div dir={t("direction")}>
            <div className="md:p-2 md:my-6 text-center">
                <h2
                    className="mt-12 text-4xl font-medium"
                    style={{ color: "#3f0f1e" }}
                >
                    {t("about.why")}
                </h2>
                {/* <p className="text-lg px:4 md:my-4 text-gray-500">
                    There live the blind texts separated they right at the coast
                    of the Semantics.
                </p> */}
                <div className="flex justify-center items-center w-full mt-4">
                    <div className="h-1 w-16 bg-primary-brown"></div>
                </div>
            </div>

            <div class="px-2 md:grid md:grid-cols-2 md:gap-4 justify-items-center md:px-10">
                {/* col 1  */}
                <section>
                    <div className="hidden md:flex justify-center items-center md:px-6">
                        <img
                            className="w-3/4"
                            src="/assets/images/finddoc2.png"
                            alt="Doctors"
                        />
                    </div>
                </section>
                {/* col 2  */}
                <section className="md:px-5 flex flex-col justify-center items-center">
                    {/* <div className="mx-4 md:mt-4 mb-1">
                        <div className="flex justify-start">
                            <img
                                className="h-10 w-10"
                                src="/assets/about/mission.png"
                                alt="mission"
                            />
                            <h3
                                className="font-medium px-3 text-2xl"
                                style={{ color: "#3f0f1e" }}
                            >
                                {t("about.mission")}
                            </h3>
                        </div>
                        <p className="text-xl my-2 text-gray-800">
                            {t("about.missionpara")}{" "}
                        </p>
                    </div> */}

                    <div className="mx-4 md:mt-4 mb-1">
                        <div className="flex justify-start">
                            <img
                                className="h-10 w-10"
                                src="/assets/about/mission.png"
                                alt="mission"
                            />
                            <h3
                                className="font-medium px-3 text-2xl"
                                style={{ color: "#3f0f1e" }}
                            >
                                {t("about.mission")}
                            </h3>
                        </div>
                        <p className="text-xl my-2 text-gray-800">
                            {t("about.missionpara")}
                        </p>
                    </div>

                    <div className="mx-4 md:mt-4 mb-1">
                        <div className="flex justify-start">
                            <img
                                className="h-10 w-10"
                                src="/assets/about/vision.png"
                                alt="mission"
                            />
                            <h3
                                className="font-medium px-3 text-2xl"
                                style={{ color: "#3f0f1e" }}
                            >
                                {t("about.vision")}
                            </h3>
                        </div>
                        <p className="text-xl my-2 text-gray-800">
                            {t("about.visionpara")}
                        </p>
                    </div>
                    <div className="mx-4 md:mt-4 mb-1">
                        <div className="flex justify-start">
                            <img
                                className="h-10 w-10"
                                src="/assets/about/values.png"
                                alt="values"
                            />
                            <h3
                                className="font-medium px-3 text-2xl"
                                style={{ color: "#3f0f1e" }}
                            >
                                {t("about.values")}
                            </h3>
                        </div>
                        <p className="text-xl my-2 text-gray-800">
                            {t("about.valuespara")}
                        </p>
                    </div>
                </section>

                {/* col 3  */}
                {/* <section>
                    <div className="mx-4 md:mt-8">
                        <div className="flex">
                            <img
                                className="h-10 w-10"
                                src="/assets/about/technology.png"
                                alt="technology"
                            />
                            <h3 className="font-medium px-2 text-2xl">
                                Technology
                            </h3>
                        </div>
                        <p className="text-lg my-2 text-gray-600">
                            Anim pariatur cliche life eiusmod reprehenderit
                            enim.
                        </p>
                    </div>

                    <div className="mx-4">
                        <div className="flex md:mt-24">
                            <img
                                className="h-10 w-10"
                                src="/assets/about/values.png"
                                alt="values"
                            />
                            <h3 className="font-medium px-2 text-2xl">
                                Values
                            </h3>
                        </div>
                        <p className="text-lg my-2 text-gray-600">
                            Dignity and respect | Medical excellence |
                            Transparency | Justice | Safety | Teamwork |
                            Loyalty 
                        </p>
                    </div>
                </section> */}
            </div>
        </div>
    );
};

export default withTranslation()(WhyChooseUs);
