"use client";

import Image from "next/image";
import productImage from "@/assets/product-image.png";
import bookyImage from "@/assets/booky.png";
import colorsImage from "@/assets/colors.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="mt-8 bg-gradient-to-b from-[#FFFFFF] to-[#c1e0fe] py-24 overflow-x-clip"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Aumenta tu productividad
            </div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-blue-700 to-blue-950 text-transparent bg-clip-text mt-5">
            Una forma más eficaz de seguir el progreso
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight mt-5">
            Podrás llevar un registro detallado de quiénes participan en cada
            actividad, coordinar el seguimiento de nuevos miembros, y optimizar
            la organización de eventos y reuniones.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt={"Product Image"} className="mt-10" />
          <motion.img
            src={bookyImage.src}
            alt={"Pyramid Image"}
            height={220}
            width={220}
            className="hidden md:block absolute -right-8 -top-24"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={colorsImage.src}
            alt={"Tube Image"}
            height={180}
            width={180}
            className="hidden md:block absolute bottom-24 -left-28"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
