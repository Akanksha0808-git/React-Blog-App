import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    // Use the navigate function to navigate to a specific route
    navigate('/');
  };
  return (
    <>
      <div id='header'>
        <div id='headbox'>
          <span id='the'>The</span>
          <span id='siren'>Siren</span>
        </div>
        <div> <button className='btn' onClick={handleNavigation}>Go To Home</button></div>


      </div>
    </>
  )
}

export default Header
