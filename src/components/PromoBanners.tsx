import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PromoBanners = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Free Shipping Banner */}
          <Card className="bg-gradient-secondary text-secondary-foreground p-8 text-center border-none shadow-soft hover:shadow-glow transition-all duration-300">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-2xl font-semibold mb-2">FRETE GRÁTIS</h3>
            <p className="text-lg opacity-90 mb-4">
              Acima de R$ 400
            </p>
            <p className="text-sm opacity-75">
              Para todo o Brasil
            </p>
          </Card>

          {/* Installments Banner */}
          <Card className="bg-gradient-accent text-accent-foreground p-8 text-center border-none shadow-soft hover:shadow-glow transition-all duration-300">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-2xl font-semibold mb-2">12X SEM JUROS</h3>
            <p className="text-lg opacity-90 mb-4">
              No cartão de crédito
            </p>
            <p className="text-sm opacity-75">
              Ou 10% desconto no PIX
            </p>
          </Card>

          {/* Exchange Banner */}
          <Card className="bg-gradient-primary text-primary-foreground p-8 text-center border-none shadow-soft hover:shadow-glow transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-2xl font-semibold mb-2">TROCA GRÁTIS</h3>
            <p className="text-lg opacity-90 mb-4">
              Em até 30 dias
            </p>
            <p className="text-sm opacity-75">
              Primeira troca gratuita
            </p>
          </Card>
        </div>

        {/* Special Offers Section */}
        <div className="mt-16">
          <h2 className="text-3xl lg:text-4xl font-light text-center text-primary mb-8">
            Ofertas Especiais TipToe & Joey
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Kit Offer */}
            <Card className="bg-secondary text-secondary-foreground p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                OFERTA ESPECIAL
              </div>
              
              <h3 className="text-3xl font-semibold mb-4">🎁 Kit Crescimento</h3>
              <p className="text-xl mb-4">
                Compre 2 pares e ganhe <strong>30% OFF</strong> no terceiro
              </p>
              <ul className="space-y-2 mb-6 text-sm opacity-90">
                <li>✅ Válido para toda a coleção</li>
                <li>✅ Combine diferentes fases</li>
                <li>✅ Frete grátis incluso</li>
              </ul>
              
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Ativar Promoção
              </Button>
            </Card>

            {/* Flash Sale */}
            <Card className="bg-secondary text-secondary-foreground p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold animate-flash">
                ⚡ FLASH SALE
              </div>
              
              <h3 className="text-3xl font-bold mb-4">⏰ ÚLTIMAS HORAS</h3>
              <p className="text-xl mb-4">
                Produtos selecionados com até <strong>80% OFF</strong>
              </p>
              <ul className="space-y-2 mb-6 text-sm opacity-90">
                <li>✅ Estoque limitado</li>
                <li>✅ Apenas hoje</li>
                <li>✅ Enquanto durarem os estoques</li>
              </ul>
              
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                VER FLASH SALE
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;