import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Features } from "../../components/Features";
import { Testimonial } from "../../components/Testimonial";
import { CTA } from "../../components/CTA";
import { Footer } from "../../components/Footer";

export function Landing() {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
