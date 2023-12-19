import React from 'react'
import FormDetails from '../form/FormDetails'
import Login from '../login/Login'
import { Route, Routes } from 'react-router-dom'
import Resume from '../resume/Resume'
import Home from '../../pages'
import Register from '../register/Register'
import ResumeList from '../resumeList/ResumeList'

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/form' element={<FormDetails />} />
                <Route path='/resume/:index' element={<Resume formData={{}}/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/list' element={<ResumeList />} />
            </Routes>
        </div>
    )
}

export default AppRoutes