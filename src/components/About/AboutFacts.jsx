import React from "react";
import "./About.css";
// style={{ height: "40vh" }}
const Facts = () => {
    return (
        <div  className="w-full relative">
            <img
                className="h-full w-full bg-cover bg-center"
                style={{ objectFit: "cover" }}
                src="/assets/about/globe.jpg"
                alt="prod1"
            />
            <div className="w-full h-full main-dark-bg bg-black opacity-30"></div>
            <div className="main-text-fact w-full bg-transparent text-grey-300">
                <h1 className="text-white text-center font-semibold text-lg md:text-2xl bg-transparent mt-20">
                    Serving the World <br />
                    <i>since 1985</i>
                </h1>

                <div className="grid grid-cols-2 gap-4 md:gap-4 md:grid-cols-4 my-2 md:my-4">
                    <div className="text-lg">
                        <h2 className="text-center text-blue-700 font-bold text-xl md:text-5xl">
                            912+
                        </h2>
                        <h3 className="text-white text-center font-semibold text-sm md:text-lg">
                            Dental Tourism Clients
                        </h3>
                    </div>

                    <div className="text-lg">
                        <h2 className="text-center text-blue-700 font-bold text-xl md:text-5xl">
                            20+
                        </h2>
                        <h3 className="text-white text-center font-semibold text-sm md:text-lg">
                            International Branches
                        </h3>
                    </div>

                    <div className="text-lg">
                        <h2 className="text-center text-blue-700 font-bold text-xl md:text-5xl">
                            912+
                        </h2>
                        <h3 className="text-white text-center font-semibold text-sm md:text-lg">
                            Dental Tourism Clients
                        </h3>
                    </div>

                    <div className="text-lg">
                        <h2 className="text-center text-blue-700 font-bold text-xl md:text-5xl">
                            20+
                        </h2>
                        <h3 className="text-white text-center font-semibold text-sm md:text-lg">
                            International Branches
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facts;
