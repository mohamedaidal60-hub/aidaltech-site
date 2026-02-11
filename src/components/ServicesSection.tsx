import { motion } from "framer-motion";
import serviceDevWeb from "@/assets/service-dev-web.jpg";
import serviceAI from "@/assets/service-ai.jpg";
import serviceERP from "@/assets/service-erp.jpg";
import serviceRedaction from "@/assets/service-redaction.jpg";
import serviceCorrection from "@/assets/service-correction.jpg";
import serviceTraduction from "@/assets/service-traduction.jpg";
import serviceDesign from "@/assets/service-design.jpg";

const services = [
  {
    title: "Développement Web & Mobile",
    description: "Sites vitrines, plateformes, web apps, applications mobiles et systèmes CRM sur mesure.",
    image: serviceDevWeb,
  },
  {
    title: "Développement avec IA",
    description: "Solutions intelligentes augmentées par l'intelligence artificielle pour automatiser et optimiser.",
    image: serviceAI,
  },
  {
    title: "Intégration ERP/CRM Odoo",
    description: "Intégrateur certifié Odoo — déploiement, personnalisation et formation ERP/CRM.",
    image: serviceERP,
  },
  {
    title: "Rédaction & Contenu",
    description: "Articles de blog, rapports professionnels, comptes rendus et contenus web optimisés.",
    image: serviceRedaction,
  },
  {
    title: "Correction & Relecture",
    description: "Relecture approfondie et correction de tous types de documents avec rigueur et précision.",
    image: serviceCorrection,
  },
  {
    title: "Traduction",
    description: "Services de traduction multilingue professionnelle pour tous vos documents et contenus.",
    image: serviceTraduction,
  },
  {
    title: "Design Graphique",
    description: "Chartes graphiques, logos, identité visuelle et supports de communication percutants.",
    image: serviceDesign,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une gamme complète de services numériques pour répondre à tous vos besoins
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
