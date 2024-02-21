import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='section section-1'>
        <Link to="/page1" className='link'>
          Section 1
        </Link>
      </div>
      <div className='section section-2'>
        <Link to="/page2" className='link'>
          Section 2
        </Link>
      </div>
      <div className='section section-3'>
        <Link to="/page3" className='link'>
          Section 3
        </Link>
      </div>
    </div>
  )
}

export default Home