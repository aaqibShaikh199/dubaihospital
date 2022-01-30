import React, { useRef, useState } from "react";
import {
    ControlledMenu,
    MenuItem,
    // MenuButton,
    SubMenu,
    Menu,
} from "@szhsin/react-menu";
import { Link, useLocation } from "react-router-dom";
import "@szhsin/react-menu/dist/core.css";
import "@szhsin/react-menu/dist/index.css";
import "./navbarstyle.css";

const TestDrop = () => {
    const ref = useRef(null);
    const [state, setState] = useState();

    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <Link
                exact
                to="/services"
                className={
                    splitLocation[1] === "services"
                        ? "activeLink md:pb-10 border-b-2 border-blue-500 border-opacity-90 navbar-link-hover font-medium bg-transparent"
                        : "navbar-link-hover font-medium bg-transparent"
                }
                onClick={scrollToTop}
                ref={ref}
                onMouseEnter={() => setState("open")}
                // onMouseLeave={() => setState("closed")}
            >
                <h1 className="uppercase mx-2 md:px-1 pt-1 pb-1 md:pb-10 lg:mx-2 border-b-2 border-opacity-0 hover:border-opacity-90 hover:border-blue-500 bg-transparent hoverColor block sm:inline-block navbar-link">
                    Services
                </h1>
            </Link>
            <ControlledMenu
                state={state}
                anchorRef={ref}
                onMouseLeave={() => setState("closed")}
                onClose={() => setState("closed")}
            >
                <MenuItem>
                    <Link to="/departments">Departments</Link>
                    {/* <div className="drop-box">
            <MenuItem>
              <Link to="/clinics/radiologic">Radiology</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/clinics/laboratory">Laboratory</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/clinics/physiotherapist">Physiotherapy</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/department/out-patients-clinics">Out-Patient Clinics</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/department/in-patient">In-Patient</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/departments">OR Department</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/departments">Home Care</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/departments">Operations</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/departments">Delivery</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/departments">ICU</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/clinics/er">ER</Link>
            </MenuItem>
          </div> */}
                </MenuItem>
                <SubMenu label="Clinics">
                    <div className="drop-box">
                        <MenuItem>
                            <Link to="/clinics/general-surgery">
                                General Surgery
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/ear-nose-throat">
                                Ear, Nose & Throat
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/ophthalmology">
                                Ophthalmology
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/urology">Urology</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/neuro">Neuro</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/pshyciatric">Pshyciatric</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/bariatic-surgery">
                                Bariatic Surgery
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/pediatrics">Pediatrics</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/ob-gyne">OB/Gyne</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/physiotherapist">
                                Physiotherapist
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/dentistry">Dentistry</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/radiologic">Radiologic</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/dermatology">Dermatology</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/gastroenterology">
                                Gastroenterology
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/er">ER</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/dietitian">Dietitian</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/cardiologist-and-internal-medicine">
                                Cardiologist and internal medicine
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/orthopedics">Orthopedics</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/clinics/laboratory">Laboratory</Link>
                        </MenuItem>
                        {/* <MenuItem>
              <Link to="/clinics/serology">Serology</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/clinics/special-tests">Special Tests</Link>
            </MenuItem> */}
                    </div>
                </SubMenu>

                <MenuItem>
                    <Link to="/insurance">Insurance</Link>
                </MenuItem>
            </ControlledMenu>
        </div>
    );
};

export default TestDrop;
