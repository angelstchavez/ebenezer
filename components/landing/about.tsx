"use client";

import engineImage from "@/assets/desktop.jpg";
import calendarImage from "@/assets/cartoon.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 border-b">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="text-2xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-blue-700 to-blue-950 text-transparent bg-clip-text mt-6">
            Gestiona los procesos
          </h2>
          <p className="mb-4">
            Nuestro software facilita el control de asistencias, la gestión de
            cumpleaños, y la organización de grupos y actividades especiales.
            Todo está diseñado para que los líderes de la iglesia puedan
            mantener un seguimiento preciso y personalizado de cada miembro.
          </p>
          <p>
            Con esta herramienta, podrás enfocarte en fortalecer la comunidad,
            mientras el software se encarga de la organización.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <motion.img
            className="w-full rounded-lg border"
            src={engineImage.src}
            alt="office content 1"
            animate={{
              translateY: [-15, 15],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          />
          <motion.img
            className="mt-4 w-full lg:mt-10 rounded-lg border"
            src={calendarImage.src}
            alt="office content 2"
            animate={{
              translateY: [15, -15],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
