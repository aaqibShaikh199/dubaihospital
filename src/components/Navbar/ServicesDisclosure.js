import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Link, useLocation } from "react-router-dom";

function ServicesDisclosure() {
    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button
                        className={
                            splitLocation[1] === "services"
                                ? "flex justify-between items-center w-full activeLink md:pb-10 border-b-2 border-blue-500 border-opacity-90 navbar-link-hover font-medium bg-transparent"
                                : "flex justify-between items-center w-full navbar-link-hover font-medium bg-transparent"
                        }
                    >
                        <span className="uppercase mx-2 md:px-1 pt-1 pb-1 md:pb-10 lg:mx-2 border-b-2 border-opacity-0 hover:border-opacity-90 hover:border-blue-500 bg-transparent hoverColor block sm:inline-block navbar-link">
                            Services
                        </span>
                        <ChevronUpIcon
                            className={`${
                                !open ? "transform rotate-180" : ""
                            } w-5 h-5 text-purple-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="flex flex-col text-center">
                        <Link
                            exact
                            to="/departments"
                            className="navbar-link-hover font-medium bg-transparent"
                            onClick={scrollToTop}
                        >
                            <h1 className="uppercase mx-2 md:px-1 pt-1 pb-1 md:pb-10 lg:mx-2 border-b-2 border-opacity-0 hover:border-opacity-90 hover:border-blue-500 bg-transparent hoverColor block sm:inline-block navbar-link">
                                Departments
                            </h1>
                        </Link>
                        <Link
                            exact
                            to="/clinics"
                            className="navbar-link-hover font-medium bg-transparent"
                            onClick={scrollToTop}
                        >
                            <h1 className="uppercase mx-2 md:px-1 pt-1 pb-1 md:pb-10 lg:mx-2 border-b-2 border-opacity-0 hover:border-opacity-90 hover:border-blue-500 bg-transparent hoverColor block sm:inline-block navbar-link">
                                Clinics
                            </h1>
                        </Link>
                        <Link
                            exact
                            to="/insurance"
                            className="navbar-link-hover font-medium bg-transparent"
                            onClick={scrollToTop}
                        >
                            <h1 className="uppercase mx-2 md:px-1 pt-1 pb-1 md:pb-10 lg:mx-2 border-b-2 border-opacity-0 hover:border-opacity-90 hover:border-blue-500 bg-transparent hoverColor block sm:inline-block navbar-link">
                                Insurance
                            </h1>
                        </Link>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default ServicesDisclosure;
