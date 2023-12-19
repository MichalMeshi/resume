import React, { useState,useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { app, database } from '../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import ResumeContext from '../../context/resumeContext';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const {auth} = useContext(ResumeContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        console.log(err.message);
      })
  };

  return (
    <div>
      <h1>Register</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
        </Form.Group>
        <button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </Form>
    </div>
  )

};

export default Register;
