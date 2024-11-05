import { IoMenu } from "react-icons/io5";
import { FaSquare } from "react-icons/fa";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-primary text-primary-foreground text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Administre su iglesia de manera eficiente y mantenga su comunidad
          organizada
        </p>
      </div>
      <div className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <FaSquare size={40} />
            <IoMenu className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-primary/60 items-center">
              <a href="#">Acerca de</a>
              <a href="#">Actualizaciones</a>
              <a href="#">Ayuda</a>
              <Button className="tracking-tight">Iniciar sesión</Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
