import React from 'react'
import {assets_frontend} from '../assets'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <img src={assets.logo} alt="" />
        <ul>
            <NavLink>
                <li>HOME</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>ALL DOCTORS</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>ABOUT</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>CONTACT</li>
                <hr />
            </NavLink>
            
        </ul>
        <div>
            <button>Create Account</button>
            <button>SIGN UP</button>
        </div>
    </div>
  )
}

export default Navbar