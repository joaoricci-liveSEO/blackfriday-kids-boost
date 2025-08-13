import { Button } from "@/components/ui/button";
import heroImage from "@/assets/tiptoe-hero.jpg";

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
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-primary/20">
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
          <span className="text-2xl font-bold">TipToe & Joey</span>
        </div>
        
        {/* Main Title */}
        <h1 className="text-6xl lg:text-8xl font-light text-primary mb-6 tracking-wide">
          <span className="block">BLACK</span>
          <span className="block font-bold bg-gradient-secondary bg-clip-text text-transparent">
            FRIDAY
          </span>
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-2xl lg:text-3xl font-light text-muted-foreground mb-4">
          Calçados Premium Infantis
        </h2>
        <div className="text-4xl lg:text-5xl font-bold text-accent mb-8 animate-float">
          ATÉ 70% OFF
        </div>
        
        {/* Description */}
        <p className="text-lg lg:text-xl text-primary/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          Do primeiro passo à grande aventura. Descubra nossa coleção premium 
          com a qualidade TipToe & Joey que as famílias brasileiras confiam.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-10 py-4 text-lg rounded-full shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            Explorar Ofertas
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-10 py-4 text-lg rounded-full transition-all duration-300"
          >
            Ver Coleção
          </Button>
        </div>
        
        {/* Countdown Timer */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 inline-block border border-border shadow-soft">
          <p className="text-muted-foreground text-sm font-medium mb-3">Oferta válida até:</p>
          <div className="flex gap-4 text-center">
            <div className="bg-secondary/10 backdrop-blur-sm rounded-xl p-4 min-w-[70px]">
              <div className="text-2xl font-bold text-primary">02</div>
              <div className="text-xs text-muted-foreground uppercase">Dias</div>
            </div>
            <div className="bg-secondary/10 backdrop-blur-sm rounded-xl p-4 min-w-[70px]">
              <div className="text-2xl font-bold text-primary">15</div>
              <div className="text-xs text-muted-foreground uppercase">Horas</div>
            </div>
            <div className="bg-secondary/10 backdrop-blur-sm rounded-xl p-4 min-w-[70px]">
              <div className="text-2xl font-bold text-primary">30</div>
              <div className="text-xs text-muted-foreground uppercase">Min</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default BlackFridayHero;