import React from 'react'
import Description from '../About/Description'

type resultProps={
    result:{
        marks:number,
        subject:string,
    },
    status: 'success' | 'loading' | 'fail'
}

export default function Result(props:resultProps) {
  return (
    <div style={{border:'1px solid green', margin:'5px 10px'}}>
        <h1>Student Result Panel</h1>
        <div>
            <p style={{margin:'0px'}}>Marks : <span>{props.result.marks}</span></p>
            <p style={{margin:'0px'}}>Subject : <span>{props.result.subject}</span></p>
        </div>
        <span>Description component : </span>
        <Description children='result make privilage mot'/>
    </div>
  )
}
