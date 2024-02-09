"use client";
import { News } from "@/interfaces/News";
import React, { useEffect, useState, useContext } from "react";
import Slider from "./Slider";
import Image from "next/image";
import ModalContainer from "./modals/ModalContainer";
import { LanguageContext } from "@/contexts/LanguageContext";
import { getCarouselImages } from "@/actions/get-home-info";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
interface Props {
  news: News[];
}

const News: React.FC<Props> = ({ news }) => {
  const { lang } = useContext(LanguageContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const next = () => setCurrentSlide((prev) => prev + 1);
  const prev = () => setCurrentSlide((prev) => prev - 1);
  const [totalSlides] = useState(news.length);

  const url = "https://rolando1001.pythonanywhere.com";

  useEffect(() => {
    const slideInterval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % totalSlides;
      setCurrentSlide(nextSlide);
    }, 8000); // Slide every 8 seconds

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide, totalSlides]);
  const [newsSelected, setNewsSelected] = useState<News | null>(null);

  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  const onOpen = async (n: News) => {
    try {
      const news = await getCarouselImages(
        url! + `/api/NewsDetailView/${n.idNews}`
      );
      if (!news) return;
      const imagesFromApi = news.image_urls?.map((image) => url + image);
      setImages(imagesFromApi!);
      setOpen(true);
      setNewsSelected(n);
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
          content={newsSelected!}
          sectionType="News"
        />
      )}
      <div className="mx-auto  mt-40 bg-color-news p-6 w-full" id="news">
        <div className="flex items-center relative justify-center w-full">
          <h3 className="relative inline-block p-6 w-[200px] lg:w-[300px] z-30 mb-6 text-2xl font-bold tracking-tight bg-color-news text-blue-600 uppercase text-center">
            {lang === "en" ? "NEWS" : "NOTICIAS"}
          </h3>
          <span className="absolute bottom-[40px] inline-block w-[80vw] border-b-[2px] border-blue-600 "></span>
        </div>

        <button
          className="my-24 absolute left-8 z-50 hidden bg-orange-500 bg-opacity-95 text-white rounded-full w-7 h-7 sm:flex justify-center items-center hover:scale-95 transition-all"
          onClick={prev}
        >
          <BiSolidLeftArrow />
        </button>

        <button
          className="my-24 absolute right-8 z-50 hidden bg-orange-500 bg-opacity-95 text-white rounded-full w-7 h-7 sm:flex justify-center items-center hover:scale-95 transition-all"
          onClick={next}
        >
          <BiSolidRightArrow />
        </button>
        <Slider
          currentSlide={currentSlide}
          next={next}
          prev={prev}
          maxSlides={news.length}
        >
          {news.map((singleNews, i) => (
  <div
    className="flex justify-center cursor-pointer relative transition sm:min-w-[541px] min-w-full"
    style={{ transform: `translateX(-${541 * currentSlide}px)` }}
    key={i}
    onClick={() => onOpen(singleNews)}
  >
    <section className="flex gap-x-4 justify-between">
      <Image
        alt="service Image"
        src={singleNews.coverImage}
        width={256}
        height={256}
        className="rounded-lg shadow-lg object-cover hover:scale-95 transition-all sm:w-[260px] w-[130px] sm:h-[260px] h-[130px]"
      />
      <div className="px-2 flex flex-col items-center w-[139px] justify-center flex-wrap">
        <h4 className="font-semibold text-lg text-gray-900">
          {lang === "en" ? singleNews.title : singleNews.titulo}
        </h4>
        <span className="my-4 text-gray-400 break-all">
          {lang === "en" ? singleNews.body : singleNews.cuerpo}
        </span>
        <button className="bg-blue-500 text-center py-1 px-3 text-white">
          {lang === "en" ? "Read More..." : "Leer Más..."}
        </button>
      </div>
    </section>
  </div>
))}
        </Slider>
      </div>
    </>
  );
};

export default News;
