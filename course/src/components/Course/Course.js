import React from "react";
import Content from "./Content";
import Header from "./Header";

const Course = ({ course }) => {
  console.log("course from Course", course);

  return (
    <div>
      {course.map(x => (
        <div key={x.id}>
          <Header title={x.name} />
          <Content course={x.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;
