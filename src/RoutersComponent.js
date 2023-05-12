import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import StudentsData from './Components/Pages/StudentsData'
import ContactUs from './Components/Pages/ContactUs'
import ErrorPage from './Components/Pages/ErrorPage'

function RoutersComponent() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/students-data' element={<StudentsData/>} />
                <Route path='/contact-us' element={<ContactUs/>} />
                <Route path='/*' element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RoutersComponent