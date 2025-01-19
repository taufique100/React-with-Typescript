import React from 'react'
import Department from '../Department/Department'
import Student from '../Student/Student'

export default function Home() {
  return (
    <div style={{border:'1px solid yellow', margin:'5px 10px'}}>
      <h1>Home landing page</h1>
      <Department/>
      <Student/>
    </div>
  )
}
