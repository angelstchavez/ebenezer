"use client";

import { motion } from "framer-motion";

const LogoTicket = () => {
  const words = [
    "ASISTENCIAS",
    "CONTROL",
    "ADMINISTRACIÓN",
    "GESTIÓN",
    "ORGANIZACIÓN",
    "PLANIFICACIÓN",
    "PRODUCTIVIDAD",
  ];

  return (
    <div className="py-8 md:py-12 bg-gradient-to-b from-[#FFFFFF] to-[#e0effe]">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
          <div className="absolute inset-0 z-10 pointer-events-none" />
          <motion.div
            className="flex gap-14 animate-scroll mask-gradient pr-14 relative z-20"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {words.concat(words).map((word, index) => (
              <div key={index} className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-blue-900 to-blue-700 text-transparent bg-clip-text">
                {word}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicket;
