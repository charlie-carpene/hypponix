import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface MenuProps {
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ setIsMenuOpen }) => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  const menuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <ul className="flex flex-col space-y-4 text-center text-2xl">
        {navItems.map((item, index) => (
          <motion.li
            key={item.href}
            variants={linkVariants}
            transition={{ delay: 0.1 * index }}
          >
            <Link
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Menu;
