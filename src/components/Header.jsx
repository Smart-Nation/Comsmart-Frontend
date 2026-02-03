import { Link } from "react-router";

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="md:px-8 lg:px-16 xl:px-24 flex items-center justify-between px-4 py-3 mx-auto">
        <Link to="/">
          <img
            src="/logo.png"
            alt="ComSmart"
            className="hover:scale-110 md:h-10 md:w-10 w-8 h-8 transition-transform duration-300"
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
