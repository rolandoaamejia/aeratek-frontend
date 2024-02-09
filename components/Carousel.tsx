"use client";

import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Banner } from "@/interfaces/Banners";

interface Props {
  banners: Banner[];
}

const Carousel: React.FC<Props> = ({ banners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides] = useState(banners.length);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % totalSlides;
      setCurrentSlide(nextSlide);
    }, 8000); // Slide every 8 seconds

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide, totalSlides]);

  if (!banners) return;

  return (
    <div className="sm:h-[500px]  top-[-100px] relative">
      {/* <div className="sticky top-[200px] w-full"> */}
       
      {/* </div> */}

      <section className="relative flex overflow-x-hidden w-full h-[270px] sm:h-[700px] ">
        {banners.map((banner, i) => (
          <div
            key={i}
            className="flex w-screen justify-center cursor-pointer relative transition"
            style={{ transform: `translateX(-${100 * currentSlide}%)` }}
          >
            <div
              className="w-screen h-full bg-no-repeat bg-cover rounded-t-lg animate-fade-down animate-delay-500"
              style={{
                backgroundImage: `url("${banner.image}")`,
                backgroundPosition: "50% 50%",
              }}
            ></div>

            {/* <Image
              // className="w-full h-full bg-no-repeat bg-cover rounded-t-lg"
              // style={{
              //   backgroundImage: `url(${banner.image})`,
              //   backgroundPosition: "50% 50%",
              // }}
              alt="carousel"
              src={banner.image}
              fill
            /> */}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Carousel;
