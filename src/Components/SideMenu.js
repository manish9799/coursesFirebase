import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import '../App.css'

const SideMenu = () => {
  const [openMenu,setOpenMenu] = useState(false)

  return (
    <div className='side-menu'>
      <h2 >Manish Katara</h2>
      <div className='nav-link'>
        <Link className='link' to='/'>Dashboard </Link>
        <Link className='link' to='courses'>Courses</Link>
        <Link className='link'>Contact</Link>
        <Link className='link'>About</Link>
      </div>
      <div className='nav-lists'>
        <button onClick={()=>{setOpenMenu(!openMenu)}} className='menu-btn'>
        {openMenu ? 
        <IoClose fontSize='23px' /> :
        <FaBars fontSize='23px' />}
        </button>
        <div className='menu' 
        style={{right: openMenu ? '0px':'-300px'}}
        >
          <Link className='link' to='/'>Dashboard </Link>
          <Link className='link' to='courses'>Courses</Link>
          <Link className='link'>Contact</Link>
          <Link className='link'>About</Link>
        </div>
      </div>
    </div>
  )
}

export default SideMenu