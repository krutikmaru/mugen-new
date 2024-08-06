import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Service, Slide } from "@/app/lib/types/service";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import ThemeSwitcher from "../ThemeSwitcher";

export default function ContentArea({ service }: { service: Service }) {
  return (
    <div className="w-full h-auto lg:w-[40%] lg:h-full flex flex-col justify-start items-center px-5">
      <Content title={service.title} slides={service.slides} />
    </div>
  );
}

function Content({ title, slides }: { title: string; slides: Slide[] }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const currentSlide = slides[currentSlideIndex];

  const slideVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.2 } },
  };

  return (
    <div className="h-full w-full pt-8 flex flex-col-reverse lg:flex-col justify-start items-start">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlideIndex}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="h-auto lg:min-h-[400px]  mt-10 mb-0 lg:mb-4 lg:mt-0 flex flex-col justify-start items-start space-y-4"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-start items-start space-y-4"
          >
            <span className="text-xs font-medium text-black dark:text-white">
              {title}
            </span>
            <h1 className="text-7xl font-bold text-black dark:text-white tracking-tighter">
              {currentSlide.title}
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            className="text-base text-neutral-600 dark:text-[#B7B7B7]"
          >
            <p>{currentSlide.description}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <ControlBar
        slides={slides}
        currentSlideIndex={currentSlideIndex}
        nextSlide={nextSlide}
        goToSlide={goToSlide}
      />
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
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
      className="w-full h-auto flex flex-col justify-start items-start space-y-4"
    >
      <button
        className="flex items-center justify-between space-x-2 text-neutral-600 dark:text-[#B7B7B7]"
        onClick={nextSlide}
      >
        <span className="text-2xl font-medium tracking-tighter">
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
    </motion.div>
  );
}
