"use client";
import { Service } from "@/interfaces/services";
import Image from "next/image";
import React, { useState, useContext, useRef } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

import Slider from "./Slider";
import ModalContainer from "./modals/ModalContainer";
import { getCarouselImages } from "@/actions/get-home-info";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

interface Props {
  services: Service[];

}
const url = "https://rolando1001.pythonanywhere.com";

const ServicesView: React.FC<Props> = ({ services, }) => {

  const { lang } = useContext(LanguageContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  /* const next = () => setCurrentSlide((prev) => prev + 1);
  const prev = () => setCurrentSlide((prev) => prev - 1);  */
  const refFirst = useRef<HTMLDivElement | null>(null);

  const prev = () => {
    requestAnimationFrame(() => {
      if (refFirst.current) {
        let scrollLeft: any = refFirst.current?.scrollLeft;
        let itemWidth: any = parseInt(
          getComputedStyle(refFirst.current.children[0]).width
        );
        refFirst.current.scrollLeft = scrollLeft - itemWidth * 3;
      }
    });
  };

  const next = () => {
    requestAnimationFrame(() => {
      if (refFirst.current) {
        const scrollLeft: any = refFirst.current?.scrollLeft;
        const itemWidth: any = parseInt(
          getComputedStyle(refFirst.current.children[0]).width
        );
        refFirst.current.scrollLeft = scrollLeft + itemWidth * 3;
      }
    });

  };

  const [serviceSelected, setServiceSelected] = useState<Service | null>(null);

  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const onClose = () => setOpen(false);

  const onOpen = async (s: Service) => {
    try {
      const news = await getCarouselImages(
        url! +
        `/api/ServiceDetailView/${s.idServices}` /* Cambialo por el endpoint de servicios */
      );
      if (!news) return;
      const imagesFromApi = news.image_urls?.map((image) => url + image);
      setImages(imagesFromApi!);

      setOpen(true);
      setServiceSelected(s);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-color-service mt-32">
      <>
      {images.length > 0 && (
        <ModalContainer
          images={images}
          onClose={onClose}
          open={open}
          content={serviceSelected!}
          sectionType="Project"
        />
      )}

      <div className=" mt-8 flex items-center relative justify-center w-full">
        <h3 className=" mt-8 relative inline-block w-[200px] lg:w-[300px] z-30 mb-6 text-2xl font-bold tracking-tight bg-color-service text-blue-600 uppercase text-center">
          {lang === "en" ? "SERVICES" : "SERVICIOS"}
        </h3>
        <span className="absolute bottom-[40px] inline-block w-[80vw] border-b-[2px] border-blue-600 "></span>
      </div>

      <Slider
        currentSlide={currentSlide}
        next={next}
        prev={prev}
        maxSlides={services.length}
        controls
      >
        {services.map((service, i) => (
          <div
            className="w-[30vw] h-[30vw]  flex flex-col  items-center justify-center cursor-pointer relative transition "
            style={{
              transform: `translateX(-${325 * currentSlide}px)`,
              borderRadius: "5px",
            }}
            onClick={() => onOpen(service)}
            key={i}
            id={`${i}`}
          >
            <div className="mt-3 p-5 sm:pr-8 flex flex-col items-center">
              <img
                alt="service Image"
                src={service.coverImage}
                className="sm:w-66 sm:h-66 rounded-lg shadow-lg object-cover hover:scale-95 transition-all mt-1"
              />
            </div>


            <span className="my-7">
              {lang === "en" ? service.title || "" : service.titulo || ""}
            </span>
          </div>
        ))}
      </Slider>
    </>
    </div>
  );
};

export default ServicesView;
