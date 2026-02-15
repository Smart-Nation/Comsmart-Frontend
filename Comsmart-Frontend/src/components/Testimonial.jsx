import { Quotes } from "@phosphor-icons/react";

export function Testimonial() {
  return (
    <section className="md:px-8 md:py-16 lg:px-16 lg:py-20 xl:px-24 px-4 py-10">
      <div className="max-w-3xl mx-auto text-center">
        <Quotes
          weight="fill"
          className="text-accent hover:scale-125 md:h-12 md:w-12 w-10 h-10 mx-auto mb-4 transition-transform duration-500"
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
        <blockquote className="font-display text-text-title md:text-2xl lg:text-3xl mb-4 text-xl font-semibold leading-relaxed">
          Enfin une plateforme ou
          <br className="md:hidden" />
          <span className="md:inline hidden"> </span>
          je retrouve tout !<span className="text-accent">"</span>
        </blockquote>
        <cite className="text-text-secondary md:text-base text-sm not-italic">
          Koffi, Frontend Developer
        </cite>
      </div>
    </section>
  );
}
