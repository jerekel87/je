"use client";

import { Dispatch, SetStateAction, useRef } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import { urlForImage } from "@/sanity/lib/image";
import "./style.css";
import Image from "next/image";

export function SliderFullScreen({
  isOpen,
  setIsOpen,
  images,
  thumbsSwiper,
  currentIndex,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  images: any[];
  currentIndex?: number;
  thumbsSwiper?: any;
}) {
  const swiperRef = useRef<any>();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        hideCloseButton
        overlayClass="bg-[rgba(255,255,255,0.8)]"
        className="px-0 max-w-full w-dvw h-dvh !rounded-none ring-0 outline-none bg-transparent"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="size-[40px] rounded-full bg-[rgba(0,0,0,0.7)] grid place-items-center z-[2] absolute right-3 top-3"
        >
          <svg
            className="size-[22px] text-white"
            aria-hidden="true"
            data-rmiz-btn-unzoom-icon="true"
            fill="currentColor"
            focusable="false"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"></path>
          </svg>
        </button>
        <Swiper
          loop
          initialSlide={currentIndex}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs]}
          className="slider-full-screen w-full"
        >
          {images?.map((image: any, i: number) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full grid place-items-center">
                <Image
                  quality={100}
                  src={urlForImage(image)}
                  height={1500}
                  width={1500}
                  alt="Image"
                  className="w-auto max-w-full lg:max-w-[800px] 2xl:max-w-[900px] h-auto max-h-dvh object-contain lg:rounded-[10px] overflow-hidden"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {images && images.length > 4 && (
          <div className="slider-full-screen-nav absolute top-1/2 w-full">
            <button
              className="swiper-button-prev"
              onClick={() => swiperRef.current?.slidePrev()}
            ></button>
            <button
              className="swiper-button-next"
              onClick={() => swiperRef.current?.slideNext()}
            ></button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
