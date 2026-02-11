import { motion } from "framer-motion";
import { MousePointerClick, FileText, BarChart3, Rocket } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Choisissez votre service",
    description: "Sélectionnez parmi nos prestations celle qui correspond à votre besoin.",
  },
  {
    icon: FileText,
    title: "Décrivez votre projet",
    description: "Expliquez vos attentes et uploadez votre cahier des charges si disponible.",
  },
  {
    icon: BarChart3,
    title: "Devis + Étude de marché",
    description: "Recevez sous 48h un devis détaillé accompagné d'une étude de marché.",
  },
  {
    icon: Rocket,
    title: "Lancement du projet",
    description: "Nous démarrons la réalisation avec un suivi transparent et régulier.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-secondary/50 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Comment ça <span className="text-primary">marche</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et transparent en 4 étapes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center relative"
            >
              <div className="relative inline-flex">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-9 w-9 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
