import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

function Header() {

  const navigate=useNavigate()
  const navItems = [
    {
      name: "Contacts",
      path: "/contacts",
      active: true
    },
    {
      name: "Add Contact",
      path: "/addcontact",
      active: true
    }
  ]
  const logout=()=>{
    localStorage.removeItem("token")
    axios.get("http://localhost:3000/saver/api/clear")
      document.cookie='token='
      alert("Logged out")
      console.log(document.cookie)
    navigate("/hero")
  }
  return (
    <div className=' p-4 bg-fuchsia-500'>
      <nav className=' flex justify-between '>
        <div>
          Contact Saver
        </div>
        <ul className='flex justify-center list-none '>
          {
            navItems.map((item) => item.active &&
              (
                <Link to={item.path} key={item.name}>
                  <li className='mx-2'>{item.name}</li>
                </Link>
              ))
          }
          <li>
            <button className=' bg-purple-950 rounded-sm mx-2 px-1' onClick={logout}>Logout</button>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Header
