import { Button } from "@/components/ui/button";
import logo3D from "@/assets/3D 4.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-to-t to-black via-neutral-950 from-neutral-900 flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="w-full bg-white bg-[url(./src/assets/background.jpg)] bg-no-repeat bg-cover bg-center rounded-[4rem] min-h-[calc(100vh-6rem)] flex items-center relative">
        <div className="absolute inset-0 bg-white/70 rounded-[4rem]"></div>
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div className="animate-fade-in-up">
              <a
                href="https://instagram.com/lrdemolicao"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full overflow-hidden shadow-sm hover:opacity-90 transition bg-black"
              >
                <span className="font-body bg-yellow-400 text-black px-3 py-1 text-sm rounded-r-full font-medium">
                  acesse:
                </span>

                <span className="text-white px-4 py-1 text-sm font-medium">
                  @lrdemolição no instagram
                </span>
              </a>

              <h1 className="font-title text-6xl lg:text-9xl font-bold bg-gradient-to-r from-neutral-950 via-neutral-800 bg-clip-text text-transparent leading-tight">
                QUEM SOMOS
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-md mb-8">
                Especialistas em demolição e construção civil. Trabalhamos com
                segurança, agilidade e qualidade para transformar seu projeto em
                realidade.
              </p>

              <button className="relative flex items-center bg-black text-white rounded-full overflow-hidden pr-1 pl-1 py-1 hover:opacity-90 transition">
                <span className="bg-white text-black rounded-full px-4 py-1 text-sm font-medium mr-3">
                  Veja mais
                </span>

                {/* Bolha com seta */}
                <span className="flex items-center justify-center bg-black text-white rounded-full w-6 h-6 shadow-inner mr-2">
                  ▼
                </span>
              </button>
            </div>

            {/* 3D Logo */}
            <div className="flex justify-center animate-fade-in-right">
              <div className="relative">
                <img
                  src={logo3D}
                  alt="Logo 3D RV Construções"
                  className="w-[100] object-contain drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
