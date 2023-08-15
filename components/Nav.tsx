import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between ml-10">
      <h1>logo</h1>
      <nav className="flex w-96 justify-between">
        <a href="/">Home</a>
        <a href="/">Skills</a>
        <a href="/">Work</a>
        <a href="/">Experience</a>
        <a href="/">Contact</a>
      </nav>
    </div>
  );
};

export default Nav;
