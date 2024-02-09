"use client";
import { Project } from "@/interfaces/Projects";
import Image from "next/image";
import React, { useState, useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import Slider from "./Slider";
import ModalContainer from "./modals/ModalContainer";
import { getCarouselImages } from "@/actions/get-home-info";
import { format } from 'date-fns';

interface Props {
  projects: Project[];
}

const url = "https://rolando1001.pythonanywhere.com";

const Timeline: React.FC<Props> = ({ projects }) => {
  const { lang } = useContext(LanguageContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const next = () => setCurrentSlide((prev) => prev + 1);
  const prev = () => setCurrentSlide((prev) => prev - 1);
  const [projectSelected, setProjectSelected] = useState<Project | null>(null);

  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const onClose = () => setOpen(false);

  const onOpen = async (p: Project) => {
    try {
      const news = await getCarouselImages(
        url! +
        `/api/ProjectsDetailView/${p.idProjects}` /* Cambialo por el endpoint de projects */
      );
      if (!news) return;
      const imagesFromApi = news.image_urls?.map((image) => url + image);
      setImages(imagesFromApi!);

      setOpen(true);
      setProjectSelected(p);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {images.length > 0 && (
        <ModalContainer
          images={images}
          onClose={onClose}
          open={open}
          content={projectSelected!}
          sectionType="Project"
        />
      )}
      <Slider
        currentSlide={currentSlide}
        next={next}
        prev={prev}
        maxSlides={projects.length}
        controls
      >
        {projects.map((project, i) => (
          <div
            className="w-[30vw] h-[30vw]  flex flex-col  items-center justify-center cursor-pointer relative transition "
            style={{
              transform: `translateX(-${325 * currentSlide}px)`,
              borderRadius: "5px",
            }}
            onClick={() => onOpen(project)}
            key={i}
            id={`${i}`}
          >
            <div className="mt-3 p-5 sm:pr-8 flex flex-col items-center">
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 mb-1">
                {project.date_project || "Fecha"}
              </time>
              <img
                alt="service Image"
                src={project.coverImage}
                className="sm:w-66 sm:h-66 rounded-lg shadow-lg object-cover hover:scale-95 transition-all mt-1"
              />

              <span className="my-7 mb-8">
                {lang === "en" ? project.title || "" : project.titulo || ""}
              </span>
            </div>



          </div>
        ))}
      </Slider>
    </>
  );
};

export default Timeline;
