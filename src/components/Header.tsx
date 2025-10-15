import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "INÍCIO", href: "#inicio" },
    { label: "SOBRE", href: "#quem-somos" },
    { label: "SERVIÇOS", href: "#trabalhos" },
    { label: "PROCESSOS", href: "#processos" },
    { label: "CLIENTES", href: "#depoimentos" },
    { label: "REDES", href: "#contatos" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg font-montserrat font-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center min-w-0 flex-1">
            <img
              src="src/assets/logo_nova.png"
              alt="Logo Demolição"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain flex-shrink-0"
            />
            <span className="text-white font-thin text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.1rem] sm:tracking-[0.15rem] md:tracking-[0.3rem] lg:tracking-[0.5rem] xl:tracking-[0.6rem] truncate ml-2">
              DEMOLIÇÃO
            </span>
          </div>

          {/* Desktop Navigation - Centralizado */}
          <nav className="hidden md:flex space-x-3 lg:space-x-6 xl:space-x-8 items-center">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white hover:text-gray-300 transition-colors duration-300 font-medium text-xs md:text-sm lg:text-base tracking-wide"
              >
                <p className="font-light">{item.label}</p>
              </motion.a>
            ))}

            <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-white to-neutral-600 text-black px-2 md:px-3 lg:px-4 xl:px-5 py-1 rounded-full font-semibold text-xs md:text-sm lg:text-base xl:text-lg transition-all duration-300 hover:shadow-lg"
              >
                <p>FAZER ORÇAMENTO</p>
              </motion.button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white flex-shrink-0 ml-2"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 pb-3 border-t border-neutral-900 overflow-hidden"
          >
            <nav className="flex flex-col space-y-2 mt-3 items-center">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-gray-300 transition-colors duration-300 font-medium text-sm py-1 text-center"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-white to-gray-300 text-black px-4 py-2 rounded-full font-semibold text-sm w-full mt-3"
              >
                FAZER ORÇAMENTO
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
