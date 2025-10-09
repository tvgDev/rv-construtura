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
      className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg"
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="src/assets/logo_nova.png"
              alt="Logo Demolição"
              className="w-14 h-14 object-contain"
            />
            <span className="text-white font-thin text-xl tracking-[0.6rem]">
              DEMOLIÇÃO
            </span>
          </div>

          {/* Desktop Navigation - Centralizado */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white hover:text-gray-300 transition-colors duration-300 font-medium text-md tracking-wide"
              >
                <p className="font-light">{item.label}</p>
              </motion.a>
            ))}

            <div className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-white to-neutral-600 text-black px-4 py-1 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg"
              >
                <p>FAZER ORÇAMENTO</p>
              </motion.button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-6 pb-6 border-t border-gray-700"
          >
            <nav className="flex flex-col space-y-4 mt-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-gray-300 transition-colors duration-300 font-medium text-sm"
                >
                  {item.label}
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-white to-transparent text-black px-8 py-3 rounded-full font-semibold text-sm w-full mt-4"
              >
                FAZER ORÇAMENTO
              </motion.button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
