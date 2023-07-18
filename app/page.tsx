"use client";
import Project from "@/components/Project";
import { useEffect, useState } from "react";
import projectData from "../data.jsx";

export default function Home() {
  const [projects, setProjects] = useState(projectData);

  useEffect(() => {
    console.log(projects, "projects");
  }, []);

  return (
    <main className="flex flex-col p-24 text-center">
      <section className="flex flex-col justify-center w-full border">
        <h1 className="text-5xl bg-gray-500">Beau Elliott</h1>
        <h4>Full Stack Developer</h4>
      </section>
      <section>Info</section>
      <section>
        {projects.map((item) => (
          <Project key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}
