import React from 'react';
import Result from '../Result/Result';

type studentProps = {
  student: {
    marks: number; 
    branch: string;
    rollNumber: number;
  };
};

const resultDetails={
    marks:98,
    subject:'Operating System'
}

export default function Student(props: studentProps) {
  return (
    <div style={{border: '1px solid red', margin: '5px 10px'}}>
      <h1>Student panel</h1>
      <div>
        <p style={{margin:'0px'}}>Roll Number: {props.student.rollNumber}</p>
        <p style={{margin:'0px'}}>Branch: {props.student.branch}</p>
        <p style={{margin:'0px'}}>Marks: {props.student.marks}%</p>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam soluta, cupiditate ipsa inventore modi delectus vel laborum molestiae, nobis corporis quam tempora. Id quae quasi voluptatem accusamus cumque laudantium commodi.
      </p>
      <Result result={resultDetails} />
    </div>
  );
}
