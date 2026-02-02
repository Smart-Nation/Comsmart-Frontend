import { Quotes } from "@phosphor-icons/react";

export function Testimonial() {
  return (
    <section className="px-4 py-10 md:px-8 md:py-16 lg:px-16 lg:py-20 xl:px-24">
      <div className="mx-auto max-w-3xl text-center">
        <Quotes
          weight="fill"
          className="mx-auto mb-4 h-10 w-10 text-accent transition-transform duration-500 hover:scale-125 md:h-12 md:w-12"
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
        <blockquote className="mb-4 font-display text-xl font-semibold leading-relaxed text-text-title md:text-2xl lg:text-3xl">
          Enfin une plateforme ou
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          je retrouve tout !
          <span className="text-accent">"</span>
        </blockquote>
        <cite className="text-sm text-text-secondary not-italic md:text-base">
          Koffi, Frontend Developer
        </cite>
      </div>
    </section>
  );
}
