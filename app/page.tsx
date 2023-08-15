"use client";
// import Project from "@/components/Project";
import { useEffect, useState } from "react";
import projectData from "../data.jsx";

export default function Home() {
  const [projects, setProjects] = useState(projectData);

  useEffect(() => {
    console.log(projects, "projects");
  }, []);

  return (
    <main>
      <section>
        <div>
          <h1>Beau Elliott</h1>
          <h4>Full Stack Developer</h4>
        </div>

        <p>description</p>
      </section>
      <section>Info</section>
      <section className="project-container">Projects go here</section>
    </main>
  );
}
