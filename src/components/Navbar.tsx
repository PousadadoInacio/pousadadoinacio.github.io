import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const logoPath = `${import.meta.env.BASE_URL}logo.png`;

  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // Se não estiver na página inicial, navegar primeiro
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Se já estiver na página inicial, apenas scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-neutral-900 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className={`text-xl font-serif font-bold flex items-center ${
            isScrolled ? "text-gray-800" : "text-yellow-400"
          }`}
        >
          <img
            src={logoPath}
            alt="Pousadas do Inacio Logo"
            className="h-10 mr-2 drop-shadow-[0_1px_2px_rgba(255,215,0,0.8)]"
          />
          Pousadas do Inacio
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-gray-800" : "text-yellow-400"}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLinks 
            isScrolled={isScrolled} 
            onScrollToSection={handleScrollToSection}
          />
          <Button
            className="btn-primary"
            onClick={() => handleScrollToSection('contact')}
          >
            Reservar
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <NavLinks 
              isScrolled={true} 
              onScrollToSection={handleScrollToSection}
              onClick={() => setIsMenuOpen(false)}
            />
            <Button
              className="btn-primary w-full"
              onClick={() => handleScrollToSection('contact')}
            >
              Reservar
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinksProps {
  isScrolled: boolean;
  onScrollToSection: (sectionId: string) => void;
  onClick?: () => void;
}

const NavLinks = ({ isScrolled, onScrollToSection, onClick }: NavLinksProps) => {
  const links = [
    { label: "Início", to: "/" },
    { label: "Blog", to: "/blog" },
    { label: "Galeria", sectionId: "gallery" },
    { label: "Acomodações", sectionId: "accommodations" },
    { label: "Atividades", sectionId: "activities" },
    { label: "Contato", sectionId: "contact" },
  ];

  return links.map((link) =>
    link.to ? (
      <Link
        key={link.label}
        to={link.to}
        className={`font-medium transition-colors hover:text-pousada-brown ${
          isScrolled ? "text-gray-800" : "text-yellow-400"
        }`}
        onClick={onClick}
      >
        {link.label}
      </Link>
    ) : (
      <button
        key={link.label}
        onClick={() => onScrollToSection(link.sectionId!)}
        className={`font-medium transition-colors hover:text-pousada-brown ${
          isScrolled ? "text-gray-800" : "text-yellow-400"
        }`}
      >
        {link.label}
      </button>
    )
  );
};

export default Navbar;
