import { Link } from "react-router";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex items-center justify-between px-4 py-3 md:px-8 lg:px-16 xl:px-24">
        <Link to="/">
          <img
            src="/logo.png"
            alt="ComSmart"
            className="h-8 w-8 transition-transform duration-300 hover:scale-110 md:h-10 md:w-10"
          />
        </Link>
        <Link
          to="/register"
          className="rounded-lg bg-primary px-4 py-2 font-display text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 active:scale-95 md:px-6 md:py-2.5"
        >
          Rejoindre ComSmart
        </Link>
      </div>
    </header>
  );
}
