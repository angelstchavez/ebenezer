import { FaInstagram, FaFacebook, FaSquare, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container mx-auto px-4">
        <div className="inline-flex relative before:content-[''] before:top-1 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#BCBCBC,#BCBCBC,#BCBCBC,#BCBCBC)] before:absolute">
          <FaSquare size={40} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6"></nav>
        <div className="flex justify-center gap-6 text-[#BCBCBC]">
          <FaInstagram size={24} />
          <FaFacebook size={24} />
          <FaYoutube size={24} />
        </div>
        <p className="mt-6">
          &copy; {currentYear} Iglesia Ebenezer Plenitud. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
