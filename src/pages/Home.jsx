import React from 'react'
import HomeComponent from '../components/main/HomeComponent'
import style from '../styles/Page.module.css'

const Home = () => {
  return (
    <div className={style.home}>
      <HomeComponent/>
    </div>
  )
}

export default Home