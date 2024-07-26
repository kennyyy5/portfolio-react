import React from 'react'
import { IconCloudDemo } from "./IconCloudDemo";

export default function About() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-1 view" id='about'>
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <IconCloudDemo/>
    </div>
    <div className="col-lg-6 ">
      <h1 className="display-5 fw-bold text-body-emphasis">
       About
      </h1>
      <p className="lead about-li">
        <ul>
          
           <li>Computer Science major + Maths minor Student at the University of Guelph </li>
           <li>Notable courses: Linear Algebra 1, Statistics 1, Discrete Maths, Intermediate Programming</li>
           <li>Summer Software Engineering fellow at Headstarter AI </li>
           <li>Current obsessions: reading, creating new projects, Abbott Elementary.</li>
            <li>Looking for Data Scientist/Analyst and Front-end/Back-end/Full-stack SEng/Developer roles</li>
          </ul>
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
       
      </div>
    </div>
  </div>
</div>

    </>
  )
}
