import React from "react";

const Project = ({ name, tech, libraries }) => {
  return (
    <div className="h-96 bg-gradient-to-r from-orange-800 to-transparent m-5 rounded-xl flex-col justify-center">
      <p>{name}</p>
      <div className="h-56 w-56 border">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur,
        distinctio nesciunt hic adipisci, sunt, placeat error deleniti ad
        debitis laborum odit cum eius obcaecati quasi quaerat ratione assumenda
        alias.
      </div>
      {tech.map((item: string) => (
        <span key={item} className="p-2">
          {item}
        </span>
      ))}
    </div>
  );
};

export default Project;
