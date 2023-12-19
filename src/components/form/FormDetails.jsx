import React, { useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './formDetails.css';
import { Link } from 'react-router-dom';
import ResumeContext from '../../context/resumeContext';

const FormDetails = () => {
    const { formData, handleChange, handleSubmit, updateNestedField } = useContext(ResumeContext);

    return (
        <div>
            <Form>
                {/* <Form.Group controlId="formImg">
                    <Form.Label>Image </Form.Label>
                    <Form.Control
                        type="file"
                        placeholder=""
                        name="img"
                        value=""
                        onChange={handleChange}
                    />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                    <Form.Control type="text" placeholder="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" name="address" value={formData.address} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Work experience</Form.Label>
                    <Container>
                        <Row>
                            <h5>Work experience 1:</h5>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="companyName" value={formData.workExperience1.companyName} placeholder="Company name" onChange={(e) => { updateNestedField(e, "workExperience1") }} />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="timeFrame" value={formData.workExperience1.timeFrame} placeholder="time frame" onChange={(e) => { updateNestedField(e, "workExperience1") }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="role" value={formData.workExperience1.role} placeholder="role" onChange={(e) => { updateNestedField(e, "workExperience1") }} />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="description" value={formData.workExperience1.description} placeholder="description" onChange={(e) => { updateNestedField(e, "workExperience1") }} />
                            </Col>
                        </Row>
                        <Row>
                            <h5>Work experience 2:</h5>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="companyName" value={formData.workExperience1.companyName} placeholder="Company name" onChange={(e) => { updateNestedField(e, "workExperience2") }} />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="timeFrame" value={formData.workExperience1.timeFrame} placeholder="time frame" onChange={(e) => { updateNestedField(e, "workExperience2") }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control type="text" name="role" value={formData.workExperience1.role} placeholder="role" onChange={(e) => { updateNestedField(e, "workExperience2") }} />
                            </Col>
                            <Col>
                                <Form.Control type="text" name="description" value={formData.workExperience1.description} placeholder="description" onChange={(e) => { updateNestedField(e, "workExperience2") }} />
                            </Col>
                        </Row>
                    </Container>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Education</Form.Label>
                    <Container>
                        <Row>
                            <h5>Education 1:</h5>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control type="text" placeholder="school" name="school" value={formData.workExperience1.school} onChange={(e) => { updateNestedField(e, "education1") }} /></Col>
                            <Col>
                                <Form.Control type="text" placeholder="time frame" name="timeFrame" value={formData.workExperience1.timeFrame} onChange={(e) => { updateNestedField(e, "education1") }} /></Col>
                            <Col>
                                <Form.Control type="text" placeholder="course" name="course" value={formData.workExperience1.course} onChange={(e) => { updateNestedField(e, "education1") }} /></Col>
                            <Col>
                                <Form.Control type="text" placeholder="description" name="description" value={formData.workExperience1.description} onChange={(e) => { updateNestedField(e, "education1") }} /></Col>
                        </Row>
                        <Row>
                            <h5>Education 2:</h5>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control type="text" placeholder="school" name="school" value={formData.workExperience1.school} onChange={(e) => { updateNestedField(e, "education2") }} /></Col>
                            <Col>
                                <Form.Control type="text" placeholder="time frame" name="timeFrame" value={formData.workExperience1.timeFrame} onChange={(e) => { updateNestedField(e, "education2") }} /></Col>
                            <Col>
                                <Form.Control type="text" placeholder="course" name="course" value={formData.workExperience1.course} onChange={(e) => { updateNestedField(e, "education2") }} /></Col>
                            <Col>
                                <Form.Control type="text" placeholder="description" name="description" value={formData.workExperience1.description} onChange={(e) => { updateNestedField(e, "education2") }} /></Col>
                        </Row>
                    </Container>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>About me</Form.Label>
                    <Form.Control type="text" placeholder="About me" name="aboutMe" value={formData.aboutMe} onChange={handleChange} />
                </Form.Group>
                <Button onClick={handleSubmit}>
                    <Link to="/resume"> Submit</Link>
                </Button>
            </Form>
        </div>
    )
};

export default FormDetails;
