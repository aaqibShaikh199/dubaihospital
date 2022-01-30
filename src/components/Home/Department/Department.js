import React from "react";
import { Link } from "react-router-dom";
import "./department.css";

function Department() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className="department py-6">
            <div className="depMain">
                <h1 className="depMainHead">Hospital Departments</h1>
                <p className="depMainPara">
                    Patient care and getting CBAHI Reaccreditation with
                    continues improvement and Enhancement in quality level and
                    provided services{" "}
                </p>
                <div className="depLine"></div>
            </div>
            <div className="depContainer">
                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/surgery.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Surgery</h1>
                    <h3 className="depAbout">Operations & surgeries</h3>
                    <p className="depDetailHome">
                        Surgical specialty that focuses on abdominal contents
                        including the esophagus, stomach, small intestine, large
                        intestine, liver, pancreas, gallbladder, appendix and
                        bile ducts, and often the thyroid gland.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/departments"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/neurology.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Neurology</h1>
                    <h3 className="depAbout">Neuro Disorders</h3>
                    <p className="depDetailHome">
                        Neurology is the branch of medicine concerned with the
                        study and treatment of disorders of the nervous system.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/departments"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/derma.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Dermatology</h1>
                    <h3 className="depAbout">Skin Problems</h3>
                    <p className="depDetailHome">
                        Dermatology is the branch of medicine dealing with the
                        skin. It is a speciality with both medical and surgical
                        aspects.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/departments"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/special.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Dispensary</h1>
                    <h3 className="depAbout">Medicine & Pharmacy</h3>
                    <p className="depDetailHome">
                        Timely, accurate diagnosis and treatment of various
                        conditions, helps faster recovery of disease and
                        prevents complications.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/departments"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/labd.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Haematology</h1>
                    <h3 className="depAbout">Research & Lab</h3>
                    <p className="depDetailHome">
                        where tests are carried out on clinical specimens to
                        obtain information about the health of a patient to aid
                        in diagnosis, treatment, and prevention of disease
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/departments"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/bones.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Orthopaedics</h1>
                    <h3 className="depAbout">Bones & Joints</h3>
                    <p className="depDetailHome">
                        The department of a hospital responsible for the
                        provision of medical and surgical care to patients
                        arriving at the hospital in need of immediate care.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/departments"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Department;
