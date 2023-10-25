export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.works": "Works",
    "nav.uses": "Uses",
    //index page
    "index.works": "See My Work",
    "index.description": "Information Technology Engineer and Developer",
    "index.paragraph":
      "With experience in full-stack development, including Web technologies and languages such as C# and Python I'm able to join your team because I learn fast.If you can imagine it, I can build it.",
  },

  es: {
    "nav.home": "Inicio",
    "nav.works": "Trabajos",
    "nav.uses": "Equipo que uso",
    index: {
      "index.works": "Proyectos",
      "index.description":
        "Ingeniero en tecnologías de la información y desarrollador de software",
      "index.paragraph":
        "Con amplia experiencia en desarrollo full stack, incluyendo tecnologías web y lenguajes como C# y Python. Soy capaz de unirme a tu equipo porque aprendo rápido. Si puedes imaginarlo, puedo construirlo.",
    },
  },
} as const;
