import React from "react";

const DisplayDoctor = ({selected1}) => {
  return (
    <div>
      <div className="depDoctors1">
        <div className="depMain1">
          <h1 className="depMainHead1">{selected1.name} Clinic Doctors</h1>
          <div className="depLine1"></div>
        </div>
        <div className="depDoctorWrapper1">
          <div className="depDoctorCard1">
            <div className="depDoctorImg1">
              <img
                className="doctorImg1"
                src="/assets/department/doctor1.jpg"
                alt="anyimg"
              />
            </div>
            <h2 className="depDoctorName1">David Paulson</h2>
            <p className="depDoctorAbout1">Head Of Department</p>
            <p className="depDoctorMob1"> +00 0000 0000 00</p>
            <p className="depDoctorMail1">roberto@medwise.com</p>
            <div className="depBtnWrapper1">
              <a className="depDoctorBtn1" href="/departments">
                View Profile
              </a>
            </div>
          </div>

          <div className="depDoctorCard1">
            <div className="depDoctorImg1">
              <img
                className="doctorImg1"
                src="/assets/department/doctor2.jpg"
                alt="anyimg"
              />
            </div>
            <h2 className="depDoctorName1">Merri Hoffman</h2>
            <p className="depDoctorAbout1">Head Of Department</p>
            <p className="depDoctorMob1"> +00 0000 0000 00</p>
            <p className="depDoctorMail1">roberto@medwise.com</p>
            <div className="depBtnWrapper1">
              <a className="depDoctorBtn1" href="/departments">
                View Profile
              </a>
            </div>
          </div>

          <div className="depDoctorCard1">
            <div className="depDoctorImg1">
              <img
                className="doctorImg1"
                src="/assets/department/doctor1.jpg"
                alt="anyimg"
              />
            </div>
            <h2 className="depDoctorName1">Kathy Cruse</h2>
            <p className="depDoctorAbout1">Head Of Department</p>
            <p className="depDoctorMob1"> +00 0000 0000 00</p>
            <p className="depDoctorMail1">roberto@medwise.com</p>
            <div className="depBtnWrapper1">
              <a className="depDoctorBtn1" href="/departments">
                View Profile
              </a>
            </div>
          </div>

          <div className="depDoctorCard1">
            <div className="depDoctorImg1">
              <img
                className="doctorImg1"
                src="/assets/department/doctor2.jpg"
                alt="anyimg"
              />
            </div>
            <h2 className="depDoctorName1">Floyd Birdsong</h2>
            <p className="depDoctorAbout1">Head Of Department</p>
            <p className="depDoctorMob1"> +00 0000 0000 00</p>
            <p className="depDoctorMail1">roberto@medwise.com</p>
            <div className="depBtnWrapper1">
              <a className="depDoctorBtn1" href="/departments">
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayDoctor;
