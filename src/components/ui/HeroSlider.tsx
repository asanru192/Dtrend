"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TREATWELL_LINK } from "@/lib/data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: 1,
    image: "/images/hero-main.png",
    headingLine1: "Where Beauty",
    headingLine2: "Meets Identity",
    sub: "Hair · Bridal · Beauty · Makeup — Harrow, London",
    ctaPrimary: "Book Now",
    ctaPrimaryLink: TREATWELL_LINK,
    ctaSecondary: "View Services",
    ctaSecondaryLink: "/services",
  },
  {
    id: 2,
    image: "/images/bridal-kandyan.png",
    headingLine1: "Kandyan",
    headingLine2: "Heritage",
    sub: "Authentic Kandyan Bridal Dressing & Artistry",
    ctaPrimary: "Bridal Collection",
    ctaPrimaryLink: "/bridal",
    ctaSecondary: "Consultation",
    ctaSecondaryLink: TREATWELL_LINK,
  },
  {
    id: 3,
    image: "/images/service-hair.png",
    headingLine1: "Precision",
    headingLine2: "Hair Artistry",
    sub: "Architectural cutting and bespoke color chemistry",
    ctaPrimary: "Discover Hair",
    ctaPrimaryLink: "/services#hair",
    ctaSecondary: "Portfolio",
    ctaSecondaryLink: "/portfolio",
  },
  {
    id: 4,
    image: "/images/bridal-indian.png",
    headingLine1: "Hindu Bridal",
    headingLine2: "Couture",
    sub: "Redefining Sri Lankan & Indian bridal luxury",
    ctaPrimary: "Explore Styles",
    ctaPrimaryLink: "/portfolio",
    ctaSecondary: "Book Consultation",
    ctaSecondaryLink: TREATWELL_LINK,
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // 6 second autoplay
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const variants = {
    enter: (dir: number) => ({
      scale: 1.1,
      opacity: 0,
      x: dir > 0 ? 50 : -50,
    }),
    center: {
      scale: 1,
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      scale: 1.05,
      opacity: 0,
      x: dir > 0 ? -50 : 50,
    }),
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <section className="relative h-screen w-full bg-charcoal overflow-hidden pt-0 mt-0 flex items-center justify-center">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {/* On mobile, full width. On desktop, right half to prevent portrait scaling issues */}
          <div className="absolute inset-0 md:left-[40%] md:w-[60%] h-full">
            <Image
              src={currentSlide.image}
              alt={currentSlide.headingLine1}
              fill
              className="object-cover object-[center_20%] md:object-center"
              priority
            />
            {/* Horizontal gradient to blend the right-aligned image seamlessly into the charcoal background on desktop */}
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/20 to-transparent hidden md:block w-48 lg:w-64" />
            
            {/* Subtle gradient to ensure navbar is always readable on mobile */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-transparent h-48 md:hidden" />
            {/* Subtle overall dark overlay for text contrast on mobile */}
            <div className="absolute inset-0 bg-charcoal/20 md:hidden" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10 w-full h-full flex flex-col justify-center mt-12 md:mt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="max-w-2xl px-4 md:px-0"
          >
            <motion.h1 
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl md:text-8xl lg:text-9xl editorial-heading mb-6 drop-shadow-lg"
            >
              <span className="text-ivory block">{currentSlide.headingLine1}</span>
              <span className="italic font-light text-gold block">{currentSlide.headingLine2}</span>
            </motion.h1>

            <motion.p 
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-ivory/90 text-lg md:text-xl font-light mb-10 max-w-md tracking-wide drop-shadow-md"
            >
              {currentSlide.sub}
            </motion.p>

            <motion.div 
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link href={currentSlide.ctaPrimaryLink} target={currentSlide.ctaPrimaryLink.includes('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="btn-plum text-center py-5">
                {currentSlide.ctaPrimary}
              </Link>
              <Link href={currentSlide.ctaSecondaryLink} className="btn-outline border-ivory text-ivory hover:bg-ivory hover:text-charcoal text-center py-5 transition-luxury">
                {currentSlide.ctaSecondary}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-20">
        <button 
          onClick={handlePrev}
          className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-ivory hover:bg-gold hover:text-charcoal transition-luxury backdrop-blur-sm"
        >
          <ArrowLeft size={20} />
        </button>
        <button 
          onClick={handleNext}
          className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-ivory hover:bg-gold hover:text-charcoal transition-luxury backdrop-blur-sm relative overflow-hidden group"
        >
          <ArrowRight size={20} className="relative z-10" />
          {/* Golden auto-progress indicator border glow */}
          <motion.div 
            key={currentIndex}
            className="absolute inset-0 rounded-full border border-gold opacity-50"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 6, ease: "linear" }}
          />
        </button>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-12 left-10 md:left-1/2 md:-translate-x-1/2 flex gap-3 z-20">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className="relative h-[2px] w-12 md:w-16 bg-ivory/20 overflow-hidden"
          >
            {idx === currentIndex && (
              <motion.div
                layoutId="activeSlideIndicator"
                className="absolute inset-0 bg-gold"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
              />
            )}
            {idx < currentIndex && (
              <div className="absolute inset-0 bg-gold/50" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
