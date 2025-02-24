"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { FaSoundcloud, FaInstagram } from "react-icons/fa";


interface TitleContent {
  line1: string;
}

interface Descriptions {
  main: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
  };
  imageAlt: string;
}

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = useCallback(() => {
    setIsImageLoaded(true);
  }, []);

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: "-50px" },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }),
    []
  );

  const buttonAnimations = useMemo(
    () => ({
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
    }),
    []
  );

  const titleContent: TitleContent = useMemo(
    () => ({
      line1: "Hypponix",
    }),
    []
  );

  const descriptions: Descriptions = useMemo(
    () => ({
      main: {
        line1: "The rave was built on energy",
        line2: "and the excitement of it all",
        line3: "and this desire to get lost",
        line4: "it’s like a new era for me now….",
      },
      imageAlt: "I'm playing",
    }),
    []
  );

  const imageProps = useMemo(
    () => ({
      mobile: {
        src: "/images/desktop-hypponix-profile.webp",
        width: 988,
        height: 987,
      },
      desktop: {
        src: "/images/desktop-hypponix-profile.webp",
        width: 988,
        height: 987,
      },
      style: { width: "100%", height: "auto" },
      className: `rounded-lg shadow-xl ${
        isImageLoaded ? "opacity-100" : "opacity-0"
      }`,
      priority: true,
      onLoad: handleImageLoad,
    }),
    [isImageLoaded, handleImageLoad]
  );

  return (
    <section
      id="home"
      className="md:min-h-[calc(100vh-60px)] relative flex items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${imageProps.mobile.src}')`,
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center hidden lg:block"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${imageProps.desktop.src}')`,
        }}
      ></div>
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center w-full">
          <motion.div className="w-full mb-10 lg:mb-0" variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6">
              <motion.span className="inline-block" variants={itemVariants}>
                {titleContent.line1}
              </motion.span>
            </h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8"
              variants={itemVariants}
            >
              <span className="block">{descriptions.main.line1}</span>
              <span className="block">{descriptions.main.line2}</span>
              <span className="block">{descriptions.main.line3}</span>
              <span className="block">{descriptions.main.line4}</span>
            </motion.p>
            <motion.div
              className="flex flex-row justify-start space-y-3 sm:space-y-0 sm:space-x-4 text-white"
              variants={itemVariants}
            >
              <Link href="https://soundcloud.com/hypponix" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <motion.button {...buttonAnimations} className="bg-primary flex items-center justify-center w-12 h-12 rounded-full">
                  <FaSoundcloud className="text-2xl" />
                </motion.button>
              </Link>
              <Link href="https://www.instagram.com/hypponix/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <motion.button {...buttonAnimations} className="bg-primary flex items-center justify-center w-12 h-12 rounded-full">
                  <FaInstagram className="text-2xl" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
