import "./App.css";
import React, { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctor from "./components/Doctor/Doctor";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import SupportService from "./components/Services/SopportService/SupportService";

// departments and its routes
import AllClinics from "./components/Services/AllClinics/AllClinics";
import Ophthalmology from "./components/Departments/Ophthalmology";
import BariaticSurgery from "./components/Departments/BariaticSurgery";
import Pediatrics from "./components/Departments/Pediatrics";
import Dentistry from "./components/Departments/Dentistry";
import Urology from "./components/Departments/Urology";
import Dermatology from "./components/Departments/Dermatology";
import TopBar from "./components/TopBar/TopBar";
import Radiology from "./components/Departments/Radiology";
import EarNose from "./components/Departments/EarNose";
import Gastroenterology from "./components/Departments/Gastroenterology ";
import Neuro from "./components/Departments/Neuro";
import Pshyciatric from "./components/Departments/Pshyciatric";
import Physiotherapist from "./components/Departments/Physiotherapist";
import GenSurgery from "./components/Departments/GenSurgury";
import OBGyne from "./components/Departments/OBGyne";
// departments and its routes finished
// import BlogList from "./components/BlogList/BlogList";
import Services from "./pages/Services";
import Media from "./pages/Media";
import BookAppointment from "./components/BookAppointment/BookAppointment";
// import ER from "./components/Departments/ER";
import Dietitian from "./components/Departments/Dietitian";
import Cardiologist from "./components/Departments/Cardiologist";
import InternalMeds from "./components/Departments/InternalMeds";
import Orthopedics from "./components/Departments/Orthopedics";
import Laboratory from "./components/Departments/Laboratory";
import SpecialTests from "./components/Departments/SpecialTests";
import Serology from "./components/Departments/Serology";
import Insurance from "./components/Services/Insurance/Insurance";
import AppointmentBtn from "./components/AppointmentBtn/AppointmentBtn";
import OldPatient from "./components/BookAppointment/OldPatient";
import NewPatient from "./components/BookAppointment/NewPatient";

//Dr profile
import Profile from "./components/DoctorProfile/Profile";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import UserDatabase from "./pages/UserDatabase";
import Test from "./pages/Test";

// visibility sensor for social icons
import VisibilitySensor from "react-visibility-sensor";
import { useTranslation } from "react-i18next";

function App({ t }) {
    const { i18n } = useTranslation();
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const lang = localStorage.getItem("language");
        if (lang) {
            i18n.changeLanguage(lang);
        } else {
            localStorage.setItem("language", "ar");
            i18n.changeLanguage("ar");
        }
    }, []);

    function onChange(isVisible) {
        if (isVisible) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }
    // const [showApt, setShowApt] = useState(false);
    // useEffect(() => {
    //     const resizeEve = () => {
    //         if (window.innerWidth < 768) {
    //             setShowApt(false);
    //         } else {
    //             setShowApt(true);
    //         }
    //     };
    //     window.addEventListener("resize", resizeEve);
    //     resizeEve();
    //     return () => window.removeEventListener();
    // }, []);
    return (
        <div className="relative">
            <TopBar />
            <AppointmentBtn />
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/media" element={<Media />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/doctor" element={<Doctor />} />
                <Route path="/departments" element={<SupportService />} />
                <Route path="/insurance" element={<Insurance />} />

                <Route path="/clinics" element={<AllClinics />} />
                <Route path="/patientfilter" element={<UserDatabase />} />
                <Route path="/patients" element={<Test />} />
                <Route
                    path="/clinics/ophthalmology"
                    element={<Ophthalmology />}
                />
                <Route path="/clinics/urology" element={<Urology />} />
                <Route
                    path="/clinics/bariatic-surgery"
                    element={<BariaticSurgery />}
                />
                <Route path="/clinics/pediatrics" element={<Pediatrics />} />
                <Route path="/clinics/dentistry" element={<Dentistry />} />
                <Route path="/clinics/dermatology" element={<Dermatology />} />
                <Route path="/clinics/ear-nose-throat" element={<EarNose />} />
                {/* <Route path="/clinics/er" element={<ER />} /> */}
                <Route path="/clinics/dietitian" element={<Dietitian />} />
                <Route
                    path="/clinics/cardiologist"
                    element={<Cardiologist />}
                />
                <Route
                    path="/clinics/internal-medicine"
                    element={<InternalMeds />}
                />
                <Route path="/clinics/orthopedics" element={<Orthopedics />} />
                <Route path="/clinics/laboratory" element={<Laboratory />} />
                <Route
                    path="/clinics/special-tests"
                    element={<SpecialTests />}
                />
                <Route path="/clinics/serology" element={<Serology />} />
                <Route path="/clinics/radiologic" element={<Radiology />} />
                <Route
                    path="/clinics/gastroenterology"
                    element={<Gastroenterology />}
                />
                <Route path="/clinics/neuro" element={<Neuro />} />
                <Route path="/clinics/pshyciatric" element={<Pshyciatric />} />
                <Route
                    path="/clinics/physiotherapist"
                    element={<Physiotherapist />}
                />
                <Route
                    path="/clinics/general-surgery"
                    element={<GenSurgery />}
                />
                <Route path="/clinics/ob-gyne" element={<OBGyne />} />
                {/* <Route path="/blog" element={<BlogList />} /> */}
                <Route path="/appointment" element={<BookAppointment />} />
                <Route path="/oldpatient" element={<OldPatient />} />
                <Route path="/newpatient" element={<NewPatient />} />
                <Route path="/doctor/:doc" element={<Profile />} />
            </Routes>
            <VisibilitySensor onChange={onChange} partialVisibility={true}>
                <Footer />
            </VisibilitySensor>
            {!visible && <SocialIcons />}
            <Whatsapp />
        </div>
    );
}

export default withTranslation()(App);
