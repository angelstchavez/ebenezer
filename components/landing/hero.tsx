"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

import platformSoftware from "@/assets/platform-software.png";
import crossSoftware from "@/assets/cross-software.png";
import calendarSoftware from "@/assets/calendar-software.png";

const Hero = () => {
  const router = useRouter();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#BCBCBC,#ffffff_100%)] overflow-x-clip">
      <div className="container mx-auto px-4">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Versión 1.0 disponible
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-stone-950 to-stone-700 text-transparent bg-clip-text mt-6">
              Mejora la productividad
            </h1>
            <p className="text-xl tracking-tight mt-6">
              Simplificamos la gestión de actividades, recursos y comunicación,
              permitiendo que te enfoques en lo que realmente importa: tu
              comunidad.
            </p>
            <div className="flex gap-2 items-center mt-[30px]">
              <Button onClick={() => router.push("/login")}>
                Empezar ahora
              </Button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={platformSoftware.src}
              alt="Platform software"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 10,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={crossSoftware.src}
              alt="Cylinder Image"
              width="220"
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={calendarSoftware.src}
              alt="Noodle Image"
              width="220"
              className="hidden lg:block absolute top-[524px] left-[448px]"
              style={{
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
