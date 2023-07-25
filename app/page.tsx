"use client";
import Project from "@/components/Project";
import { useEffect, useState } from "react";
import projectData from "../data.jsx";
import Image from "next/image.js";

export default function Home() {
  const [projects, setProjects] = useState(projectData);

  useEffect(() => {
    console.log(projects, "projects");
  }, []);

  return (
    <main className="flex flex-col p-24 text-center">
      <section className="flex flex-col justify-center w-full">
        <h1 className="text-5xl">Beau Elliott</h1>
        <h4>Full Stack Developer</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          neque delectus sunt tenetur ab totam voluptas odio expedita provident
          illum, eum exercitationem sequi ipsam, cumque itaque laudantium.
          Vitae, quidem possimus?
        </p>
      </section>
      <section>Info</section>
      <section className="project-container">
        {projects.map((item) => (
          <Project key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}
