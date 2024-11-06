"use client";

import { Button } from "../ui/button";
import engineImage from "@/assets/flower.png";
import calendarImage from "@/assets/calendar.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const CallToAction = () => {
  const router = useRouter();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#c1e0fe] py-24 overflow-x-clip"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-blue-700 to-blue-950 text-transparent bg-clip-text mt-5">
            Ebenezer Plenitud
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight mt-5">
            Una herramienta integral diseñada para apoyar la administración de
            la iglesia, mejorar la comunicación y facilitar la gestión de
            eventos y ministerios.
          </p>
          <motion.img
            src={engineImage.src}
            alt={"Star Image"}
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={calendarImage.src}
            alt={"Spring Image"}
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <Button onClick={() => router.push("/login")}>Empezar ahora</Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
