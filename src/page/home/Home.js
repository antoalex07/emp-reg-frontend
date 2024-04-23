import React from 'react'
import './Home.css';
import BannerBackground from "../../assets/background.jpg";

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${BannerBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw', // Full width of the viewport
    height: '100vh', // Full height of the viewport
    position: 'fixed', // Fixed position to keep it in the background
    top: 0,
    left: 0,
    zIndex: -2,
  };

  return (
    <div className='home-container'>
      <div className='navbar-links-container'>
        <a className="link" href='/employeeRegister'>Employee Register</a>
        <a className="link" href='/employeeDetails'>Employee Details</a>
        <a className="link" href='/calendar'>Attendance Register</a>
      </div>
      <div className='home-banner-container'>
       

        <div className='home-bannerImage-container' style={backgroundImageStyle}></div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Building Success Together
          </h1>
          <p className='primary-text'>
            With decades of experience in the industry, 
            our skilled craftsmen bring your visions to life, 
            brick by brick. From residential renovations to large-scale commercial developments, 
            we've got you covered.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home