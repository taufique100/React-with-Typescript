import React from 'react'
import Department from '../Department/Department'
import Student from '../Student/Student'

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
  return (
    <div style={{border:'1px solid yellow', margin:'5px 10px'}}>
      <h1>Home landing page</h1>
      <Department />
      <Student student={oneStudent} />
    </div>
  );
}
