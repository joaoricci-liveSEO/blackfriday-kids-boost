import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import sneakersImage from "@/assets/running-shoes.jpg";
import dressShoesImage from "@/assets/baby-shoes.jpg";
import sandalsImage from "@/assets/sandals-kids.jpg";

const categories = [
  {
    id: 1,
    name: "Nascer e Crescer",
    description: "Primeiros passos com máximo conforto",
    discount: "Até 70% OFF",
    image: dressShoesImage,
    itemCount: "45+ modelos",
    ageRange: "0 - 1 ano"
  },
  {
    id: 2,
    name: "Andar e Equilibrar", 
    description: "Descobrindo o mundo com segurança",
    discount: "Até 60% OFF",
    image: sneakersImage,
    itemCount: "60+ modelos",
    ageRange: "1 - 3 anos"
  },
  {
    id: 3,
    name: "Correr e Brincar",
    description: "Aventuras sem limites para os pequenos",
    discount: "Até 65% OFF",
    image: sandalsImage,
    itemCount: "85+ modelos",
    ageRange: "3 - 7 anos"
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-primary mb-4">
            Jornada de Crescimento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Cada fase do desenvolvimento merece o calçado ideal. Da primeira caminhada 
            às grandes aventuras, acompanhamos cada passo da jornada dos pequenos.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => (
            <Card key={category.id} className="group relative overflow-hidden border-none shadow-soft hover:shadow-glow transition-all duration-500 hover:scale-105">
              
              {/* Background Image */}
              <div className="relative h-80">
                <img 
                  src={category.image}
                  alt={`${category.name} - Calçados infantis em promoção Black Friday`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                
                {/* Discount Badge */}
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm">
                  {category.discount}
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                    {category.ageRange}
                  </span>
                  <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                    {category.itemCount}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold mb-2">
                  {category.name}
                </h3>
                
                <p className="text-sm opacity-90 mb-4 font-light">
                  {category.description}
                </p>
                
                <Button 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold w-full transition-colors duration-300"
                >
                  Explorar Fase
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Age Groups Section */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <h3 className="text-3xl font-light text-center text-primary mb-8">
            Guia de Tamanhos por Idade
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { age: "Recém-nascidos", sizes: "15-18", phase: "Primeiros dias" },
              { age: "6-12 meses", sizes: "17-20", phase: "Descobertas" },
              { age: "1-2 anos", sizes: "19-23", phase: "Primeiros passos" },
              { age: "2-4 anos", sizes: "22-27", phase: "Equilibrio" },
              { age: "4-6 anos", sizes: "26-30", phase: "Aventuras" },
              { age: "6+ anos", sizes: "29-35", phase: "Liberdade" }
            ].map((group, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer bg-card/80 backdrop-blur-sm border-border/50">
                <h4 className="font-semibold text-lg text-card-foreground mb-1">
                  {group.age}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {group.phase}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  Tamanhos {group.sizes}
                </p>
                <Button size="sm" variant="outline" className="w-full text-xs">
                  Ver Modelos
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;