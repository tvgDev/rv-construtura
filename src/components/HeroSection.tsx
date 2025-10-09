import { Button } from "@/components/ui/button";
import logo3D from "@/assets/3D 4.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-to-t to-black via-neutral-950 from-neutral-900 flex items-center justify-center relative overflow-hidden pt-16 sm:pt-18 md:pt-20 lg:pt-24"
    >
      <div className="w-full bg-white bg-[url(./src/assets/background.jpg)] bg-no-repeat bg-cover bg-center rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] flex items-center relative">
        <div className="absolute inset-0 bg-white/70 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-12 lg:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="animate-fade-in-up text-center lg:text-left space-y-4 sm:space-y-5 lg:space-y-6">
              <a
                href="https://instagram.com/lrdemolicao"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full overflow-hidden shadow-sm hover:opacity-90 transition bg-black"
              >
                <span className="font-body bg-yellow-400 text-black px-2 sm:px-3 md:px-4 py-1 text-xs sm:text-sm md:text-base rounded-r-full font-medium">
                  acesse:
                </span>

                <span className="text-white px-3 sm:px-4 md:px-5 py-1 text-xs sm:text-sm md:text-base font-medium">
                  @lrdemolição no instagram
                </span>
              </a>

              <h1 className="font-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold bg-gradient-to-r from-neutral-950 via-neutral-800 bg-clip-text text-transparent leading-tight">
                QUEM SOMOS
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                Especialistas em demolição e construção civil. Trabalhamos com
                segurança, agilidade e qualidade para transformar seu projeto em
                realidade.
              </p>

              <button className="relative flex items-center bg-black text-white rounded-full overflow-hidden pr-1 pl-1 py-1 hover:opacity-90 transition mx-auto lg:mx-0 mt-4 sm:mt-6">
                <span className="bg-white text-black rounded-full px-3 sm:px-4 md:px-5 py-1 sm:py-2 text-xs sm:text-sm md:text-base font-medium mr-2 sm:mr-3">
                  Veja mais
                </span>

                {/* Bolha com seta */}
                <span className="flex items-center justify-center bg-black text-white rounded-full w-6 h-6 shadow-inner mr-2">
                  ▼
                </span>
              </button>
            </div>

            {/* 3D Logo */}
            <div className="flex justify-center animate-fade-in-right order-first lg:order-last">
              <div className="relative">
                <img
                  src={logo3D}
                  alt="Logo 3D RV Construções"
                  className="w-[180px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[500px] object-contain drop-shadow-2xl"
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
