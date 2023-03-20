import React from "react";

const Part = ({ name, exercises }) => {
  console.log("name and exercises from Part", name, exercises);
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

export default Part;
