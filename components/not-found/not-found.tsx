"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Ups! Página no encontrada
        </h1>
        <p className="mt-2 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Lo sentimos, no pudimos encontrar la página que estás buscando.
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-6">
          <Button onClick={() => router.push("/")}>volver a casa</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
