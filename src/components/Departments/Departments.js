import React from 'react'
import './departments.css';

function Departments() {
    return (
        <div className='departments'>
            <div className='depMainBack'>
                <img className='depMainImg' src="assets/department/depMain.jpg" alt="department Back" />
                <div className='depMainOverlay'>
                    <h1 className='depMainText'>Department Detail</h1>
                </div>
            </div>

            <div className='depDetail'>
                <div className='depDetailContainer'>
                    <div className='depTextHead'>
                        <h1 className='depDetailTitle'>Orthopaedics Department</h1>
                        <div className='depDetailAbout'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        <p className='depDetailPara'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='depImgWrapper'>
                        <img className="depDetailImg" src="/assets/department/depDetailImg.jpg" alt="department details" />
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
                        <div className='treatmentLogo'><img src="assets/department/surgery.png" alt="svdept"/></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Neurology</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="assets/department/surgery.png" alt="svdept" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Plastic Surgery</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="assets/department/blood-bank.png" alt="svdept" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Blood Bank</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="assets/department/surgery.png" alt="svdept" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Vaccination</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="assets/department/blood-bank.png" alt="svdept" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Neurology</h2>
                            <p className='treatmentAbout'>Dunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className='treatmentCard'>
                        <div className='treatmentLogo'><img src="assets/department/surgery.png" alt="svdept" /></div>
                        <div className='treatmentText'>
                            <h2 className='treatmentTitle'>Medicines</h2>
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
                        <div className='depDoctorImg'><img className='doctorImg' src="assets/department/doctor1.jpg" alt="doc" /></div>
                        <h2 className='depDoctorName'>David Paulson</h2>
                        <p className='depDoctorAbout'>Head Of Department</p>
                        <p className='depDoctorMob'> +00 0000 0000 00</p>
                        <p className='depDoctorMail'>roberto@medwise.com</p>
                        <div className='depBtnWrapper'><a className='depDoctorBtn' href="/departments">View Profile</a></div>
                    </div>


                    <div className='depDoctorCard'>
                    <div className='depDoctorImg'><img className='doctorImg' src="assets/department/doctor2.jpg" alt="doc" /></div>
                        <h2 className='depDoctorName'>Merri Hoffman</h2>
                        <p className='depDoctorAbout'>Head Of Department</p>
                        <p className='depDoctorMob'> +00 0000 0000 00</p>
                        <p className='depDoctorMail'>roberto@medwise.com</p>
                        <div className='depBtnWrapper'><a className='depDoctorBtn' href="/departments">View Profile</a></div>
                    </div>

                    <div className='depDoctorCard'>
                    <div className='depDoctorImg'><img className='doctorImg' src="assets/department/doctor1.jpg" alt="doc" /></div>
                        <h2 className='depDoctorName'>Kathy Cruse</h2>
                        <p className='depDoctorAbout'>Head Of Department</p>
                        <p className='depDoctorMob'> +00 0000 0000 00</p>
                        <p className='depDoctorMail'>roberto@medwise.com</p>
                        <div className='depBtnWrapper'><a className='depDoctorBtn' href="/departments">View Profile</a></div>
                    </div>

                    <div className='depDoctorCard'>
                    <div className='depDoctorImg'><img className='doctorImg' src="assets/department/doctor2.jpg" alt="doc" /></div>
                        <h2 className='depDoctorName'>Floyd Birdsong</h2>
                        <p className='depDoctorAbout'>Head Of Department</p>
                        <p className='depDoctorMob'> +00 0000 0000 00</p>
                        <p className='depDoctorMail'>roberto@medwise.com</p>
                        <div className='depBtnWrapper'><a className='depDoctorBtn' href="/departments">View Profile</a></div>
                    </div>

                    
                </div>
            </div>

            <div className='depBanner'>
                <img class="depBannerImg" src="/assets/department/depLastBack.jpg" alt="banner"/>
                <div className='depBannerOverlay'>
                    <h3 className='depBannerText'>Reliable & Trusted</h3>
                    <h1 className='depBannerHead'>Get the Best Ortho Treatment</h1>
                    <p className='depBannerPara'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='depBannerButton'><a className='depBannerBtn' href="/contact">Contact Us Now</a></div>
                </div>
            </div>
        </div>
    )
}

export default Departments
