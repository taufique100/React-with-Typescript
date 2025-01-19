import React from 'react'
import Department from '../Department/Department'
import Student from '../Student/Student'
import Button from '../About/Button';
import Container from '../About/Container';
import Counter from '../State/Counter';

const studentDetails = [
    {
        name: 'John Doe',
        rollNumber: '101',
        Marks: '85',
        department: 'Computer Science'
    },
    {
        name: 'Jane Smith',
        rollNumber: '102',
        Marks: '92',
        department: 'Mechanical Engineering'
    },
    {
        name: 'Mark Johnson',
        rollNumber: '103',
        Marks: '78',
        department: 'Electrical Engineering'
    },
    {
        name: 'Emily Davis',
        rollNumber: '104',
        Marks: '88',
        department: 'Civil Engineering'
    }
];

const oneStudent = {
    marks: 85, 
    branch: 'Computer Science',
    rollNumber: 101,
}

export default function Home() {

    const clickButton=():void=>{
        console.log('handle click has clicked.')
    }

  return (
    <div style={{border:'1px solid yellow', margin:'5px 10px'}}>
      <h1>Home landing page</h1>
      <Button handleClick={clickButton}/>
      <Department />
      <Container style={{color:'palevioletred',width:'fit-content', textAlign:'center', border:'1px solid red'}}/>

      <Counter/>
      {/* <Student student={oneStudent} /> */}
      <Student student={studentDetails} />
    </div>
  );
}
