import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Upload, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().max(20).optional(),
  company: z.string().trim().max(100).optional(),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  description: z.string().trim().max(5000).optional(),
});

const serviceOptions = [
  "Développement Web & Mobile",
  "Développement avec IA",
  "Intégration ERP/CRM Odoo",
  "Rédaction & Contenu",
  "Correction & Relecture",
  "Traduction",
  "Design Graphique",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", service: "", description: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validated = leadSchema.parse(formData);
      let fileUrl: string | null = null;

      if (file) {
        const ext = file.name.split(".").pop();
        const filePath = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from("cahiers-des-charges")
          .upload(filePath, file);
        if (uploadError) throw uploadError;
        fileUrl = filePath;
      }

      const { error } = await supabase.from("leads").insert({
        name: validated.name,
        email: validated.email,
        phone: validated.phone || null,
        company: validated.company || null,
        service: validated.service,
        description: validated.description || null,
        file_url: fileUrl,
      });

      if (error) throw error;
      setSubmitted(true);
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        toast({ title: "Erreur de validation", description: err.errors[0].message, variant: "destructive" });
      } else {
        toast({ title: "Erreur", description: "Une erreur est survenue. Réessayez.", variant: "destructive" });
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-secondary/50 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-16"
          >
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold mb-4">Demande envoyée !</h2>
            <p className="text-muted-foreground">
              Merci pour votre confiance. Vous recevrez un devis détaillé accompagné d'une étude de marché sous 48h.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-secondary/50 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Demander un <span className="text-primary">devis gratuit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Décrivez votre projet et recevez un devis personnalisé avec une étude de marché sous 48h
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card rounded-2xl p-8 border border-border shadow-sm space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet *</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Votre nom" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="votre@email.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+213 ..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Entreprise</Label>
              <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Nom de l'entreprise" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service demandé *</Label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Sélectionnez un service</option>
              {serviceOptions.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description du projet</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Décrivez votre besoin en quelques lignes..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label>Cahier des charges (optionnel)</Label>
            <label className="flex items-center gap-3 border-2 border-dashed border-border rounded-lg p-4 cursor-pointer hover:border-primary/50 transition-colors">
              <Upload className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {file ? file.name : "Cliquez pour uploader votre cahier des charges (PDF, DOC...)"}
              </span>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx,.txt,.odt"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </label>
          </div>

          <div className="bg-primary/5 rounded-lg p-4 text-sm text-muted-foreground">
            ✦ Suite à votre demande, vous recevrez un devis détaillé accompagné d'une étude de marché sous 48h.
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Envoi en cours..." : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Envoyer ma demande
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
