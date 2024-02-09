"use client";
import { Project } from "@/interfaces/Projects";
import Timeline from "./Timeline";
import React, { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

interface Props {
  projects: Project[];
}

const ProjectsView: React.FC<Props> = ({ projects }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="items-center justify-center mx-auto mt-40 w-full" id="projects">
      <div className="flex justify-center items-center relative justify-center w-full">
        <h3 className=" relative inline-block w-[200px] lg:w-[300px] z-30 mb-6 text-2xl font-bold tracking-tight bg-white text-blue-600 uppercase text-center">
          {lang === "en" ? "PROJECTS" : "PROYECTOS"}
        </h3>
        <span className="absolute bottom-[40px] inline-block w-[80vw] border-b-[2px] border-blue-600 "></span>
      </div>
      <Timeline projects={projects} />
    </div>
  );
};

export default ProjectsView;
