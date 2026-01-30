"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
} as const;

const logoHover = {
  scale: 1.1,
  filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.4))",
  transition: { duration: 0.3 },
};

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({
      x: (clientX / window.innerWidth - 0.5) * 20,
      y: (clientY / window.innerHeight - 0.5) * 20,
    });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"
          animate={{
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
          }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"
          animate={{
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
          }}
        />

      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Logo */}
        <motion.a
          href="#"
          className="relative group cursor-pointer"
          variants={itemVariants}
          whileHover={logoHover}
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Image
            src="/logos/logo-1.png"
            alt="Main Logo"
            width={400}
            height={150}
            className="object-contain w-auto h-32 md:h-48 relative z-10"
            priority
          />
        </motion.a>

        {/* Separator / Dynamic Line */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"
          variants={itemVariants}
        />

        {/* Sub Logos Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl"
          variants={containerVariants}
        >
          {/* Logo 2 */}
          <motion.a
            href="#"
            className="flex items-center justify-center group relative p-6 cursor-pointer"
            variants={itemVariants}
            whileHover={logoHover}
          >
            <div className="absolute inset-0 bg-white/5 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Image
              src="/logos/logo-2.png"
              alt="Sub Logo 1"
              width={350}
              height={175}
              className="object-contain w-auto h-40 md:h-56 relative z-10"
            />
          </motion.a>

          {/* Logo 3 */}
          <motion.a
            href="#"
            className="flex items-center justify-center group relative p-6 cursor-pointer"
            variants={itemVariants}
            whileHover={logoHover}
          >
            <div className="absolute inset-0 bg-white/5 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Image
              src="/logos/logo-3.png"
              alt="Sub Logo 2"
              width={300}
              height={150}
              className="object-contain w-auto h-32 md:h-40 relative z-10"
            />
          </motion.a>

          {/* Logo 4 */}
          <motion.a
            href="#"
            className="flex items-center justify-center group relative p-6 cursor-pointer"
            variants={itemVariants}
            whileHover={logoHover}
          >
            <div className="absolute inset-0 bg-white/5 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Image
              src="/logos/logo-4.png"
              alt="Sub Logo 3"
              width={300}
              height={150}
              className="object-contain w-auto h-32 md:h-40 relative z-10"
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
