import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const technologies = [
  "Python", "JavaScript", "TypeScript", "SQL", "React", "Next.js",
  "Node.js", "Django", "Flask", "PostgreSQL", "MongoDB", "Docker",
  "Git", "Tailwind CSS", "React Native", "Flutter",
];

const TechSection = () => {
  return (
    <section id="tech" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technologies & <span className="text-primary">Compétences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Maîtrise complète des technologies modernes — IA & code traditionnel
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-12"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Odoo certification badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-6 py-3 rounded-xl">
            <span className="text-2xl">🏅</span>
            <div className="text-left">
              <p className="font-heading font-semibold">Intégrateur Certifié Odoo</p>
              <p className="text-sm opacity-80">ERP & CRM — Déploiement & Personnalisation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;
