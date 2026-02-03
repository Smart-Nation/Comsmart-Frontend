export function CTA() {
  return (
    <section className="bg-primary-light px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20 xl:px-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-6 font-display text-2xl font-semibold text-text-title md:mb-8 md:text-[2.125rem] lg:text-[2.5rem]">
          Pret a rejoindre
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          l'aventure ?
        </h2>
        <a
          href="#rejoindre"
          className="inline-block rounded-lg bg-primary px-8 py-3 font-display text-base font-semibold text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 active:scale-95 md:px-10 md:py-4 md:text-lg"
        >
          Rejoindre ComSmart
        </a>
      </div>
    </section>
  );
}
