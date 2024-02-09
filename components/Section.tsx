"use client";
import { useEffect, useRef } from "react";


export default function Section({ services }:{services:any}) {
  const refFirst = useRef<HTMLInputElement | null>(null);

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

  return (
   <div className="relative z-50">
   <button
     className="absolute text-[20px] text-gray-500 h-[50px] w-[50px] rounded-full inline-block left-[-25px] top-0 bottom-0 my-auto bg-[#00000010] z-20"
     onClick={prev}
   >
     {"<"}
   </button>
   <div
     className="relative grid gap-16 py-5 mb-20 overflow-x-scroll scroll-smooth"
     ref={refFirst}
     style={{ gridTemplateColumns: `repeat(${services.length}, 250px)` }}
   >
  
  {services && services.map((i: any, index: number) => (
  <img
    key={index} // Agregar esta línea
    src={i.coverImage}
    className="h-[200px] w-auto rounded-[15px]"
    alt=""
  />
))}
  
   </div>
   <button
     className="absolute text-[20px] text-gray-500 h-[50px] w-[50px] rounded-full inline-block right-[-25px] top-0 bottom-0 my-auto bg-[#00000010] z-20"
     onClick={next}
   >
     {">"}
   </button>
 </div>
  );
}