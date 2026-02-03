import { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeSlash, Users, CalendarCheck, Megaphone } from "@phosphor-icons/react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log("Login:", { email, password });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Branding (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-[55%]">
        <div className="relative flex w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary p-12 xl:p-16">
          {/* Background decorative elements */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/5"></div>
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/5"></div>
          <div className="absolute right-1/4 top-1/3 h-40 w-40 rounded-full bg-accent/20"></div>

          {/* Logo */}
          <Link to="/" className="relative z-10 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <img src="/logo.png" alt="" className="h-8 w-8" />
            </div>
            <span className="font-display text-2xl font-bold text-white">ComSmart</span>
          </Link>

          {/* Main content */}
          <div className="relative z-10 my-auto">
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight text-white xl:text-5xl">
              Ta communaute
              <br />
              t'attend
            </h2>
            <p className="max-w-md text-lg text-white/80">
              Retrouve tes evenements, ressources et discussions au meme endroit.
            </p>

            {/* Features list */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Users weight="duotone" className="h-5 w-5" />
                </div>
                <span>Connecte-toi avec ta communaute</span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <CalendarCheck weight="duotone" className="h-5 w-5" />
                </div>
                <span>Ne rate plus aucun evenement</span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Megaphone weight="duotone" className="h-5 w-5" />
                </div>
                <span>Reste informe des annonces</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="relative z-10 text-sm text-white/60">
            © 2026 ComSmart. Tous droits reserves.
          </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex w-full flex-col bg-white px-6 py-8 lg:w-1/2 lg:px-12 xl:w-[45%] xl:px-20">
        <div className="flex flex-1 flex-col lg:justify-center lg:py-12">
          {/* Logo (mobile only) */}
          <div className="flex items-center justify-center gap-2 lg:hidden">
            <img src="/logo.png" alt="" className="h-8 w-8" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text font-display text-xl font-bold text-transparent">
              ComSmart
            </span>
          </div>

          {/* Header */}
          <div className="mt-8 text-center lg:mt-0 lg:text-left">
            <h1 className="font-display text-2xl font-bold text-text-title lg:text-3xl">
              Bon retour parmi nous
            </h1>
            <p className="mt-2 text-base text-text-secondary">
              Connecte-toi pour continuer
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5 lg:max-w-md">
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-text-title">
                Email <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ton@email.com"
                required
                className="rounded-lg border border-gray-200 px-4 py-3 text-base text-text-body placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <label className="text-base font-medium text-text-title">
                Mot de passe <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 pr-12 text-base text-text-body placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary transition-colors hover:text-text-body"
                >
                  {showPassword ? (
                    <Eye className="h-5 w-5" />
                  ) : (
                    <EyeSlash className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-primary py-4 font-display text-base font-semibold text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
            >
              Se connecter
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 flex items-center gap-4 lg:max-w-md">
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="text-sm text-text-secondary">ou</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 bg-gray-50 py-4 font-display text-base font-medium text-text-body transition-all duration-300 hover:bg-gray-100 active:scale-[0.98] lg:max-w-md"
          >
            <GoogleIcon />
            Continuer avec Google
          </button>

          {/* Register Link */}
          <p className="mt-auto pt-8 text-center text-sm text-text-secondary lg:max-w-md lg:pt-10 lg:text-left">
            Pas encore membre ?{" "}
            <Link
              to="/register"
              className="font-medium text-primary underline transition-colors hover:text-primary-dark"
            >
              Creer un compte
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
