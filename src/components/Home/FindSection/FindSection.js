import React from 'react'
import './findsection.css';

function FindSection() {
    const findApi = [
        {
            mainHead:"Find a doctor",
            headTwo:"140+ doctors on panel",
            detailPara:"We are dedicated to provide high quality, evidence-based and safe healthcare.",
            buttonText:"See Doctors",
            linkTo:"/doctor",
            boxClass:"findBox"
        },
        {
            mainHead:"Find Ailment",
            headTwo:"Symptoms & Treatment",
            detailPara:"Expansion and Development of Healthcare services provided by Hospital",
            buttonText:"See Ailment",
            linkTo:"/departments",
            boxClass:"findBox findBox2"
        },
        {
            mainHead:"Talk to Expert",
            headTwo:"Get assistance on call",
            detailPara:"24 hours service through the Emergency Department also provides rehabilitation care",
            buttonText:"Get Help",
            linkTo:"/contact",
            boxClass:"findBox"
        }
    ];
    return (
        <div className='find-section'>
            <div className='findContainer'>
                {
                    findApi.map((val,index)=>{
                        return (
                            <div className={val.boxClass}>
                                <h1 className='findMainHead'>{val.mainHead}</h1>
                                <h3 className='findHeadTwo'>{val.headTwo}</h3>
                                <p className='findPara'>{val.detailPara}</p>
                                <div className='findButton'>
                                    <a href={val.linkTo} className='findBtnText'>{val.buttonText}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FindSection
