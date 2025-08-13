import BlackFridayHero from "@/components/BlackFridayHero";
import ProductCarousel from "@/components/ProductCarousel";
import PromoBanners from "@/components/PromoBanners";
import CategorySection from "@/components/CategorySection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "KidsShoes - Black Friday",
            "url": "https://yourstore.com",
            "description": "Loja de calçados infantis com as melhores ofertas da Black Friday",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://yourstore.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* Hero Section with Black Friday Banner */}
      <BlackFridayHero />

      {/* Featured Products Carousel */}
      <ProductCarousel />

      {/* Promotional Banners */}
      <PromoBanners />

      {/* Category Navigation */}
      <CategorySection />

      {/* Newsletter Signup */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
