import React from 'react'
import NavBarComponent from '../components/main/NavBarComponent'
import style from '../styles/Page.module.css'

const NavBar = ({resume}) => {
  return (
    <div className={style.nav}>
      <NavBarComponent resume = {resume}/>
    </div>
  )
}

export default NavBar