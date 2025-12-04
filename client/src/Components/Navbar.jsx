import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
// import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Sports", href: "/sports" },
    { name: "Pricing", href: "/pricing" },
    { name: "Success", href: "/success" },
    { name: "Discord", href: "/discord" },
    { name: "Contact", href: "/contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.25 },
    }),
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[1100px] px-4">
      <nav className="mx-auto bg-[#071025]/70 backdrop-blur-sm border border-white/6 rounded-full px-4 md:px-6 py-2 flex items-center justify-between gap-4 shadow-lg">
        {/* left: logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            EP
          </div>
        </div>

        {/* center: links */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.href} className="hover:text-white transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* right: bonus + sign in */}
        <div className="flex items-center gap-3">
          <div className="hidden md:inline-flex items-center text-sm text-emerald-400 font-semibold px-3">
            🎁 <span className="ml-2 text-emerald-400">$2K BONUS</span>
          </div>

          <Link
            to="/signin"
            className="ml-2 inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:opacity-95 transition"
          >
            Sign in →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-[#0A1128] px-6 py-4 space-y-4 rounded-b-xl shadow-lg"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="block text-gray-300 hover:text-white transition"
              >
                {link.name}
              </motion.a>
            ))}

            <div className="flex items-center space-x-2 text-green-400">
              <span>🎁</span>
              <span>$2K BONUS</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-300">
              <span>📩</span>
              <span>Contact</span>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-medium transition">
              Sign in →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}