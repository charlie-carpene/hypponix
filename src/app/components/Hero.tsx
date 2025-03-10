"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import { FaInstagram, FaSoundcloud } from "react-icons/fa";

const Hero = () => {
  const containerTransition = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemTransition = {
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

  return (
    <section
      id="home"
      className="min-h-screen relative flex text-center md:text-left items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url('/images/desktop-hypponix-profile.webp')`,
      }}
    >
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center relative z-10"
        variants={containerTransition}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center w-full">
          <motion.div className="w-full mb-10 lg:mb-0" variants={itemTransition}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6">
              <motion.span className="inline-block" variants={itemTransition}>
                Hypponix
              </motion.span>
            </h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6"
              variants={itemTransition}
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
              variants={itemTransition}
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
