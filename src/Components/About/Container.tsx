import React from 'react'
import { ContainerProps } from './about.types'

export default function Container({style}: ContainerProps) {
  return (
    // <div style={{border:'1px solid red', color:'pink'}}>
    <div style={style}>
      Text content design with CSS properties
    </div>
  )
}
