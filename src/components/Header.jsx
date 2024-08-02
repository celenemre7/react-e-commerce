import React, { useState } from 'react'
import logo from '../images/logo.png'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';

function Header() {
  
  const navigate = useNavigate()

  const [theme,setTheme] = useState(false)
  const changeTheme = () => {
    const root = document.getElementById("root");
    
    if(theme){
      root.style.backgroundColor="black";
      root.style.color="#fff"
    } else{
      root.style.backgroundColor="#fff";
      root.style.color="black"
    }
    setTheme(!theme);

  }
  return (
    <div className='header-wrapper'>
      <div className='flex-row'>
        <img className='logo' onClick={() => navigate('/')} src={logo} alt="Logo" />
        <p className='logo-text'>CELEN A.S</p>
      </div>
      <div className='flex-row'>
        <input type="text" className='search-input' placeholder='Search...'/>
        <div>

          {
            theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme}/>
          }
          <Badge badgeContent={4} color="primary">
            <CiShoppingBasket className='icon'/>
          </Badge>


        </div>
      </div>
    </div>
  )
}

export default Header