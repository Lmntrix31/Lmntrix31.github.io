import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Menu",
      items: [
        {
          title: "Ux Design",
          href: "/#features",
          description: "Examinez de plus près ce qu'est l'Ux Design.",
        },
        {
          title: "Portfolio",
          href: "https://www.figma.com/proto/ImPxOsAwzC3xyelaAcRIeE/PortFolio?page-id=0%3A1&type=design&node-id=94-2&viewport=-814%2C983%2C0.23&t=6GBSRDBByE5wlVfV-1&scaling=min-zoom&starting-point-node-id=94%3A2",
          description: "Suivez-moi pour recevoir les dernières mises à jour et nouvelles.",
          external: true,
        },
        {
          title: "Source Code",
          href: "https://github.com/mickasmt/astro-nomy",
          description: "Vous souhaitez mettre le dépôt en star ? Commençons!",
          external: true,
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Examples",
      items: [
        {
          title: "Blog",
          href: "/blog",
          description: "Explorez l'art de l'UX avec des conseils pratiques.💡 #UXDesign",
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX documentation site built using Content Collections.",
        },
        {
          title: "Authentification",
          href: "/login",
          description: "Login and register pages for authentification.",
          disabled: true,
        },
        {
          title: "Dashboard",
          href: "/#dashboard",
          description: "A dashboard panel after authentification.",
          disabled: true,
        },
        {
          title: "Ecommerce",
          href: "/#examples/ecommerce",
          description:
            "Different pages of an ecommerce app fetching data from an API.",
          disabled: true,
        },
        {
          title: "Social Media",
          href: "/#examples/social-media",
          description: "Different components & pages of an social media app.",
          disabled: true,
        },
      ],
    },
  ],
  links: [
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
};
