import React, { useContext, useEffect, useState } from 'react'
import ResumeContext from '../../context/resumeContext'
import Resume from '../resume/Resume';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ResumeList = () => {
    const navigate = useNavigate();
    const { getDataByUserId, setFormData } = useContext(ResumeContext);
    const [resumes, setResumes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDataByUserId();
                setResumes(data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <h1>Resume List</h1>
            <Row>
                {resumes.map((resume,index) => {
                    return <Col md={4} key={index} size={{ height:"200px" }}><Card style={{ size: "10em",}}>
                        {/* <button onClick={()=>navigate(`/resume/${index}`)}>open</button> */}
                        <Resume data={resume}/>
                    </Card>
                    </Col>
                })}
            </Row>
        </div>
    )
}

export default ResumeList