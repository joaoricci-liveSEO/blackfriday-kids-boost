import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import sneakersImage from "@/assets/running-shoes.jpg";
import dressShoesImage from "@/assets/baby-shoes.jpg";
import sandalsImage from "@/assets/sandals-kids.jpg";

const products = [
  {
    id: 1,
    name: "First Steps Canvas",
    brand: "TipToe & Joey",
    originalPrice: 265.00,
    salePrice: 79.50,
    discount: 70,
    image: dressShoesImage,
    rating: 4.9,
    reviews: 234,
    colors: ["Natural", "Dusty Rose", "Sage"],
    sizes: ["17", "18", "19", "20", "21", "22"],
    category: "Nascer e Crescer"
  },
  {
    id: 2,
    name: "Adventure Runner",
    brand: "TipToe & Joey", 
    originalPrice: 289.00,
    salePrice: 144.50,
    discount: 50,
    image: sneakersImage,
    rating: 4.8,
    reviews: 189,
    colors: ["Earth Green", "Warm Taupe"],
    sizes: ["23", "24", "25", "26", "27", "28"],
    category: "Andar e Equilibrar"
  },
  {
    id: 3,
    name: "Summer Explorer",
    brand: "TipToe & Joey",
    originalPrice: 189.00,
    salePrice: 56.70,
    discount: 70,
    image: sandalsImage,
    rating: 4.9,
    reviews: 156,
    colors: ["Cream", "Blush", "Sand"],
    sizes: ["20", "21", "22", "23", "24", "25"],
    category: "Correr e Brincar"
  },
  {
    id: 4,
    name: "Barefoot Comfort",
    brand: "TipToe & Joey",
    originalPrice: 245.00,
    salePrice: 122.50,
    discount: 50,
    image: dressShoesImage,
    rating: 4.7,
    reviews: 203,
    colors: ["Soft Brown", "Powder Pink"],
    sizes: ["17", "18", "19", "20", "21", "22"],
    category: "Nascer e Crescer"
  }
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, products.length - 2)) % Math.max(1, products.length - 2));
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-primary mb-4">
            Favoritos das Famílias
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Descubra os calçados mais amados pelos pequenos e suas famílias, 
            agora com preços especiais da Black Friday
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="flex-none w-full md:w-1/2 lg:w-1/3 px-2">
                  <Card className="group hover:shadow-glow transition-all duration-300 hover:scale-105 bg-card border-border overflow-hidden">
                    {/* Product Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={`${product.name} - Calçado infantil em promoção Black Friday`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      
                      {/* Discount Badge */}
                      <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-semibold text-sm">
                        -{product.discount}%
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {product.category}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="text-sm text-muted-foreground font-medium mb-1">
                        {product.brand}
                      </div>
                      <h3 className="font-semibold text-lg text-card-foreground mb-2">
                        {product.name}
                      </h3>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-accent fill-current' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {product.rating} ({product.reviews} avaliações)
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-accent">
                            R$ {product.salePrice.toFixed(2).replace('.', ',')}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          ou 12x de R$ {(product.salePrice / 12).toFixed(2).replace('.', ',')} sem juros
                        </p>
                      </div>

                      {/* Colors */}
                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">Cores disponíveis:</p>
                        <div className="flex gap-2">
                          {product.colors.map((color, index) => (
                            <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                        Adicionar ao Carrinho
                      </Button>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 rounded-full bg-background border-border shadow-soft hover:shadow-glow"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 rounded-full bg-background border-border shadow-soft hover:shadow-glow"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-4 text-lg rounded-full"
          >
            VER TODOS OS PRODUTOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;