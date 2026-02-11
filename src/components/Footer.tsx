import { Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              <span className="text-primary">AIDAL</span>DEV
            </h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Agence de développement & services numériques. IA, code pur, ERP Odoo, rédaction et design graphique.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Développement Web & Mobile</li>
              <li>Solutions IA</li>
              <li>Intégration Odoo ERP/CRM</li>
              <li>Rédaction & Traduction</li>
              <li>Design Graphique</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+213777439540" className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Phone className="h-4 w-4 text-primary" />
                +213 777 439 540
              </a>
              <a
                href="https://wa.me/213777439540"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                WhatsApp
              </a>
              <a href="mailto:aidalmimo@gmail.com" className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Mail className="h-4 w-4 text-primary" />
                aidalmimo@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/10 mt-12 pt-8 text-center text-sm opacity-50">
          © {new Date().getFullYear()} AIDALDEV. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
