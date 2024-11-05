"use client";

import { IoMenu } from "react-icons/io5";
import { FaSquare } from "react-icons/fa";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Header = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-primary text-primary-foreground text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Iglesia Ebenezer Plenitud
        </p>
      </div>
      <div className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <FaSquare size={40} />

            <Sheet>
              <SheetTrigger asChild>
                <IoMenu className="h-5 w-5 md:hidden" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-md">
                    Iglesia Ebenezer Plenitud
                  </SheetTitle>
                  <SheetDescription>
                    Administre su iglesia de manera eficiente
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <SheetClose asChild>
                      <Button onClick={() => router.push("/login")}>
                        Inciar sesión
                      </Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button
                        variant="outline"
                        onClick={() => router.push("/about")}
                      >
                        Acerca de
                      </Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button
                        variant="outline"
                        onClick={() => router.push("/updates")}
                      >
                        Actualizaciones
                      </Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button
                        variant="outline"
                        onClick={() => router.push("/help")}
                      >
                        Ayuda
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <nav className="hidden md:flex gap-6 text-primary/60 items-center">
              <a href="#">Acerca de</a>
              <a href="#">Actualizaciones</a>
              <a href="#">Ayuda</a>
              <Button
                className="tracking-tight"
                onClick={() => router.push("/login")}
              >
                Iniciar sesión
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
