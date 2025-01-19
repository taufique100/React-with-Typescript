import React from 'react'
import Input from './Input'

type buttonProps={
    handleClick:(event: React.MouseEvent<HTMLButtonElement>)=>void
}

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
