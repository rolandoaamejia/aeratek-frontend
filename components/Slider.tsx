"use client";
import React, { useState } from "react";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

interface Props {
  children: React.ReactNode;
  currentSlide: number;
  maxSlides: number;
  next: () => void;
  prev: () => void;
  controls?: boolean;
}

const Slider: React.FC<Props> = ({
  children,
  currentSlide,
  prev,
  next,
  controls,
  maxSlides,
}) => {
  return (
    <article className="flex h-full relative justify-center items-center">
      {controls && (
        <button
          className="absolute left-8 lg:left-12 z-50 hidden bg-orange-500 bg-opacity-95 text-white rounded-full w-8 h-8 sm:flex justify-center items-center"
          disabled={currentSlide === 0}
          onClick={prev}
        >
          <BiSolidLeftArrow />
        </button>
      )}
      <section className="flex sm:overflow-x-hidden w-[90%]">
        {children}
      </section>
      {controls && (
        <button
          className="absolute right-0 z-50  hidden bg-orange-500 bg-opacity-95 text-white rounded-full w-8 h-8 sm:flex ml-8 justify-center items-center"
          disabled={currentSlide === maxSlides - 1}
          onClick={next}
        >
          <BiSolidRightArrow />
        </button>
      )}
    </article>
  );
};

export default Slider;
