"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { FaInstagram, FaSoundcloud } from "react-icons/fa";

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

  const itemVariants = {
    hidden: { opacity: 0, x: "-50px" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonAnimations = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  const imageProps = {
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
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex text-center md:text-left items-center overflow-hidden bg-cover bg-center"
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
                Hypponix
              </motion.span>
            </h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6"
              variants={itemVariants}
            >
              The rave was built on energy,
              <br />
              and the excitement of it all,
              <br />
              and this desire to get lost,
              <br />
              it&apos;s like a new era for me now...
            </motion.p>
            <motion.div
              className="flex flex-row justify-center md:justify-normal space-x-10 text-white"
              variants={itemVariants}
            >
              <Link
                href="https://soundcloud.com/hypponix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto"
              >
                <motion.button
                  {...buttonAnimations}
                  className="bg-primary flex items-center justify-center rounded-full"
                >
                  <FaSoundcloud className="text-2xl" />
                </motion.button>
              </Link>
              <Link
                href="https://www.instagram.com/hypponix/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto"
              >
                <motion.button
                  {...buttonAnimations}
                  className="bg-primary flex items-center justify-center rounded-full"
                >
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
