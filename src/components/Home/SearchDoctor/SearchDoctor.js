import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
// import CustomSelect from './CustomSelect'
import "./searchdoctor.css";
import DisplayDoctor from "./DisplayDoctor";

const people = [
    { name: "Select Clinic", unavailable: true },
    { name: "Pediatric", unavailable: false },
    { name: "OBGyna", unavailable: false },
    { name: "Ophthalmology", unavailable: false },
    { name: "Gastroenterology", unavailable: false },
    { name: "Dermatology", unavailable: false },
    {
        name: "Internal Medicine(Chest,Respiratory/Digestive,Cardio vascular)",
        unavailable: false,
    },
    { name: "Dentistry", unavailable: false },
    { name: "Dietitian", unavailable: false },
    { name: "ENT", unavailable: false },
    { name: "Orthopedics", unavailable: false },
    { name: "Surgery", unavailable: false },
    { name: "Urology", unavailable: false },
    { name: "Cardiology", unavailable: false },
    { name: "Neuro", unavailable: false },
    { name: "Phsycstric", unavailable: false },
    { name: "Bariatric Surgery", unavailable: false },
    { name: "Physiotherapy", unavailable: false },
];

const scrollToTop = () => {
    window.scrollTo(0, 0);
};

function SearchDoctor({ t }) {
    // const [selected, setSelected] = useState(people[0]);
    // const [selected1, setSelected1] = useState(people[0]);
    // const [dispDoc, setDispDoc] = useState(false);
    // const handleSelect = (e) => {
    //     e.preventDefault();
    //     if (selected === people[0]) {
    //         alert("Select Clinic to search doctor");
    //         setDispDoc(false);
    //         return;
    //     }
    //     setDispDoc(true);
    //     setSelected1(selected);
    //     console.log(selected);
    // };

    return (
        <>
            <div className="search-doctor">
                <div className="searchDoctorWrapper">
                    <img
                        class="searchDoctorBack"
                        src="/assets/department/whitebg.jpg"
                        alt="hmsearch"
                    />
                    <div className="searchDoctorOverlay">
                        <div dir={t("direction")} className="searchDoctorCol">
                            <h1 className="searchDoctorHead">
                                {t("find_doc.home_find_doc_a")}
                            </h1>
                            <div className="searchDoctorAbout">
                                {t("find_doc.home_find_doc_b")}
                            </div>
                            {/* <p className="searchDoctorPara">
                                {t("find_doc.home_find_doc_c")}
                            </p> */}
                            {/* <div className='searchDoctorButton'>
                            <input className='searchDoctorInput' type="text" placeholder='Find A Doctor' />
                            <a className='searchDoctorBtn' href="/contact">Find Doctor</a>
                        </div> */}

                            {/* Custom select */}

                            <div className="">
                                {/* <div className="searchDoctorButtonCustom w-full md:w-3/4">
                                    <Listbox
                                        value={selected}
                                        onChange={setSelected}
                                    >
                                        <div className="relative mt-1">
                                            <Listbox.Button className="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                                <span className="block truncate">
                                                    {selected.name}
                                                </span>
                                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                    <SelectorIcon
                                                        className="w-5 h-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Listbox.Button>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {people.map(
                                                        (person, personIdx) => (
                                                            <Listbox.Option
                                                                key={personIdx}
                                                                className={({
                                                                    active,
                                                                }) =>
                                                                    `${
                                                                        active
                                                                            ? "text-amber-900 bg-amber-100"
                                                                            : "text-gray-900"
                                                                    }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                                                                }
                                                                value={person}
                                                                disabled={
                                                                    person.unavailable
                                                                }
                                                            >
                                                                {({
                                                                    selected,
                                                                    active,
                                                                }) => (
                                                                    <>
                                                                        <span
                                                                            className={`${
                                                                                selected
                                                                                    ? "font-medium"
                                                                                    : "font-normal"
                                                                            } block truncate`}
                                                                        >
                                                                            {
                                                                                person.name
                                                                            }
                                                                        </span>
                                                                        {selected ? (
                                                                            <span
                                                                                className={`${
                                                                                    active
                                                                                        ? "text-amber-600"
                                                                                        : "text-amber-600"
                                                                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                                                            >
                                                                                <CheckIcon
                                                                                    className="w-5 h-5"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Listbox.Option>
                                                        )
                                                    )}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </Listbox>
                                </div> */}
                                {/* <Link
                                    className="searchDoctorBtnCustom w-full md:w-1/4 text-white"
                                    // onClick={handleSelect}
                                    to="/doctor"
                                >
                                    Find Doctor
                                </Link> */}
                                <Link
                                    dir={t("direction")}
                                    to="/doctor"
                                    onClick={scrollToTop}
                                    className="text-white mt-5 rounded-sm py-3 px-4 uppercase font-light !hover:bg-green-400 text-sm md:text-base "
                                    style={{ backgroundColor: "#588325" }}
                                >
                                    {t("find_doc.home_find_doc_btn")}
                                </Link>
                            </div>

                            {/* custom select */}
                        </div>
                        <div className="searchDoctorCol">
                            <img
                                className="seachDoctorImg"
                                src="/assets/images/finddoc2.png"
                                // src="assets/images/findDoctor.png"
                                alt="hmsearch"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* {dispDoc && <DisplayDoctor selected1={selected1} />} */}
        </>
    );
}

export default withTranslation()(SearchDoctor);
