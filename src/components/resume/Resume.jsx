import React, { useContext, useRef, useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';

import './resume.css';
import ResumeContext from '../../context/resumeContext';

const Resume = ({ data, resumeCard }) => {
    const resumeRef = useRef();
    const [localData, setLocalData] = useState({})
    const { formData, showDownload } = useContext(ResumeContext);

    useEffect(() => {
        if (resumeCard) {
            console.log("in data");
            setLocalData(data);
        } else if (formData && Object.keys(formData).length > 0) {
            console.log("in formData");
            setLocalData(formData);
        }
    }, [data, formData]);

    const handleDownload = () => {
        const resumeElement = resumeRef.current;

        if (resumeElement) {
            const pdfOptions = {
                margin: 10,
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            };

            html2pdf().from(resumeElement).set(pdfOptions).save();
        }
    };

    return (
        <>
            <div id="cv" ref={resumeRef}>
                <section id="profile" className="bg-black d-flex flex-column pt-3">
                    <header className="d-flex align-items-center ms-5 me-5 justify-content-center border-bottom">
                        <img
                            src={localData.img}
                            alt="profile"
                            style={{ maxWidth: '100%', maxHeight: '200px' }}
                        />
                        <div className="pe-1">
                            <h1 className="text-white m-0 p-0">{localData.firstName}</h1>
                            <h1 className="m-0 pe-5">{localData.lastName}</h1>
                            <h6 className="text-white me-2 pe-2">FULLSTACK PROGRRAMER</h6>
                        </div>
                        <div id="contact" className="text-white border-start col-5 ms-0">
                            <div className="details d-flex  border-bottom">
                                <ul className="list-unstyled me-1">
                                    <li>Phone:</li>
                                    <li>Area:</li>
                                    <li>Email:</li>
                                </ul>
                                <ul className="list-unstyled">
                                    <li>{localData.phone}</li>
                                    <li>{localData.address}</li>
                                    <li>{localData.email}</li>
                                </ul>
                            </div>
                            <article className="mt-3">
                                <h2 className='text-center'>ABOUT ME</h2>
                                <p>{localData.aboutMe}</p>
                            </article>
                        </div>
                    </header>
                    <footer className="d-flex flex-column text-white mt-4 justify-content-center align-items-center">
                        <div className="social-links mb-3 d-flex flex-wrap justify-content-center">
                            <figure className="col-6 mb-2 text-center"><i className="fa fa-skype me-2"></i>/PSDFreebies</figure>
                            <figure className="col-6 mb-2 text-center"><i className="fa fa-twitter me-2"></i>/PSDFreebies</figure>
                            <figure className="col-6 mb-2 text-center"><i className="fa fa-facebook me-2"></i>/PSDFreebies</figure>
                            <figure className="col-6 mb-2 text-center"><i className="fa fa-linkedin me-2"></i>/PSDFreebies</figure>
                            <figure className="col-6 mb-2 text-center"><i className="fa fa-pinterest me-2"></i>/PSDFreebies</figure>
                        </div>
                    </footer>
                </section>

                <section id="experience" className="pt-1 pb-5">
                    <h2 className="mb-2 ms-4 mt-3">EXPERIENCE</h2>
                    {localData.workExperience1 && localData.workExperience1[0] && (

                        <div className="d-flex justify-content-around">
                            <header>
                                <h4 className="text-end mb-0">{localData.workExperience1[0]?.companyName}</h4>
                                <h4 className="text-end mt-0 mb-0">{localData.workExperience1[0]?.role}</h4>
                                <h6 className="text-end text-secondary mt-0">{localData.workExperience1[0]?.timeFrame}</h6>
                            </header>
                            <article className="col-7">
                                <p className="text-secondary">{localData.workExperience1[0]?.description}</p>
                            </article>
                        </div>
                    )}
                    {localData.workExperience2 && localData.workExperience2[0] && (

                        <div className="d-flex justify-content-around">
                            <header>
                                <h4 className="text-end mb-0">{localData.workExperience2[0]?.companyName}</h4>
                                <h4 className="text-end mt-0 mb-0">{localData.workExperience2[0]?.role}</h4>
                                <h6 className="text-end text-secondary mt-0">{localData.workExperience2[0]?.timeFrame}</h6>
                            </header>
                            <article className="col-7">
                                <p className="text-secondary">{localData.workExperience2[0]?.description}</p>
                            </article>
                        </div>
                    )}
                </section>

                <section id="education" style={{ background: "#E4E2E3" }} className="pt-1 pb-5">
                    <h2 className="mb-4 ms-4 mt-3">EDUCATION</h2>
                    {localData.education1 && localData.education1[0] && (

                        <div className="d-flex justify-content-around">
                            <header>
                                <h4 className="text-end mb-0">{localData.education1[0]?.school}</h4>
                                <h4 className="text-end mt-0 mb-0">{localData.education1[0]?.course}</h4>
                                <h6 className="text-end text-secondary mt-0">{localData.education1[0]?.timeFrame}</h6>
                            </header>
                            <article className="col-9">
                                <p className="text-secondary">{localData.education1[0]?.description}</p>
                            </article>
                        </div>
                    )}
                    {localData.education2 && localData.education2[0] && (

                        <div className="d-flex justify-content-around">
                            <header>
                                <h4 className="text-end mb-0">{localData.education2[0]?.school}</h4>
                                <h4 className="text-end mt-0 mb-0">{localData.education2[0]?.course}</h4>
                                <h6 className="text-end text-secondary mt-0">{localData.education2[0]?.timeFrame}</h6>
                            </header>
                            <article className="col-9">
                                <p className="text-secondary">{localData.education2[0]?.description}</p>
                            </article>
                        </div>
                    )}
                </section>
            </div>
            {showDownload && (
                <div className='d-flex justify-content-center'>
                    <button onClick={handleDownload} className='text-center'>Download as PDF</button>
                </div>
            )}
        </>
    );
}

export default Resume;
