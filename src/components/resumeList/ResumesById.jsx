import React, { useContext, useEffect } from 'react'
import ResumeList from './ResumeList'
import ResumeContext from '../../context/resumeContext';

const ResumesById = () => {
    const { getDataByUserId } = useContext(ResumeContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getDataByUserId();
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

export default ResumesById