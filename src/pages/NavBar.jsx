import React from 'react'
import NavBarComponent from '../components/main/NavBarComponent'
import style from '../styles/Page.module.css'

const NavBar = () => {
  return (
    <div className={style.nav}>
      <NavBarComponent/>
    </div>
  )
}

export default NavBar