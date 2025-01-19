import React from 'react'
import { InputProps } from './about.types'

export default function Input({value, handleChange}:InputProps) {
  return (
    <input value={value} onChange={handleChange} type="text" />
  )
}
