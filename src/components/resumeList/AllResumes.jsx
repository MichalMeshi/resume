import React, { useContext, useEffect } from 'react'
import ResumeList from './ResumeList';
import ResumeContext from '../../context/resumeContext';

const AllResumes = () => {
    const { getAllResumes } = useContext(ResumeContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                await getAllResumes();
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div><ResumeList /></div>
    )
}

export default AllResumes