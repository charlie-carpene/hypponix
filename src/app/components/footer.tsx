"use client";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import { FaArrowUp, FaInstagram, FaSoundcloud } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="fixed bottom-0">
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      className="py-8 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://soundcloud.com/hypponix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Soundcloud"
            >
              <FaSoundcloud className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/hypponix/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram className="w-6 h-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <hr className="my-4 border-secondary" />
        <p className="text-center text-sm mb-2 md:mb-0">
          &copy; {new Date().getFullYear()}, All rights reserved.
        </p>
      </div>
      <BackToTopButton />
    </motion.footer>
  );
};

export default Footer;
