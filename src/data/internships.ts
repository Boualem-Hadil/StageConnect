
import { Internship } from "../types";

export const internships: Internship[] = [
  {
    id: "1",
    title: "Développeur Front-end",
    company: "TechSolutions Algérie",
    location: "Alger, Algérie",
    description: "Rejoignez notre équipe pour développer des interfaces utilisateur modernes et réactives pour nos clients. Vous travaillerez avec React, TypeScript et Tailwind CSS sur des projets innovants.",
    requirements: [
      "Connaissance de React ou Vue.js",
      "Bases solides en HTML, CSS et JavaScript",
      "Étudiant en informatique ou développement web",
      "Disponibilité de 4 à 6 mois"
    ],
    salary: "30000 DA/mois",
    duration: "6 mois",
    postedAt: "2025-05-01",
    logo: "https://picsum.photos/id/28/200",
    tags: ["React", "TypeScript", "Front-end", "UI/UX"],
    applicationLink: "#"
  },
  {
    id: "2",
    title: "Stagiaire Marketing Digital",
    company: "MarketPro Algérie",
    location: "Oran, Algérie",
    description: "Participez à l'élaboration et à la mise en œuvre de stratégies marketing digital pour nos clients de divers secteurs. Vous serez impliqué dans la création de contenu, la gestion des réseaux sociaux et l'analyse des performances.",
    requirements: [
      "Formation en marketing ou communication",
      "Intérêt pour le marketing digital",
      "Créativité et autonomie",
      "Maîtrise des outils bureautiques"
    ],
    salary: "25000 DA/mois",
    duration: "4 mois",
    postedAt: "2025-05-05",
    logo: "https://picsum.photos/id/24/200",
    tags: ["Marketing Digital", "Réseaux Sociaux", "SEO"],
    applicationLink: "#"
  },
  {
    id: "3",
    title: "Stage en Développement Back-end",
    company: "DataSoft Algérie",
    location: "Constantine, Algérie",
    description: "Intégrez notre équipe de développement back-end pour concevoir et optimiser des API et des bases de données. Vous participerez au développement de fonctionnalités serveur pour nos applications web et mobiles.",
    requirements: [
      "Connaissances en Node.js, Python ou Java",
      "Bases en SQL et bases de données",
      "Étudiant en informatique ou génie logiciel",
      "Esprit d'équipe et rigueur"
    ],
    salary: "28000 DA/mois",
    duration: "5 mois",
    postedAt: "2025-05-08",
    logo: "https://picsum.photos/id/60/200",
    tags: ["Back-end", "Node.js", "API", "Base de données"],
    applicationLink: "#"
  },
  {
    id: "4",
    title: "Assistant Chef de Projet",
    company: "Innov Project Algérie",
    location: "Annaba, Algérie",
    description: "Assistez notre chef de projet dans la gestion, planification et suivi des projets clients. Vous participerez aux réunions, préparerez des rapports et coordonnerez les équipes pour assurer la livraison des projets dans les délais.",
    requirements: [
      "Formation en gestion de projet ou commerce",
      "Bonnes capacités organisationnelles",
      "Maîtrise de MS Project et Excel",
      "Aisance relationnelle"
    ],
    salary: "27000 DA/mois",
    duration: "6 mois",
    postedAt: "2025-05-10",
    logo: "https://picsum.photos/id/42/200",
    tags: ["Gestion de projet", "Planification", "Communication"],
    applicationLink: "#"
  },
  {
    id: "5",
    title: "Stagiaire UX/UI Designer",
    company: "DesignStudio Algérie",
    location: "Sétif, Algérie",
    description: "Participez à la conception d'interfaces utilisateur intuitives et esthétiques pour des applications web et mobiles. Vous travaillerez sur la recherche utilisateur, la création de wireframes et prototypes, et collaborerez avec les développeurs.",
    requirements: [
      "Formation en design graphique ou UX/UI",
      "Maîtrise de Figma ou Adobe XD",
      "Sens esthétique et créativité",
      "Connaissance des principes de l'expérience utilisateur"
    ],
    salary: "25000 DA/mois",
    duration: "4 mois",
    postedAt: "2025-05-12",
    logo: "https://picsum.photos/id/26/200",
    tags: ["UX/UI", "Design", "Figma", "Prototypage"],
    applicationLink: "#"
  },
  {
    id: "6",
    title: "Stage en Cybersécurité",
    company: "SecureTech Algérie",
    location: "Alger, Algérie",
    description: "Rejoignez notre équipe de sécurité informatique pour participer à l'audit et au renforcement de la sécurité de nos systèmes. Vous serez impliqué dans des tests de pénétration, l'analyse des risques et la mise en place de solutions de protection.",
    requirements: [
      "Formation en sécurité informatique ou réseaux",
      "Connaissances des principes de base en cybersécurité",
      "Intérêt pour les nouvelles menaces et vulnérabilités",
      "Rigueur et confidentialité"
    ],
    salary: "32000 DA/mois",
    duration: "6 mois",
    postedAt: "2025-05-15",
    logo: "https://picsum.photos/id/48/200",
    tags: ["Cybersécurité", "Audit", "Réseau", "Protection des données"],
    applicationLink: "#"
  }
];

export const locations = ["Alger, Algérie", "Oran, Algérie", "Constantine, Algérie", "Annaba, Algérie", "Sétif, Algérie"];
export const durations = ["4 mois", "5 mois", "6 mois"];
export const allTags = Array.from(new Set(internships.flatMap(internship => internship.tags)));
