import { Link } from "react-router";

export function Hero() {
  return (
    <section className="md:px-8 md:py-12 lg:px-16 lg:py-16 xl:px-24 px-4 pt-6 pb-8">
      <div className="md:flex-row md:gap-12 lg:gap-16 flex flex-col items-center gap-8 mx-auto">
        {/* Text content */}
        <div className="animate-slide-up md:flex-1 md:text-left text-center">
          <h1 className="mb-4 font-display text-[2rem] font-bold leading-tight text-text-title md:text-[2.5rem] lg:text-[3rem]">
            <span className="text-accent">ComSmart</span>,
            <br />
            ta communaute de
            <br />
            developpeurs
          </h1>
          <p className="text-text-body md:mx-0 md:text-base lg:text-lg max-w-md mx-auto mb-6 text-sm">
            Fini le chaos de Whatsapp...
            <br />
            Evenements, annonces et ressources
            <br />
            au meme endroit
          </p>

          <div className="md:justify-start flex items-center justify-center gap-3">
            <Link
              to="/register"
              className="rounded-lg bg-primary px-6 py-2.5 font-display text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 active:scale-95 md:px-8 md:py-3"
            >
              Rejoindre
            </Link>
            <Link
              to="/login"
              className="rounded-lg bg-primary-light px-6 py-2.5 font-display text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25 active:scale-95 md:px-8 md:py-3"
            >
              Se connecter
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div className="animate-scale-in w-full max-w-md overflow-hidden rounded-2xl bg-gray-100 shadow-xl transition-transform duration-500 hover:scale-[1.02] md:flex-1 md:max-w-none">
          <img
            src="/hero-image.jpg"
            alt="Communaute de developpeurs travaillant ensemble"
            className="aspect-[4/3] h-auto w-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML = `
                <div class="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-accent/20 to-primary/20 p-8">
                  <span class="text-text-secondary text-sm">Ajouter hero-image.jpg dans /public</span>
                </div>
              `;
            }}
          />
        </div>
      </div>
    </section>
  );
}
