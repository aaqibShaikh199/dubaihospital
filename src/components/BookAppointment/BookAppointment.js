import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./bookappointment.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// import "react-phone-input-2/lib/style.css";

import "react-phone-input-2/lib/high-res.css";
import "react-datepicker/dist/react-datepicker.css";
import Loading from "../Loading/Loading";


function BookAppointment({ t }) {
    
    const [oldPatient, setOldPatient] = useState(false);


    //console.log(moment(date).format('DD-MM-YYYY').toString())
  
   


  

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <>
            <div className="book-appointment">
                <div className="depMainBack">
                    <img
                        className="depMainImg"
                        src="assets/department/depMain.jpg"
                        alt="department Back"
                    />
                    <div className="depMainOverlay" dir={t("directionc")}>
                        <h1 className="depMainText">{t("bookapt")}</h1>
                    </div>
                </div>
                
                    <div className="bookWrapper">
                        <div className="appointmentText" dir={t("directionc")}>
                            <h1 className="appointmentHead">{t("app.1")}</h1>
                            {/* <p className="appointmentPara">
                            {t("app.2")}
                            </p> */}
                        </div>
                        <div className="w-full md:w-2/3 flex justify-center gap-3 md:gap-9 mx-2">
                        
                            <button
                               
                                className={
                                    oldPatient
                                        ? "bookFormButton"
                                        : "bookFormButton active"
                                }
                                dir={t("directionc")}
                            >
                              <Link
                     
                     to="/newpatient"
                     onClick={scrollToTop}
                 >  {t("app.15")}</Link>
                            </button>
                            
                            <button
                                
                                className={
                                    !oldPatient
                                        ? "bookFormButton"
                                        : "bookFormButton active"
                                }
                                dir={t("directionc")}
                            >
                                <Link
                     
                     to="/oldpatient"
                     onClick={scrollToTop}
                 > 
                                {t("app.16")}</Link>
                            </button>
                        </div>
                      
                    </div>
               
            </div>
        </>
    );
}

export default withTranslation()(BookAppointment);