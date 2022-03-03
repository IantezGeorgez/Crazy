import React from 'react'
import NotFoundComponent from '../components/main/NotFoundComponent'
import style from '../styles/Page.module.css'

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <NotFoundComponent/>
    </div>
  )
}

export default NotFound