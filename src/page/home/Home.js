import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
    <div className='section section-1'>
      <Link to="/calendar" className='link'>
        Calendar
      </Link>
    </div>
    <div className='section section-2'>
      <Link to="/page2" className='link'>
        Employee Details
      </Link>
    </div>
    <div className='section section-3'>
      <Link to="/createEmployee" className='link'>
        Create Employee
      </Link>
    </div>
  </div>
  )
}

export default Home