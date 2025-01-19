import React from 'react'
import { oscarProps } from './about.types'

export default function Oscar({children}:oscarProps) {
  return (
    <div>
      {children}
    </div>
  )
}
