import React, { useState } from 'react'
import FormDetails from '../components/form/FormDetails'
import { Link } from 'react-router-dom';
import ResumeList from '../components/resumeList/ResumeList';
import { Button } from 'react-bootstrap';

const Home = () => {
    const [isClick, setIsclick] = useState(false);

    const handleCreateResume = () => {
        setIsclick(em => !em);
    }
    console.log("Home rendred");
    return (
        <div className='center'>
            {/* {!isClick && <ResumeList />} */}
            {isClick ? <FormDetails /> : <button onClick={handleCreateResume} className='center'><Link to="/form">Create Resume</Link></button>}
        </div>
    )
}

export default Home