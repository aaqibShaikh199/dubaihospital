import React, { useEffect, useState } from "react";
import "./About.css";
import "./journey.css";

const Journey = () => {
    const [changeUi, setChangeUi] = useState(false);
    useEffect(() => {
        const resizeEve = () => {
            if (window.innerWidth < 768) {
                setChangeUi(true);
            } else {
                setChangeUi(false);
            }
        };
        window.addEventListener("resize", resizeEve);
        resizeEve();
        return () => window.removeEventListener();
    }, []);
    return (
        <div class="fullwidth px-2">
            <div class="separator w-5/6">
                <h2
                    className="mt-12 text-4xl text-center font-medium"
                    style={{ color: "#3f0f1e" }}
                >
                    Our Journey
                </h2>

                <div className="flex justify-center items-center w-full mt-4">
                    <div className="h-1 w-16 bg-primary-brown"></div>
                </div>
                {!changeUi ? (
                    <ul className="progress-tracker progress-tracker--text">
                        <li className="progress-step is-complete">
                            <div className="progress-marker"></div>
                            <div className="progress-text progress-text--dotted text-lg progress-text--dotted-1">
                                <h4 className="progress-title font-sans text-sm md:text-xl font-medium">
                                    1991
                                </h4>
                                <h4 className="progress-title font-sans text-sm md:text-2xl font-semibold">
                                    Start
                                </h4>
                            </div>
                        </li>

                        <li class="progress-step is-complete">
                            <div class="progress-marker"></div>
                            <div class="progress-text progress-text--dotted progress-text--dotted-3">
                                <h4 className="progress-title font-sans text-sm md:text-xl font-medium">
                                    1996
                                </h4>
                                <h4 className="progress-title font-sans text-sm md:text-2xl font-semibold">
                                    Expansion
                                </h4>
                            </div>
                        </li>

                        <li
                            class="progress-step is-complete"
                            aria-current="step"
                        >
                            <div class="progress-marker"></div>
                            <div class="progress-text progress-text--dotted progress-text--dotted-6">
                                <h4 className="progress-title font-sans text-sm md:text-xl font-medium">
                                    2013
                                </h4>
                                <h4 className="progress-title font-sans text-sm md:text-2xl font-semibold">
                                    Fully Automated
                                </h4>
                            </div>
                        </li>

                        <li
                            class="progress-step is-completee"
                            aria-current="step"
                        >
                            <div class="progress-marker"></div>
                            <div class="progress-text progress-text--dotted progress-text--dotted-1">
                                <h4 className="progress-title font-sans text-sm md:text-xl font-medium">
                                    2016
                                </h4>
                                <h4 className="progress-title font-sans text-sm md:text-2xl font-semibold">
                                    Renovations
                                </h4>
                            </div>
                        </li>

                        <li
                            class="progress-step is-complete"
                            aria-current="step"
                        >
                            <div class="progress-marker"></div>
                            <div class="progress-text progress-text--dotted progress-text--dotted-3">
                                <h4 className="progress-title font-sans text-sm md:text-xl font-medium">
                                    2019
                                </h4>
                                <h4 className="progress-title font-sans text-sm md:text-2xl font-semibold">
                                    CBAHI certified
                                </h4>
                            </div>
                        </li>

                        <li
                            class="progress-step is-complete"
                            aria-current="step"
                        >
                            <div class="progress-marker"></div>
                            <div class="progress-text progress-text--dotted progress-text--dotted-6">
                                <h4 className="progress-title font-sans text-sm md:text-xl font-medium">
                                    2020
                                </h4>

                                <h4 className="progress-title font-sans text-sm md:text-2xl font-semibold">
                                    At start of pandemic, Top doctors with
                                    highest qualifications were appointed with
                                    the latest equipment
                                </h4>
                            </div>
                        </li>
                    </ul>
                ) : (
                    <ul class="progress-tracker progress-tracker--vertical">
                        <li class="progress-step is-complete">
                            <div class="progress-marker"></div>
                            <div class="progress-text">
                                <h4 className="progress-title font-sans text-sm md:text-xl font-medium">
                                    1996
                                </h4>
                                <h4 className="progress-title font-sans text-sm md:text-2xl font-semibold">
                                    Expansion
                                </h4>
                            </div>
                        </li>

                        <li class="progress-step is-complete">
                            <div class="progress-marker"></div>
                            <div className="progress-text">
                                <h4 className="progress-title font-sans text-sm md:text-xl font-medium">
                                    1991
                                </h4>
                                <h4 className="progress-title font-sans text-sm md:text-2xl font-semibold">
                                    Start
                                </h4>
                            </div>
                        </li>

                        <li class="progress-step is-active" aria-current="step">
                            <div class="progress-marker"></div>
                            <div class="progress-text">
                                <h4 className="progress-title font-sans text-sm md:text-xl font-medium">
                                    2013
                                </h4>
                                <h4 className="progress-title font-sans text-sm md:text-2xl font-semibold">
                                    Fully Automated
                                </h4>
                            </div>
                        </li>

                        <li class="progress-step">
                            <div class="progress-marker"></div>
                            <div class="progress-text">
                                <h4 className="progress-title font-sans text-sm md:text-xl font-medium">
                                    2016
                                </h4>
                                <h4 className="progress-title font-sans text-sm md:text-2xl font-semibold">
                                    Renovations
                                </h4>
                            </div>
                        </li>

                        <li class="progress-step">
                            <div class="progress-marker"></div>
                            <div class="progress-text">
                                <h4 className="progress-title font-sans text-sm md:text-xl font-medium">
                                    2019
                                </h4>
                                <h4 className="progress-title font-sans text-sm md:text-2xl font-semibold">
                                    CBAHI certified
                                </h4>
                            </div>
                        </li>

                        <li class="progress-step">
                            <div class="progress-marker"></div>
                            <div class="progress-text">
                                <h4 className="progress-title font-sans text-sm md:text-xl font-medium">
                                    2020
                                </h4>

                                <h4 className="progress-title font-sans text-sm md:text-2xl font-semibold">
                                    At start of pandemic, Top doctors with
                                    highest qualifications were appointed with
                                    the latest equipment
                                </h4>
                            </div>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Journey;
