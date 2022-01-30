import React from 'react'
import './departments.css';

function SpecialTests() {
    return (
        <div className='departments'>
            <div className='depMainBack'>
                <img className='depMainImg' src="/assets/department/depMain.jpg" alt="department Back" />
                <div className='depMainOverlay'>
                    <h1 className='depMainText'>Special Tests</h1>
                </div>
            </div>

            <div className='depDetail'>
                <div className='depDetailContainer'>
                    <div className='depTextHead'>
                        <h1 className='depDetailTitle'>Special Tests Department</h1>
                        <div className='depDetailAbout'>The department of a hospital responsible for the provision of medical and surgical care to patients arriving at the hospital in need of immediate care..</div>
                        <p className='depDetailPara'>If you have a health problem with your head or neck, your doctor might recommend that you see an otolaryngologist. That's someone who treats issues in your ears, nose, or throat as well as related areas in your head and neck.</p>
                    </div>
                    <div className='depImgWrapper'>
                        <img className="depDetailImg" src="/assets/images/earnose.jpg" alt="earnose" />
                    </div>                    
                </div>
            </div>

            <div className='treatmentDetails'>
                <div className='depMain'>
                    <h1 className='depMainHead'>Treatments Offered</h1>
                    <p className='depMainPara'>There live the blind texts separated they right at the coast of the Semantics.</p>
                    <div className='depLine'></div>
                </div>

                <div className='treatmentWrapper'>
                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Hormones</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Tumor Virology </h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/blood-bank.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Markers </h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Virology</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/blood-bank.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Special Serology </h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="/assets/department/surgery.png" alt="anyimg" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Microbiology</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='depDoctors'>
                <div className='depMain'>
                    <h1 className='depMainHead'>Department Doctors</h1>
                    <p className='depMainPara'>There live the blind texts separated they right at the coast of the Semantics.</p>
                    <div className='depLine'></div>
                </div>
                <div className='depDoctorWrapper'>
                    <div className='depDoctorCard'>
                        <div className='depDoctorImg'><img className='doctorImg' src="/assets/department/doctor1.jpg" alt="anyimg" /></div>
                        <h2 className='depDoctorName'>David Paulson</h2>
                        <p className='depDoctorAbout'>Head Of Department</p>
                        <p className='depDoctorMob'> +00 0000 0000 00</p>
                        <p className='depDoctorMail'>roberto@medwise.com</p>
                        <div className='depBtnWrapper'><a className='depDoctorBtn' href="/departments">View Profile</a></div>
                    </div>


                    <div className='depDoctorCard'>
                    <div className='depDoctorImg'><img className='doctorImg' src="/assets/department/doctor2.jpg" alt="anyimg" /></div>
                        <h2 className='depDoctorName'>Merri Hoffman</h2>
                        <p className='depDoctorAbout'>Head Of Department</p>
                        <p className='depDoctorMob'> +00 0000 0000 00</p>
                        <p className='depDoctorMail'>roberto@medwise.com</p>
                        <div className='depBtnWrapper'><a className='depDoctorBtn' href="/departments">View Profile</a></div>
                    </div>

                    <div className='depDoctorCard'>
                    <div className='depDoctorImg'><img className='doctorImg' src="/assets/department/doctor1.jpg" alt="anyimg" /></div>
                        <h2 className='depDoctorName'>Kathy Cruse</h2>
                        <p className='depDoctorAbout'>Head Of Department</p>
                        <p className='depDoctorMob'> +00 0000 0000 00</p>
                        <p className='depDoctorMail'>roberto@medwise.com</p>
                        <div className='depBtnWrapper'><a className='depDoctorBtn' href="/departments">View Profile</a></div>
                    </div>

                    <div className='depDoctorCard'>
                    <div className='depDoctorImg'><img className='doctorImg' src="/assets/department/doctor2.jpg" alt="anyimg" /></div>
                        <h2 className='depDoctorName'>Floyd Birdsong</h2>
                        <p className='depDoctorAbout'>Head Of Department</p>
                        <p className='depDoctorMob'> +00 0000 0000 00</p>
                        <p className='depDoctorMail'>roberto@medwise.com</p>
                        <div className='depBtnWrapper'><a className='depDoctorBtn' href="/departments">View Profile</a></div>
                    </div>

                    
                </div>
            </div>

            {/* <div className='depBanner'>
                <img class="depBannerImg" src="/assets/department/depLastBack.jpg" alt="anyimg"/>
                <div className='depBannerOverlay'>
                    <h3 className='depBannerText'>Reliable & Trusted</h3>
                    <h1 className='depBannerHead'>Get the Best Ortho Treatment</h1>
                    <p className='depBannerPara'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='depBannerButton'><a className='depBannerBtn' href="/contact">Contact Us Now</a></div>
                </div>
            </div> */}
        </div>
    )
}

export default SpecialTests
