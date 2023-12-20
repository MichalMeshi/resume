import React from 'react'
import FormDetails from '../form/FormDetails'
import Login from '../login/Login'
import { Route, Routes } from 'react-router-dom'
import Resume from '../resume/Resume'
import Home from '../../pages'
import Register from '../register/Register'
import ResumeList from '../resumeList/ResumeList'
import AllResumes from '../resumeList/AllResumes'
import ResumesById from '../resumeList/ResumesById'

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/form' element={<FormDetails />} />
                <Route path='/resume' element={<Resume data={{}} resumeCard={false} />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/list' element={<ResumesById />} />
                <Route path='/all' element={<AllResumes />} />
            </Routes>
        </div>
    )
}

export default AppRoutes