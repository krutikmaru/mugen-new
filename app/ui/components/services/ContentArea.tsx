import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Service, Slide } from "@/app/lib/types/service";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import ThemeSwitcher from "../ThemeSwitcher";

export default function ContentArea({ service }: { service: Service }) {
  const slides = service.slides;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="h-full w-full lg:w-[40%] ">
      <div className="h-full w-full pt-8 flex flex-col-reverse lg:flex-col justify-start items-start">
        <div
          key={currentSlideIndex}
          className="h-auto lg:min-h-[400px]  mt-10 mb-0 lg:mb-4 lg:mt-0 flex flex-col justify-start items-start space-y-4"
        >
          <div className="flex flex-col justify-start items-start space-y-4">
            <span className="text-base font-medium text-black dark:text-white">
              {service.title}
            </span>
            <h1 className="text-7xl font-bold text-black dark:text-white tracking-tighter">
              {currentSlide.title}
            </h1>
          </div>
          <div className="text-base text-neutral-600 dark:text-[#B7B7B7]">
            <p>{currentSlide.description}</p>
          </div>
        </div>
        <ControlBar
          slides={slides}
          currentSlideIndex={currentSlideIndex}
          nextSlide={nextSlide}
          goToSlide={goToSlide}
        />
      </div>
    </div>
  );
}

function ControlBar({
  slides,
  currentSlideIndex,
  nextSlide,
  goToSlide,
}: {
  slides: Slide[];
  currentSlideIndex: number;
  nextSlide: () => void;
  goToSlide: (index: number) => void;
}) {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start space-y-4">
      <button
        className="flex items-center justify-between space-x-2 text-neutral-600 dark:text-[#B7B7B7]"
        onClick={nextSlide}
      >
        <span className="text-base font-medium tracking-tighter">
          {slides[(currentSlideIndex + 1) % slides.length].title}
        </span>
        <ArrowRight />
      </button>
      <div className="flex justify-center items-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-5 border cursor-pointer border-[#8339BD] rounded-lg ${
              currentSlideIndex === index ? "bg-[#B352FF] border-1" : ""
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
