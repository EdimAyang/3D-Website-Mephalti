import React from 'react'
import {  Navbar, Navigations, Bars } from './Style'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Button } from '../button/Button'
const Nav = () => {
  const [activeBar, setActiveBar] = useState(false);
const [Bar, setBar] = useState(false)
const toggler = ()=>{
  setBar(Bar => !Bar);
  setActiveBar(activeBar => !activeBar)
}
const navigate = useNavigate()
const handleNavigate = ()=>{
  navigate("/create")
}
  return (
    <Navbar>
      <section>
        <img src="/Mephalti 3D.svg"alt="" />
      </section>
      <Navigations active = {activeBar}>
        <Link to ="/">Home</Link>
        <Link to = "/create">Create</Link>
        <Link to = "/contact">Contact</Link>
        <Button onClick={handleNavigate}>Create</Button>
      </Navigations>
      <Bars src={Bar ? '/icons/xmark-solid.svg' : '/icons/bars-solid (3).svg'} onClick={toggler}/>
    </Navbar>
  )
}

export default Nav;
