import React from 'react'

type resultProps={
    result:{
        marks:number,
        subject:string,
    }
}

export default function Result(props:resultProps) {
  return (
    <div style={{border:'1px solid green', margin:'5px 10px'}}>
        <h1>Student Result Panel</h1>
        <div>
            <p style={{margin:'0px'}}>Marks : <span>{props.result.marks}</span></p>
            <p style={{margin:'0px'}}>Subject : <span>{props.result.subject}</span></p>
        </div>
    </div>
  )
}
