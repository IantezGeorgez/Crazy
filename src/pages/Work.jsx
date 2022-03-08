import React from 'react'
import WorkComponent from '../components/main/WorkComponent'
import style from '../styles/Page.module.css'

const Work = ({show}) => {
  return (
    <div className={style.work}>
      <WorkComponent show = {show}/>
    </div>
  )
}

export default Work