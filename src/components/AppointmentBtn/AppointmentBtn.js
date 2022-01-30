import React from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

const AppointmentBtn = ({ t }) => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <Link
            onClick={scrollToTop}
            to="/appointment"
            style={{ background: "#588325" }}
            className="fixed top-72 font-semibold left-2 z-1000 shadow text-white rounded-xl py-3 px-5 uppercase font-light hover:bg-green-600 text-sm md:text-base"
        >
            {/* <Link className="w-full h-full flex justify-center items-center" onClick={scrollToTop} to="/appointment">
        <img
          className="w-5/6 h-5/6"
          src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
          alt="apt-logo"
        />
      </Link> */}
            <div>{t("book_btn_fixed1")}</div>
            <div>{t("book_btn_fixed2")}</div>
            {/* <Link
                to="/appointment"
                onClick={scrollToTop}
                style={{ background: "#588325" }}
                className="text-white rounded-xl py-3 px-5 uppercase font-light hover:bg-green-600 text-sm md:text-base"
            >
                <div>Book</div>
                <div>Now</div>
            </Link> */}
        </Link>
    );
};

export default withTranslation()(AppointmentBtn);
