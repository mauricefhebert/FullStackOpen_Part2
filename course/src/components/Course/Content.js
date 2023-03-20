import React from "react";
import Part from "./Part";

const Content = ({ course }) => {
  console.log("course from Content", course);

  return (
    <>
      <div>
        {course.map(x => (
          <Part key={x.id} name={x.name} exercises={x.exercises} />
        ))}
      </div>
      <div>
        <strong>
          Total of {course.reduce((sum, course) => sum + course.exercises, 0)}{" "}
          exercises
        </strong>
      </div>
    </>
  );
};

export default Content;
