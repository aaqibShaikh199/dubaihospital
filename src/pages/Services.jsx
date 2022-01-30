import React from "react";
import ServiceGrid from "../components/Services/ServiceGrid";

const Services = () => {
    return (
        <div>
            <div
                className="bg-center bg-cover"
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1495653797063-114787b77b23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
                    width: "100%",
                    height: "55vh",
                }}
            >
                <div className="flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
                    <div className="text-center font-semibold text-white text-4xl md:text-7xl">
                        <h1 className="mb-7">Services</h1>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center py-10 px-2 md:px-20">
                <ServiceGrid
                    imgUrl="/assets/images/dept.png"
                    title="Departments"
                    linkUrl="/departments"
                />

                <ServiceGrid
                    imgUrl="/assets/images/clinic.png"
                    title="Clinics"
                    linkUrl="/clinics"
                />

                <ServiceGrid
                    imgUrl="/assets/images/insurance.png"
                    title="Insurance"
                    linkUrl="/insurance"
                />
            </div>
        </div>
    );
};

export default Services;
