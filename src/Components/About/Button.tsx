import React from 'react'
import Input from './Input'

import { buttonProps } from './about.types'

export default function Button(props:buttonProps) {

    const handleInputChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event)
    }

  return (
    <>
        <button onClick={props.handleClick}>Click</button>
        <Input value='Taufique Ali' handleChange={handleInputChange}/>
    </>
  )
}
