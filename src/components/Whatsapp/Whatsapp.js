import React from "react";

export default function Whatsapp() {
    return (
        <div className="bg-blue-50">
            <div style={{ zIndex: 1000 }} className="fixed top-96 pl-3 pb-1.5">
                <div className="hidden lg:block">
                    <a
                        href="https://web.whatsapp.com/send?phone=+966553303754"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="w-16 h-16 rounded-full "
                            src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
                            alt="Call_Us1"
                        />
                    </a>
                </div>
                <div className="block lg:hidden">
                    <a
                        href="https://api.whatsapp.com/send?phone=+966553303754"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="w-16 h-16 rounded-full "
                            src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
                            alt="Call_Us2"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
