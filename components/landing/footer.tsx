import facebookImage from "@/assets/facebook.png";
import youtubeImage from "@/assets/youtube.png";
import instagramImage from "@/assets/instagram.png";
import Image from "next/image";
import Link from "next/link";
import { FaSquare } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#6b6b6b] text-sm py-10 text-center">
      <div className="container mx-auto px-4">
        <div className="inline-flex relative before:absolute">
          <FaSquare size={40} className="relative" />
        </div>

        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6"></nav>

        {/* Logos de redes sociales */}
        <div className="flex justify-center gap-6 mt-4">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={facebookImage} alt="Facebook" width={24} height={24} />
          </Link>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={youtubeImage} alt="YouTube" width={24} height={24} />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={instagramImage}
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
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
