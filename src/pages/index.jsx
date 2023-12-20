import React, { useContext } from 'react';
import ResumeList from '../components/resumeList/ResumeList';
import UserContext from '../context/userContext';
import { Link } from 'react-router-dom';
import { MdLibraryAdd } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import ResumesById from '../components/resumeList/ResumesById';

const Home = () => {
    const { userData } = useContext(UserContext);

    return (
        <>
            <div className="d-flex justify-content-end">
                <Button variant="dark" className="mt-4">
                    <Link to="/form" className="text-white text-decoration-none">
                        ADD RESUME <MdLibraryAdd />
                    </Link>
                </Button>
            </div>
            <div className="center">
                {userData.email && <ResumesById />}
            </div>
        </>
    );
};

export default Home;
