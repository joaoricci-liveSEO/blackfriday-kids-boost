import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import sneakersImage from "@/assets/sneakers-kids.jpg";
import dressShoesImage from "@/assets/dress-shoes-kids.jpg";
import sandalsImage from "@/assets/sandals-kids.jpg";

const categories = [
  {
    id: 1,
    name: "Tênis Esportivos",
    description: "Para correr, brincar e se divertir",
    discount: "Até 70% OFF",
    image: sneakersImage,
    itemCount: "120+ modelos"
  },
  {
    id: 2,
    name: "Sapatos Sociais",
    description: "Elegância para ocasiões especiais",
    discount: "Até 60% OFF", 
    image: dressShoesImage,
    itemCount: "85+ modelos"
  },
  {
    id: 3,
    name: "Sandálias de Verão",
    description: "Conforto para os dias quentes",
    discount: "Até 65% OFF",
    image: sandalsImage,
    itemCount: "95+ modelos"
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-primary mb-4">
            🎯 COMPRE POR CATEGORIA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encontre o calçado perfeito para cada momento da vida do seu filho. 
            Qualidade, conforto e estilo com os melhores preços da Black Friday.
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
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
                
                {/* Discount Badge */}
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                  {category.discount}
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <div className="mb-2">
                  <span className="text-sm font-semibold text-accent">
                    {category.itemCount}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">
                  {category.name}
                </h3>
                
                <p className="text-sm opacity-90 mb-4">
                  {category.description}
                </p>
                
                <Button 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300"
                >
                  EXPLORAR CATEGORIA
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Age Groups Section */}
        <div className="bg-gradient-to-r from-muted/30 to-muted/10 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center text-primary mb-8">
            👶 ENCONTRE POR IDADE
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { age: "0-2 anos", sizes: "15-20", emoji: "👶" },
              { age: "3-5 anos", sizes: "21-25", emoji: "🧒" },
              { age: "6-9 anos", sizes: "26-30", emoji: "👦" },
              { age: "10-14 anos", sizes: "31-36", emoji: "👧" }
            ].map((group, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="text-3xl mb-3">{group.emoji}</div>
                <h4 className="font-bold text-lg text-card-foreground mb-1">
                  {group.age}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Tamanhos {group.sizes}
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  VER PRODUTOS
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