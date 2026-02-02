# Guide du Developpeur - ComSmart Frontend

Ce document explique l'architecture et les conventions du projet pour faciliter les contributions.

## Demarrage rapide

```bash
# Installation des dependances
npm install

# Lancer le serveur de developpement
npm run dev

# Build de production
npm run build

# Verification du code (ESLint)
npm run lint
```

## Stack technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| React | 19 | Framework UI |
| Vite | 7 | Build tool |
| Tailwind CSS | 4 | Styles (utility-first) |
| React Router | 7 | Routing |
| React Query | 5 | Gestion d'etat serveur |
| Axios | 1.13 | Requetes HTTP |
| Phosphor Icons | - | Icones |

## Structure du projet

```
src/
├── components/     # Composants reutilisables
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── Testimonial.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
│
├── pages/          # Pages (cibles des routes)
│   └── Landing/
│       └── Landing.jsx
│
├── routes/         # Configuration du routeur
│   └── index.jsx
│
├── contexts/       # React Context (etat global)
├── hooks/          # Custom hooks
├── services/       # Appels API (Axios)
├── assets/         # Images, fonts, etc.
│
├── App.jsx         # Composant racine
├── main.jsx        # Point d'entree
└── index.css       # Styles globaux + theme Tailwind
```

## Design System

### Couleurs

Definies dans `src/index.css` via `@theme`:

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | #7C3AED | Boutons, liens, elements interactifs |
| `primary-light` | #EDE9FE | Fond bouton secondaire, fond sections |
| `primary-dark` | #6D28D9 | Hover boutons primaires |
| `accent` | #F97316 | Texte mis en avant, icones decoratives |
| `accent-dark` | #EA580C | Hover elements accent |
| `text-title` | #18181B | Titres |
| `text-body` | #52525B | Corps de texte |
| `text-secondary` | #71717A | Texte secondaire |

### Typographie

Deux polices sont utilisees:

- **Manrope** (`font-display`) - Titres
  - H1: 40px Bold
  - H2: 34px SemiBold
  - H3: 28px SemiBold
  - H4: 24px Medium

- **Inter** (`font-sans`) - Corps de texte
  - Body Large: 28px
  - Body: 24px
  - Body Small: 20px

### Boutons

```jsx
// Bouton primaire
<button className="rounded-lg bg-primary px-6 py-2.5 font-display text-sm font-semibold text-white hover:bg-primary-dark">
  Action
</button>

// Bouton secondaire
<button className="rounded-lg bg-primary-light px-6 py-2.5 font-display text-sm font-semibold text-primary hover:bg-primary hover:text-white">
  Action secondaire
</button>
```

**Regles:**
- Border-radius: `rounded-lg` (8px)
- Pas de `rounded-full`

### Icones

Utiliser [Phosphor Icons](https://phosphoricons.com/) avec le poids `duotone`:

```jsx
import { IconName } from "@phosphor-icons/react";

<IconName weight="duotone" className="h-6 w-6 text-accent" />
```

Les icones decoratives (non-cliquables) utilisent la couleur `accent` (orange).

## Conventions de code

### Composants

- Composants fonctionnels uniquement
- Un composant par fichier
- Export nomme (pas de default export pour les composants)

```jsx
// Bon
export function MonComposant() {
  return <div>...</div>;
}

// Eviter
export default function MonComposant() { ... }
```

### Styling

- **Mobile-first**: Commencer par les styles mobiles, puis ajouter les breakpoints
- Utiliser les classes Tailwind directement dans le JSX
- Pas de CSS modules ni styled-components

```jsx
// Mobile-first
<div className="px-4 md:px-6 lg:px-8">
  <h1 className="text-2xl md:text-3xl lg:text-4xl">
    Titre
  </h1>
</div>
```

### Nommage

- Composants: PascalCase (`Header.jsx`, `FeatureCard`)
- Hooks: camelCase avec prefixe `use` (`useAuth`, `useFetch`)
- Services: camelCase (`authService.js`)
- Contextes: PascalCase avec suffixe `Context` (`AuthContext.js`)

## Routes

Les routes sont definies dans `src/routes/index.jsx`:

```jsx
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    index: true,
    Component: Landing,
  },
  // Ajouter les nouvelles routes ici
]);
```

## Assets

- **Logo**: `/public/logo.png`
- **Favicons**: `/public/favicon-*.png`
- **Images**: Placer dans `/public/` pour les images statiques

## Ajout d'une nouvelle page

1. Creer le dossier dans `src/pages/NomPage/`
2. Creer le composant `NomPage.jsx`
3. Ajouter la route dans `src/routes/index.jsx`

```jsx
// src/pages/About/About.jsx
export function About() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Contenu */}
    </div>
  );
}
o-Au
// src/routes/index.jsx
import { About } from "../pages/About/About";

export const routes = createBrowserRouter([
  { index: true, Component: Landing },
  { path: "about", Component: About },
]);
```

## Ajout d'un nouveau composant

1. Creer le fichier dans `src/components/`
2. Utiliser les tokens du design system
3. Penser mobile-first

```jsx
// src/components/Card.jsx
export function Card({ title, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="mb-2 font-display font-semibold text-text-title">
        {title}
      </h3>
      <div className="text-sm text-text-body">
        {children}
      </div>
    </div>
  );
}
```

## Animations et Interactions

### Animations globales

Definies dans `src/index.css`:

| Animation | Classe | Usage |
|-----------|--------|-------|
| `fade-in` | `animate-fade-in` | Apparition en fondu |
| `slide-up` | `animate-slide-up` | Glissement vers le haut |
| `scale-in` | `animate-scale-in` | Zoom progressif |
| `float` | `style={{ animation: "float 3s ease-in-out infinite" }}` | Flottement continu |

### Effets au survol (hover)

```jsx
// Bouton avec ombre coloree et effet clic
<button className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 active:scale-95">
  Action
</button>

// Card avec elevation
<div className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
  Contenu
</div>

// Element avec zoom
<div className="transition-transform duration-300 hover:scale-110">
  Contenu
</div>
```

### Regles d'animation

- **Duree standard**: `duration-300` (300ms)
- **Duree longue**: `duration-500` (500ms) pour les images
- **Ombres colorees**: `shadow-primary/25` ou `shadow-primary/30`
- **Scale au clic**: `active:scale-95`
- **Elevation au survol**: `hover:-translate-y-1`

### Effet glassmorphism (Header)

```jsx
<header className="bg-white/95 backdrop-blur-sm">
```

## Questions?

Ouvrir une issue sur le repository GitHub.
