import { Slide } from '@mui/material'
import React from 'react'

const SlideComponent = (props) => {
  return (
    <Slide
    direction={props.direction}
    in={true}
    mountOnEnter
    unmountOnExit
  >
      {props.children}
  </Slide>
  )
}

export default SlideComponent