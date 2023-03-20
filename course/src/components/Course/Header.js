import React from "react";

const Header = ({ title }) => {
  console.log("Title from Header", title);

  return <h1>{title}</h1>;
};

export default Header;
