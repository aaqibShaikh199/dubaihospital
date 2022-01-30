import React from "react";
import "./doctor.css";

const SingleDoctor = ({ imgUrl, name, position }) => {
    return (
        <div  className="depDoctorCard1">
            <div className="depDoctorImg1">
                <img className="doctorImg1" src={imgUrl} alt="anyimg" />
            </div>
            <h2 className="depDoctorName1">{name}</h2>
            <p className="depDoctorAbout1">{position}</p>
        </div>
    );
};

export default SingleDoctor;
