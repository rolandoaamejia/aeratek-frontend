"use client";
import React, { useState, useEffect, useContext } from "react";
import Modal from "./Modal";
import { Service } from "@/interfaces/services";
import { News } from "@/interfaces/News";
import { Project } from "@/interfaces/Projects";
import { LanguageContext } from "@/contexts/LanguageContext";
import { getCarouselImages } from "@/actions/get-home-info";

interface Props {
  open: boolean;
  onClose: () => void;
  content: Service | Project | News | null;
  images: string[];
  sectionType: "Service" | "Project" | "News";
}

// const images = [
//   { image_urls: "/baddage1.png" },
//   { image_urls: "/Group1.png" },
//   { image_urls: "/other.png" },
//   { image_urls: "/other.png" },
//   { image_urls: "/other.png" },
// ];

const ModalContainer: React.FC<Props> = ({
  onClose,
  open,
  content,
  sectionType,
  images,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(images.length);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % totalSlides;
      setCurrentSlide(nextSlide);

    }, 8000); // Slide every 8 seconds

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide, totalSlides]);


  const { lang } = useContext(LanguageContext);

  if (!isMounted) return null;
  if (!content) return null;

  return (
    <Modal onClose={onClose} open={open}>
      <section className="flex overflow-x-hidden w-full">
        {images &&
          images.map((image, i) => (
            <div
              key={i}
              className="flex min-w-[671px] justify-center cursor-pointer relative transition"
              style={{ transform: `translateX(-${671 * currentSlide}px)` }}
            >
              <div
                className="w-full h-[325px] bg-no-repeat bg-cover rounded-t-lg"
                style={{
                  backgroundImage: `url("${image}")`,
                  backgroundPosition: "50% 50%",
                }}
              ></div>
            </div>
          ))}
      </section>
      <section className="bg-white relative top-8 py-1 w-3/4 mx-auto">
        <h4 className="text-center text-blue-600 font-bold text-2xl mb-4">
          {lang === "en"
            ? content.title || "Title"
            : content.titulo || "Titulo"}
        </h4>
      </section>
      <div className="bg-white w-full py-8">
        <section className="w-3/5 mx-auto text-center break-all">
          {lang === "en" ? content.body || "" : content.cuerpo || ""}
        </section>
      </div>
    </Modal>
  );
};

export default ModalContainer;
