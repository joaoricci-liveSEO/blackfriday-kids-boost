import { Button } from "@/components/ui/button";
import heroImage from "@/assets/black-friday-hero.jpg";

const BlackFridayHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Flash Sale Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-flash">
          <span className="w-2 h-2 bg-secondary-foreground rounded-full animate-pulse"></span>
          OFERTA RELÂMPAGO
        </div>
        
        {/* Main Title */}
        <h1 className="text-6xl lg:text-8xl font-black text-primary-foreground mb-4 tracking-tight">
          <span className="block">BLACK</span>
          <span className="block bg-gradient-secondary bg-clip-text text-transparent animate-pulse-glow">
            FRIDAY
          </span>
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-2xl lg:text-4xl font-bold text-accent mb-6">
          Calçados Infantis com até
          <span className="block text-5xl lg:text-6xl text-accent animate-bounce-subtle">
            70% OFF
          </span>
        </h2>
        
        {/* Description */}
        <p className="text-lg lg:text-xl text-primary-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          A maior promoção do ano chegou! Tênis, sapatos, sandálias e botas para meninos e meninas. 
          Marcas premium com preços imperdíveis.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 text-lg rounded-full shadow-glow transition-all duration-300 hover:scale-105"
          >
            🔥 VER OFERTAS AGORA
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold px-8 py-4 text-lg rounded-full transition-all duration-300"
          >
            📱 BAIXAR CATÁLOGO
          </Button>
        </div>
        
        {/* Countdown Timer */}
        <div className="bg-primary/20 backdrop-blur-sm rounded-2xl p-6 inline-block border border-primary-foreground/20">
          <p className="text-primary-foreground text-sm font-semibold mb-2">⏰ OFERTA TERMINA EM:</p>
          <div className="flex gap-4 text-center">
            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
              <div className="text-2xl font-black text-accent">02</div>
              <div className="text-xs text-primary-foreground">DIAS</div>
            </div>
            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
              <div className="text-2xl font-black text-accent">15</div>
              <div className="text-xs text-primary-foreground">HORAS</div>
            </div>
            <div className="bg-secondary/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
              <div className="text-2xl font-black text-accent">30</div>
              <div className="text-xs text-primary-foreground">MIN</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default BlackFridayHero;