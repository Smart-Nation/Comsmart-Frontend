import { Link } from "react-router";

export function CTA() {
  return (
    <section className="bg-primary-light md:px-8 md:py-16 lg:px-16 lg:py-20 xl:px-24 px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="mb-6 font-display text-2xl font-semibold text-text-title md:mb-8 md:text-[2.125rem] lg:text-[2.5rem]">
          Pret a rejoindre
          <br className="md:hidden" />
          <span className="md:inline hidden"> </span>
          l'aventure ?
        </h2>
        <Link
          to="/register"
          className="bg-primary font-display hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 active:scale-95 md:px-10 md:py-4 md:text-lg inline-block px-8 py-3 text-base font-semibold text-white transition-all duration-300 rounded-lg"
        >
          Rejoindre ComSmart
        </Link>
      </div>
    </section>
  );
}
