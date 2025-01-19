import React from 'react'
import Oscar from './Oscar'
import { descriptionProps } from './about.types'

export default function Description({children}:descriptionProps) {
  return (
    <>
    <Oscar>
        <span>{children}</span>
    </Oscar>
    </>
  )
}
