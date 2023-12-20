import React, { useContext, useRef, useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import UserContext from '../../context/userContext';

const Login = () => {
  const navigate = useNavigate();
  const { auth, userData, setUserData } = useContext(UserContext);
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then(async (userCredential) => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h1 className='my-3'>LOGIN</h1>
      <Card style={{ width: "24em", background: 'black', color: 'white' }} className="d-flex flex-column justify-content-center align-items-center">
        <Form onSubmit={handleSubmit} className="w-100">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={userData.email || ''} onChange={handleChange} placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={userData.password || ''} onChange={handleChange} />
          </Form.Group>
          <div className="d-flex justify-content-center w-100">
            <Button variant="secondary" type="submit" className="w-25">
              Login
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );

}

export default Login;