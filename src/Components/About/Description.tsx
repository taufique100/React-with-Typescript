import React from 'react'
import Oscar from './Oscar'

type descriptionProps={
    children: string
}

export default function Description(props:descriptionProps) {
  return (
    <>
    <Oscar>
        <span>{props.children}</span>
    </Oscar>
    </>
  )
}
