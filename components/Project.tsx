import React from "react";

const Project = ({ name, tech, libraries }) => {
  return (
    <div>
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
