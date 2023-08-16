"use client";
import { useEffect, useState } from "react";
import projectData from "../data.jsx";
import Footer from "../components/Footer";
import Info from "@/components/Info";
import Projects from "../components/Projects";

export default function Home() {
  const [projects, setProjects] = useState(projectData);

  useEffect(() => {
    console.log(projects, "projects");
  }, []);

  return (
    <main className="flex-col justify-between p-4 min-h-screen">
      <section>
        <h1>Beau Elliott</h1>
        <h4>Full Stack Developer</h4>
      </section>
      <Info />
      <Projects />
      <Footer />
    </main>
  );
}
