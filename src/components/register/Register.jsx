import React, { useState, useContext } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { addUser, app, database } from '../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import ResumeContext from '../../context/resumeContext';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/userContext';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user'
  });
  const { auth } = useContext(UserContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      addUser(formData.email,formData.password, formData.role)
      navigate('/login');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h1 className='my-3'>REGISTER</h1>
      <Card style={{ width: "24em", background: 'black', color: 'white' }} className="d-flex flex-column justify-content-center align-items-center">
        <Form onSubmit={handleSubmit} className="w-100">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={formData.email || ''} onChange={handleChange} placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={formData.password || ''} onChange={handleChange} />
          </Form.Group>
          <div className="d-flex justify-content-center w-100">
            <Button variant="secondary" type="submit" className="w-25">
              Register
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  )

};

export default Register;
