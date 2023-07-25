import React from "react";

const Project = ({ name, tech, libraries }) => {
  return (
    <div className="h-50 bg-amber-400 m-5 w-50">
      <p>{name}</p>
      {tech.map((item: string) => (
        <span key={item} className="p-2">
          {item}
        </span>
      ))}
    </div>
  );
};

export default Project;
