import { CalendarDots, Megaphone, FolderOpen } from "@phosphor-icons/react";

const features = [
  {
    icon: CalendarDots,
    title: "Evenements organises",
    description: "Inscription en 1 clic, rappels automatiques",
    bgColor: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Megaphone,
    title: "Annonces persistantes",
    description: "Plus jamais noyees dans le flux de messages",
    bgColor: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: FolderOpen,
    title: "Ressources retrouvables",
    description: "Recherche instantanee, tout est accessible",
    bgColor: "bg-accent/10",
    iconColor: "text-accent",
  },
];

export function Features() {
  return (
    <section className="md:px-8 md:py-16 lg:px-16 lg:py-20 xl:px-24 px-4 py-10">
      <div className="mx-auto">
        <h2 className="mb-8 text-center font-display text-2xl font-semibold text-text-title md:mb-12 md:text-[2.125rem]">
          Pourquoi <span className="text-accent">ComSmart</span> ?
        </h2>

        <div className="md:grid md:grid-cols-3 md:gap-6 md:space-y-0 lg:gap-8 space-y-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, bgColor, iconColor }) {
  const IconComponent = icon;
  return (
    <div className="group rounded-xl hover:-translate-y-1 hover:shadow-lg md:p-6 flex items-start gap-4 p-4 transition-all duration-300 bg-white border border-gray-200 shadow-sm">
      <div
        className={`flex-shrink-0 rounded-lg ${bgColor} p-3 transition-transform duration-300 group-hover:scale-110 md:p-4`}
      >
        <IconComponent
          weight="duotone"
          className={`h-6 w-6 ${iconColor} md:h-7 md:w-7`}
        />
      </div>
      <div>
        <h3 className="font-display text-text-title md:text-lg mb-1 font-semibold">
          {title}
        </h3>
        <p className="text-text-body md:text-base text-sm">{description}</p>
      </div>
    </div>
  );
}
