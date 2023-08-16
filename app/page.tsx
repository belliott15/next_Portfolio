"use client";
import { useEffect, useState } from "react";
import projectData from "../data.jsx";
import Footer from "../components/Footer";

export default function Home() {
  const [projects, setProjects] = useState(projectData);

  useEffect(() => {
    console.log(projects, "projects");
  }, []);

  return (
    <main className="flex-col justify-between p-4 min-h-screen">
      <section className="">
        <div>
          <h1>Beau Elliott</h1>
          <h4>Full Stack Developer</h4>
        </div>

        <p>description</p>
      </section>
      <section>Info</section>
      <section className="project-container">Projects go here</section>
      <Footer />
    </main>
  );
}
