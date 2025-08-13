import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "🎉 Inscrição realizada!",
        description: "Você receberá nossas melhores ofertas em primeira mão.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-primary-foreground/95 backdrop-blur-sm border-none shadow-2xl p-8 lg:p-12 text-center">
          
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-black text-primary mb-4">
              📧 OFERTAS EXCLUSIVAS
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seja o primeiro a saber das promoções imperdíveis e lançamentos. 
              Receba cupons de desconto exclusivos direto no seu e-mail!
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-bold text-lg text-card-foreground mb-1">
                Ofertas Primeiro
              </h3>
              <p className="text-sm text-muted-foreground">
                Acesso antecipado às promoções
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">🎁</div>
              <h3 className="font-bold text-lg text-card-foreground mb-1">
                Cupons Exclusivos
              </h3>
              <p className="text-sm text-muted-foreground">
                Descontos especiais só para assinantes
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="font-bold text-lg text-card-foreground mb-1">
                Dicas & Novidades
              </h3>
              <p className="text-sm text-muted-foreground">
                Tendências em calçados infantis
              </p>
            </div>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 text-lg"
              />
              <Button 
                type="submit"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 h-12 text-lg whitespace-nowrap"
              >
                QUERO DESCONTO! 🎯
              </Button>
            </div>
          </form>

          {/* Privacy Notice */}
          <p className="text-xs text-muted-foreground mt-4 max-w-lg mx-auto">
            Ao se inscrever, você concorda em receber e-mails promocionais da KidsShoes. 
            Você pode cancelar a qualquer momento. Respeitamos sua privacidade.
          </p>

          {/* Social Proof */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Junte-se a mais de <strong className="text-secondary">15.000 pais</strong> que já economizam conosco!
            </p>
            
            <div className="flex justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">4.9⭐</div>
                <div className="text-xs text-muted-foreground">Avaliação média</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">15k+</div>
                <div className="text-xs text-muted-foreground">Clientes felizes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">98%</div>
                <div className="text-xs text-muted-foreground">Recomendação</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;