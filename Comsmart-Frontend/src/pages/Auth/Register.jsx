import { useState } from "react";
import { Link } from "react-router";
import {
  Eye,
  EyeSlash,
  Rocket,
  ShieldCheck,
  Lightning,
} from "@phosphor-icons/react";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement register logic
    console.log("Register:", { email, password });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Branding (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-[55%]">
        <div className="bg-gradient-to-br from-accent via-accent-dark to-accent xl:p-16 relative flex flex-col justify-between w-full p-12 overflow-hidden">
          {/* Background decorative elements */}
          <div className="-right-20 -top-20 h-80 w-80 bg-white/5 absolute rounded-full"></div>
          <div className="-bottom-32 -left-32 h-96 w-96 bg-white/5 absolute rounded-full"></div>
          <div className="right-1/4 top-1/3 bg-primary/20 absolute w-40 h-40 rounded-full"></div>

          {/* Logo */}
          <Link to="/" className="relative z-10 flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
              <img src="/logo.png" alt="" className="w-8 h-8" />
            </div>
            <span className="font-display text-2xl font-bold text-white">
              ComSmart
            </span>
          </Link>

          {/* Main content */}
          <div className="relative z-10 my-auto">
            <h2 className="font-display xl:text-5xl mb-6 text-4xl font-bold leading-tight text-white">
              Rejoins une
              <br />
              communaute active
            </h2>
            <p className="text-white/80 max-w-md text-lg">
              Des centaines de developpeurs partagent deja leurs projets,
              evenements et ressources.
            </p>

            {/* Features list */}
            <div className="mt-10 space-y-4">
              <div className="text-white/90 flex items-center gap-4">
                <div className="bg-white/10 flex items-center justify-center w-10 h-10 rounded-lg">
                  <Rocket weight="duotone" className="w-5 h-5" />
                </div>
                <span>Lance-toi en quelques secondes</span>
              </div>
              <div className="text-white/90 flex items-center gap-4">
                <div className="bg-white/10 flex items-center justify-center w-10 h-10 rounded-lg">
                  <ShieldCheck weight="duotone" className="w-5 h-5" />
                </div>
                <span>Tes donnees restent privees</span>
              </div>
              <div className="text-white/90 flex items-center gap-4">
                <div className="bg-white/10 flex items-center justify-center w-10 h-10 rounded-lg">
                  <Lightning weight="duotone" className="w-5 h-5" />
                </div>
                <span>100% gratuit, sans engagement</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-white/60 relative z-10 text-sm">
            © 2026 ComSmart. Tous droits reserves.
          </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex w-full flex-col bg-white px-6 py-8 lg:w-1/2 lg:px-12 xl:w-[45%] xl:px-20">
        <div className="lg:justify-center lg:py-12 flex flex-col flex-1">
          {/* Logo (mobile only) */}
          <div className="lg:hidden flex items-center justify-center gap-2">
            <img src="/logo.png" alt="" className="w-8 h-8" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text font-display text-xl font-bold text-transparent">
              ComSmart
            </span>
          </div>

          {/* Header */}
          <div className="lg:mt-0 lg:text-left mt-8 text-center">
            <h1 className="font-display text-text-title lg:text-3xl text-2xl font-bold">
              Rejoins la communaute
            </h1>
            <p className="text-text-secondary mt-2 text-base">
              Cree ton compte en quelques secondes
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:max-w-md flex flex-col gap-5 mt-8"
          >
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-text-title text-base font-medium">
                Email <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ton@email.com"
                required
                className="text-text-body placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary px-4 py-3 text-base border border-gray-200 rounded-lg"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <label className="text-text-title text-base font-medium">
                Mot de passe <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={8}
                  className="text-text-body placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary w-full px-4 py-3 pr-12 text-base border border-gray-200 rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="right-4 top-1/2 text-text-secondary hover:text-text-body absolute transition-colors -translate-y-1/2"
                >
                  {showPassword ? (
                    <Eye className="w-5 h-5" />
                  ) : (
                    <EyeSlash className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-text-secondary text-sm">
                Minimum 8 caracteres
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-primary py-4 font-display text-base font-semibold text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
            >
              Rejoindre ComSmart
            </button>

            {/* Terms */}
            <p className="text-text-secondary lg:text-left text-sm text-center">
              En creant un compte, tu acceptes nos{" "}
              <a
                href="/conditions"
                className="text-primary hover:text-primary-dark font-medium underline transition-colors"
              >
                Conditions d'utilisation
              </a>
            </p>
          </form>

          {/* Divider */}
          <div className="lg:max-w-md flex items-center gap-4 mt-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-text-secondary text-sm">ou</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 bg-gray-50 py-4 font-display text-base font-medium text-text-body transition-all duration-300 hover:bg-gray-100 active:scale-[0.98] lg:max-w-md"
          >
            <GoogleIcon />
            Continuer avec Google
          </button>

          {/* Login Link */}
          <p className="text-text-secondary lg:max-w-md lg:pt-10 lg:text-left pt-8 mt-auto text-sm text-center">
            Deja membre ?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-primary-dark font-medium underline transition-colors"
            >
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}
