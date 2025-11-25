import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Sports", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Success", href: "#" },
    { name: "Discord", href: "#" },
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
    <nav className="bg-[#050B1A] text-white">
      <div className="max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">
            EP
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center space-x-2 text-green-400">
            <span>🎁</span>
            <span>$2K BONUS</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-300">
            <span>📩</span>
            <span>Contact</span>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-medium transition">
            Sign in →
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

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
    </nav>
  );
}