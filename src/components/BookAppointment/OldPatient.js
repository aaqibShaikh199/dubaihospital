import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./bookappointment.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import { withTranslation } from "react-i18next";

// import "react-phone-input-2/lib/style.css";

import "react-phone-input-2/lib/high-res.css";
import "react-datepicker/dist/react-datepicker.css";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

function OldPatient({ t }) {
    const [book, setBook] = useState(false);
    const [loading, setloading] = useState(false);
    const [department, setDepartment] = useState("");
    const [doctor, setDoctor] = useState("");
    const [patient, setPatient] = useState("");
    const [slot, setSlot] = useState("");
    const [selectedDept, setSelectedDept] = useState(null);
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [docArr, setDocArr] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [dateb, setDateB] = useState("");
    const [blankslot, setblankslot] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("male");
    const [seldoc,setseldoc]=useState()
    const [patientId, setPatientId] = useState("");
    const [fileNo, setFileNo] = useState("");

    //console.log(moment(date).format('DD-MM-YYYY').toString())
    useEffect(() => {
        const getroom = async () => {
            setloading(true);
            const res = await axios.get(
                "https://doctorappapi.herokuapp.com/api/doctor"
            );
            setDoctor(res.data);
            const resp = await axios.get(
                `${t("departmentapiurl")}`
            );
            const resps = await axios.get(
                `${t("doctorapiurl")}`
            );
            setseldoc(resps.data)
            
            setDepartment(resp.data);
            const respo = await axios.get(
                "https://doctorappapi.herokuapp.com/api/patient"
            );
            setPatient(respo.data);

            setloading(false);
        };
        getroom();
    }, []);
    const handleChangeDept = (selectedDept) => {
        let tempArr = [];
        setDocArr(null);
        setSelectedDoc(null);
        
        tempArr = seldoc.filter((doc) =>
            doc.department.includes(selectedDept._id)
        );

        setDocArr(tempArr);
        setSelectedDept(selectedDept);
    };
    const handleChangeDoc = (selectedDoc) => {
        setSelectedDoc(selectedDoc);
        setblankslot(null);
    };
    const handleChangeDate = (date) => {
        setDateB(moment(date).format("DD-MM-YYYY").toString());
        const datebook = moment(date).format("DD-MM-YYYY").toString();
        //console.log(datebook);
        const patientdate = patient.filter(
            (item) => item.date === datebook && item.doctor === selectedDoc._id
        );
        //console.log(patientdate);
        const patientslotbooked = patientdate.map((value) => value.slot);
        const docSlot = selectedDoc.slots;

        const availdocSlot = selectedDoc.availslot;
        const availdocSlotu = availdocSlot.filter((e) => e.dateav === datebook);
        if (availdocSlotu.length > 0) {
            //const availdocSlotu=availdocSlot.filter(e=>e.dateav===datebook)
            console.log(availdocSlotu);
            // const availosradocslot=(availdocSlotu.map(e=>e.availSloty))
            const availosradocslot = availdocSlotu[0].availSloty;
            console.log(availosradocslot);
            const res = availosradocslot.filter(
                (item) => !patientslotbooked.includes(item)
            );
            console.log(res);
            setblankslot(res);
        } else {
            const res = docSlot.filter(
                (item) => !patientslotbooked.includes(item)
            );
            setblankslot(res);
        }

        //console.log(dateb)

        setStartDate(date);
    };
    const handleChangeInput = (e) => {
        //console.log(e.target.value)
        //console.log(dateb)
        // console.log(blankslot)

        setSlot(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        //  console.log(selectedDoc.label)
        //console.log(selectedDept.label)
        // console.log(gender)

        if (
            (patientId && fileNo && dateb &&
                selectedDoc.label &&
                selectedDept.label &&
               
                department &&
                doctor 
            )
        ) {
            const patient = {
                date: dateb,
                doctorname: selectedDoc.label,
                departmentname: selectedDept.label,
                gender,
                slot,
               
                message,
          
                department: selectedDept._id,
                doctor: selectedDoc._id,
             
               fileid:fileNo,
               patientid:patientId

            };
            // console.log(patient);
            setBook(true);
            try {
                const res = await axios.post(
                    "https://doctorappapi.herokuapp.com/api/oldpatient",
                    patient
                );
                setBook(false);
                alert(res.data.msg);
                setDateB("");
                setAge("");
                setName("");

                setMessage("");
                setPhone("");
                setSelectedDept("");
                setSelectedDoc("");
                window.location.reload();
            } catch (error) {
                setBook(true);
                alert("You have not entered correct details")
                setBook(false);
            }
        } else {
            alert(`${t("success_message")}`);
        }
    };
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <>
            <div className="book-appointment" >
                <div className="depMainBack">
                    <img
                        className="depMainImg"
                        src="assets/department/depMain.jpg"
                        alt="department Back"
                    />
                    <div className="depMainOverlay" dir={t("directionc")}>
                        <h1 className="depMainText" >{t("bookapt")}</h1>
                    </div>
                </div>
                {book ? (
                    <div className="w-full h-full flex flex-col justify-center items-center py-4">
                        <h1 className="text-2xl m-4 p-4 ">
                           {t("wait_till")}
                        </h1>
                    </div>
                ) : loading ? (
                    <div className="w-full h-full flex flex-col justify-center items-center py-4">
                         <h1 className="appointmentHead">{t("app.16")} {t("app.1")}</h1>
                        <Loading />
                    </div>
                ) : (
                    <div className="bookWrapper">
                        <div className="appointmentText" dir={t("directionc")}>
                            <h1 className="appointmentHead">{t("app.16")} {t("app.1")}</h1>
                            {/* <p className="appointmentPara">
                            {t("app.2")}
                            </p> */}
                        </div>
                        <form
                            className="appointmentForm"
                            onSubmit={handleSubmit}
                            
                        >
                              <div className="flex flex-col md:flex-row gap-4">
                                    <input
                                        className="bookFormItem"
                                        type="text"
                                        name="patientid"
                                        placeholder={t("app.17")}
                                        value={patientId}
                                        onChange={(e) =>
                                            setPatientId(e.target.value)
                                        }
                                        dir={t("directionc")}
                                    />
                                    <input
                                        className="bookFormItem"
                                        type="text"
                                        name="name"
                                        placeholder={t("app.18")}
                                        value={fileNo}
                                        onChange={(e) =>
                                            setFileNo(e.target.value)
                                        }
                                        dir={t("directionc")}
                                    />
                                </div>
                            {/* Services Check box below  */}
                            <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-4 mb-2" dir={t("directionc")}>
                                <div className="mb-2">
                                    <div className="serviceText">
                                        {t("app.9")}:{" "}
                                    </div>
                                    <Select
                                        value={selectedDept}
                                        onChange={handleChangeDept}
                                        options={department}
                                    />
                                </div>
                                {selectedDept && docArr && (
                                    <div className="mb-2">
                                        <div className="serviceText">
                                            {t("app.10")}:{" "}
                                        </div>
                                        <Select
                                            value={selectedDoc}
                                            onChange={handleChangeDoc}
                                            options={docArr}
                                        />
                                    </div>
                                )}
                                {selectedDept && docArr && selectedDoc && (
                                    <div className="mb-2">
                                        <div className="serviceText mt-2">
                                            {t("app.11")} :{" "}
                                        </div>
                                        <DatePicker
                                            className="py-2 px-4 text-center mb-4 border-2 rounded-sm"
                                            selected={startDate}
                                            onChange={handleChangeDate}
                                            minDate={moment().toDate()}
                                        />
                                    </div>
                                )}
                                {selectedDept &&
                                    docArr &&
                                    selectedDoc &&
                                    dateb &&
                                    blankslot && (
                                        <div className="mb-2">
                                            <div className="serviceText mt-2">
                                                {t("app.12")} :{" "}
                                            </div>
                                            <select
                                                className="py-2 px-4 text-center border-2 rounded-sm"
                                                name="slot"
                                                value={slot}
                                                onChange={handleChangeInput}
                                            >
                                                <option value="">
                                                    {blankslot.length === 0
                                                        ? "--No Slot--"
                                                        : "--Choose Slot--"}
                                                </option>
                                                {blankslot.map((slot) => (
                                                    <option
                                                        value={slot}
                                                        key={slot}
                                                    >
                                                        {slot}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                            </div>

                            <textarea
                            dir={t("directionc")}
                                className="bookFormItem"
                                name="message"
                                rows={5}
                                resize="none"
                                placeholder={t("app.13")}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <div className="bookFormBtn md:px-72">
                                <input
                                    type="submit"
                                    className="bookFormButton "
                                    value={t("app.14")}
                                    dir={t("directionc")}
                                />
                                {/* <Link
                                    to="/appointment"
                                    className="bookFormButton text-center"
                                >
                                    Find Doctor
                                </Link> */}
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}

export default withTranslation()(OldPatient);