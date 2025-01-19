import React from "react";
import Result from "../Result/Result";

type studentProps = {
    student: {
      name: string;
      rollNumber: string;
      Marks: string;
      department: string;
    }[];
};


const resultDetails = {
  marks: 98,
  subject: "Operating System",
};

export default function Student(props: studentProps) {
  return (
    <div style={{ border: "1px solid red", margin: "5px 10px" }}>
      <h1>Student panel</h1>
      {/* <div>
        <p style={{margin:'0px'}}>Roll Number: {props.student.rollNumber}</p>
        <p style={{margin:'0px'}}>Branch: {props.student.branch}</p>
        <p style={{margin:'0px'}}>Marks: {props.student.marks}%</p>
      </div> */}
      <div>
        {props.student.map((data, index) => (
          <div key={index}>
            <p style={{ margin: "0px" }}>Name: {data.name}</p>
            <p style={{ margin: "0px" }}>Department: {data.department}</p>
            <p style={{ margin: "0px" }}>marks: {data.Marks}</p>
            <p style={{ margin: "0px" }}>Roll Number: {data.rollNumber}</p>
          </div>
        ))}
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam soluta,
      </p>
      <Result result={resultDetails} status={'success'} />
    </div>
  );
}
