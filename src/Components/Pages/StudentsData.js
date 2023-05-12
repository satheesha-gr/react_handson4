import React from 'react'
import NavBar from '../NavBar'

import '../CSS/studentsdata.css'
import { NavLink } from 'react-router-dom'

function StudentsData() {
  return (
    <div>
        <NavBar/>

        <div className="data-table">
          <header className="header">
            <span className="title">Students Details</span>
            <button>
              Add new student
            </button>
          </header>

          <div>
            <table border={1} cellPadding={10} cellSpacing={0} className='table-data'>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
              </tr>
              <tr>
                <td>John</td>
                <td>24</td>
                <td>MERN</td>
                <td>October</td>
                <td><NavLink>Edit</NavLink></td>
              </tr>
              <tr>
                <td>Doe</td>
                <td>25</td>
                <td>MERN</td>
                <td>November</td>
                <td><NavLink>Edit</NavLink></td>
              </tr>
              <tr>
                <td>Biden</td>
                <td>26</td>
                <td>MERN</td>
                <td>September</td>
                <td><NavLink>Edit</NavLink></td>
              </tr>
              <tr>
                <td>Barar</td>
                <td>22</td>
                <td>MERN</td>
                <td>September</td>
                <td><NavLink>Edit</NavLink></td>
              </tr>
            </table>
          </div>
        
        </div>
    </div>
  )
}

export default StudentsData