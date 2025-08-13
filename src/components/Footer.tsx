import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">TipToe & Joey</h3>
            <p className="text-sm opacity-90 mb-4 font-light">
              Acompanhando cada passo da jornada dos pequenos. Do nascimento às grandes aventuras, 
              oferecemos calçados premium pensados para cada fase do desenvolvimento infantil.
            </p>
            <div className="flex gap-4">
              <Button size="sm" variant="secondary" className="rounded-full">
                Instagram
              </Button>
              <Button size="sm" variant="secondary" className="rounded-full">
                Facebook
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="https://br.tiptoeyjoey.com/" className="hover:text-accent transition-colors">Página Inicial</a></li>
              <li><a href="https://br.tiptoeyjoey.com/390?map=productClusterIds" className="hover:text-accent transition-colors">Lançamentos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Black Friday</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Guia de Tamanhos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:text-accent transition-colors">Nascer e Crescer</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Andar e Equilibrar</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Correr e Brincar</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Primeira Caminhada</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Calçados Barefoot</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-lg mb-4">Atendimento</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div>
                <p className="font-semibold">📱 WhatsApp</p>
                <p>(11) 99999-9999</p>
              </div>
              <div>
                <p className="font-semibold">📧 E-mail</p>
                <p>contato@kidsshoes.com.br</p>
              </div>
              <div>
                <p className="font-semibold">🕒 Horário</p>
                <p>Seg-Sex: 8h às 18h<br/>Sáb: 9h às 14h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <h4 className="font-bold text-lg mb-4 text-center">💳 Formas de Pagamento</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "💳 Visa", "💳 Mastercard", "💳 Elo", "💳 American Express",
              "🏛️ PIX", "🏛️ Boleto", "💰 PayPal"
            ].map((payment, index) => (
              <span key={index} className="bg-primary-foreground/10 px-3 py-1 rounded text-sm">
                {payment}
              </span>
            ))}
          </div>
        </div>

        {/* Security & Trust */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">🔒</div>
              <h5 className="font-semibold mb-1">Compra Segura</h5>
              <p className="text-xs opacity-90">SSL 256 bits</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🚚</div>
              <h5 className="font-semibold mb-1">Entrega Rápida</h5>
              <p className="text-xs opacity-90">Para todo Brasil</p>
            </div>
            <div>
              <div className="text-2xl mb-2">✅</div>
              <h5 className="font-semibold mb-1">Satisfação Garantida</h5>
              <p className="text-xs opacity-90">30 dias para trocar</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
          <p>© 2024 TipToe & Joey. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-accent transition-colors">Trocas e Devoluções</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;