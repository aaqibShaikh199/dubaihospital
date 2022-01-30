import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import "./contact.css";
// import swal from "sweetalert";
import axios from "axios";
const Contact = ({ t }) => {
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [mailBody, setmailBody] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setphone] = useState("");

    const handleContactSubmit = (e) => {
        if (name === "" || mailBody === "" || subject === "") {
            alert("fill all fields");
            return;
        }
        e.preventDefault();
        axios
            .post("https://doctorappapi.herokuapp.com/api/postcontactmail", {
                name,
                email,
                subject,
                mailBody,
                phone,
            })
            .catch((err) => console.log(err));
        alert("Message sent successfully.");
        setName("");
        setemail("");
        setmailBody("");
        setSubject("");
    };

    return (
        <div className="" dir={t("directionc")}>
            <div
                className="bg-center bg-cover"
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
                    width: "100%",
                    height: "55vh",
                }}
            >
                <div className="flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
                    <div className="text-center font-semibold text-white text-4xl md:text-7xl">
                        {/* <h1 className="mb-7">{t("contact.title")}</h1> */}
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center items-center">
                <section className="px-6 py-4 mx-auemail text-black rounded-md dark:bg-gray-800 mt-4">
                    <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3">
                        <div
                            style={{ boxShadow: "0 0 10px grey" }}
                            className="flex xl:flex-row flex-col cursor-pointer items-center p-8 px-10 text-black shadow-md border border-gray-100 rounded-md dark:text-gray-800 hover:shadow-2xl hover:bg-green-200"
                        >
                            <div className="w-full mb-3 md:mb-0 md:w-2/5 flex justify-center items-center">
                                <img
                                    className="w-24 h-24"
                                    src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
                                    alt="location-icon"
                                />
                            </div>

                            <div>
                                <a
                                    className="flex flex-col px-2 md:pl-4"
                                    href="https://www.google.com/maps?ll=24.584713,46.592886&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=8710480857477383593"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span
                                        style={{ color: "#3f0f1e" }}
                                        className="mt-2 mb-2 font-medium text-2xl"
                                    >
                                        {t("addr")}
                                    </span>

                                    <span
                                        style={{ color: "#778696" }}
                                        className="mt-2 mb-4 font-normal text-lg"
                                    >
                                        {t("addressfull")}
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div
                            style={{ boxShadow: "0 0 10px grey" }}
                            className="flex xl:flex-row flex-col cursor-pointer items-center p-8 px-10 text-black shadow-md border border-gray-100 rounded-md dark:text-gray-800 hover:shadow-2xl hover:bg-green-200"
                        >
                            <div className="w-full mb-3 md:mb-0 md:w-2/5 flex justify-center items-center">
                                <img
                                    className="w-24 h-24"
                                    src="https://cdn-icons-png.flaticon.com/512/126/126509.png"
                                    alt="call-icon"
                                />
                            </div>

                            <div className="flex flex-col px-2 md:pl-4">
                                <span
                                    style={{ color: "#3f0f1e" }}
                                    className="mt-2 mb-2 font-medium text-2xl"
                                >
                                    {t("getint")}
                                </span>
                                <a href="tel:01143111111">
                                    <span
                                        dir="ltr"
                                        style={{ color: "#778696" }}
                                        className="mt-2 mb-4 font-normal text-lg"
                                    >
                                        {t("contact.phone")} : &#x202b;
                                        011-431-1111 &#x202c;
                                    </span>
                                </a>
                                <a href="mailto:info@alosrah-hospital.com">
                                    <span
                                        style={{ color: "#778696" }}
                                        className="mt-2 mb-4 font-normal text-lg"
                                    >
                                        {t("contact.email")} :
                                        info@alosrah-hospital.com
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div
                            style={{ boxShadow: "0 0 10px grey" }}
                            className="flex flex-col xl:flex-row cursor-pointer items-center p-8 px-10 text-black shadow-md border border-gray-100 rounded-md dark:text-gray-800 hover:shadow-2xl hover:bg-green-200"
                        >
                            <div className="w-full mb-3 md:mb-0 md:w-3/5 flex justify-center items-center">
                                <img
                                    className="w-24 h-24"
                                    src="https://cdn-icons-png.flaticon.com/512/833/833593.png"
                                    alt="mail-icon"
                                />
                            </div>

                            <div className="flex flex-col px-2 md:pl-4">
                                <span
                                    style={{ color: "#3f0f1e" }}
                                    className="mt-2 mb-2 font-medium text-2xl"
                                >
                                    {t("workinghrs")}
                                </span>

                                <a href="/contact">
                                    <span
                                        style={{ color: "#3f0f1e" }}
                                        className="mt-1 mb-1 font-normal text-lg"
                                    >
                                        {t("outpat")}
                                    </span>
                                    <br />
                                    <span
                                        style={{ color: "#778696" }}
                                        className="mb-1 font-normal text-sm"
                                    >
                                        {t("morn")} : 9:00 a.m &#x202b; to
                                        &#x202c; 12:00 p.m,
                                        <br />
                                        {t("even")} : 4:00 p.m &#x202b; to
                                        &#x202c; 9:30 p.m
                                    </span>
                                    <br />
                                    <span
                                        style={{ color: "#3f0f1e" }}
                                        className="mb-1 font-normal text-lg"
                                    >
                                        {t("text-footer")}:
                                    </span>
                                    <br />
                                    <span
                                        style={{ color: "#778696" }}
                                        className="mb-1 font-normal text-sm"
                                    >
                                        {t("hrs")}
                                    </span>
                                    <br />
                                    <span
                                        style={{ color: "#3f0f1e" }}
                                        className="mb-1 font-normal text-lg"
                                    >
                                        {t("inpatfooter")}:
                                    </span>
                                    <br />
                                    <span
                                        style={{ color: "#778696" }}
                                        className="mb-1 font-normal text-sm"
                                    >
                                        {t("stt")} : 7:00 a.m &#x202b; to
                                        &#x202c; 12:00 a.m,
                                        <br />
                                        {t("fr")} : 2:00 p.m &#x202b; to
                                        &#x202c; 12:00 a.m
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2">
                        <div>
                            <div className="my-12 md:mx-10 ">
                                <form onSubmit={handleContactSubmit}>
                                    <div className="-ml-2 pt-2 md:flex">
                                        <div className="w-full mx-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                                                {t("contact.name")}
                                            </label>

                                            <input
                                                className="block w-full px-4 py-2 text-black shadow-md bg-gray-100 border-none rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                value={name}
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder={t(
                                                    "contact.yourname"
                                                )}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="-ml-2 pt-2 md:flex">
                                        <div className="w-full mx-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                                                {t("contact.phone")}
                                            </label>

                                            <input
                                                className="block w-full px-4 py-2 text-black shadow-md bg-gray-100 border-none rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                                onChange={(e) =>
                                                    setphone(e.target.value)
                                                }
                                                value={phone}
                                                placeholder={t("contact.yrph")}
                                                required
                                                id="phone"
                                                type="number"
                                                name="phone"
                                            />
                                        </div>
                                    </div>
                                    <div className="-ml-2 pt-2 md:flex">
                                        <div className="w-full mx-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                                                {t("contact.email")}
                                            </label>

                                            <input
                                                className="block w-full px-4 py-2 text-black shadow-md bg-gray-100 border-none rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                                onChange={(e) =>
                                                    setemail(e.target.value)
                                                }
                                                value={email}
                                                placeholder={t(
                                                    "contact.youremail"
                                                )}
                                                required
                                                id="email"
                                                type="email"
                                                name="email"
                                            />
                                        </div>
                                    </div>

                                    <div className="-ml-2 pt-2 md:flex">
                                        <div className="w-full mx-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                                                {t("contact.sub")}
                                            </label>

                                            <input
                                                className="block w-full px-4 py-2 text-black shadow-md bg-gray-100 border-none rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                                onChange={(e) =>
                                                    setSubject(e.target.value)
                                                }
                                                value={subject}
                                                placeholder={t("contact.sub")}
                                                required
                                                id="subject"
                                                type="text"
                                                name="subject"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full mt-4">
                                        <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-800">
                                            {t("contact.msg")}
                                        </label>

                                        <textarea
                                            onChange={(e) =>
                                                setmailBody(e.target.value)
                                            }
                                            value={mailBody}
                                            name="mailBody"
                                            id="mailBody"
                                            placeholder={t("contact.yurmsg")}
                                            required
                                            className="block w-full h-40 px-4 py-2 text-black shadow-md bg-gray-100 border-none rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                        ></textarea>
                                    </div>

                                    <div className="flex justify-center mt-6">
                                        <button
                                            type="submit"
                                            className="px-9 py-4 contact-btn font-semibold text-white transform rounded focus:outline-none focus:bg-gray-700"
                                        >
                                            {t("contact.submit")}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* .......MAP......... */}
                        <div className="md:p-5 p-0 mt-24 mb-24">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.147329415484!2d46.59436991499743!3d24.584111184185087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f198a70eb0c97%3A0x78e1d83094c785a9!2sAl%20Osrah%20International%20Hospital!5e0!3m2!1sen!2sin!4v1639135132397!5m2!1sen!2sin"
                                title="office address"
                                style={{
                                    border: "0",
                                    width: "100%",
                                    height: "75vh",
                                }}
                                allowfullscreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                        {/* .......... */}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default withTranslation()(Contact);
