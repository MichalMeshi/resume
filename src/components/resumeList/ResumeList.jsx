import React, { useContext, useEffect, useState } from 'react'
import ResumeContext from '../../context/resumeContext'
import Resume from '../resume/Resume';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const ResumeList = () => {
    const navigate = useNavigate();
    const { setFormData, resumes, setShowDownload } = useContext(ResumeContext);

    const handleOpenResume = async (resume) => {
        await setFormData(resume);
        navigate(`/resume`);
        setShowDownload(true);
    };

    return (
        <div>
            <h1 className='text-center'>Resumes List </h1>
            <Row>
                {resumes.map((resume, index) => {
                    return (
                        <Col md={4} key={index} className='my-2'>
                            <Card className='d-flex flex-column align-items-center justify-content-center p-1'>
                                <Resume data={resume} resumeCard={true}/>
                                <button onClick={() => handleOpenResume(resume)} className='col-6 text-center my-1'>Open</button>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );

}

export default ResumeList