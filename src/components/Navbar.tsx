import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("hero")} className="font-heading text-2xl font-bold tracking-tight">
          <span className="text-primary">AIDAL</span>
          <span className="text-foreground">DEV</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {[
            ["Services", "services"],
            ["Process", "process"],
            ["Technologies", "tech"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {label}
            </button>
          ))}
          <Button onClick={() => scrollTo("contact")} size="sm">
            <Phone className="h-4 w-4 mr-1" />
            Devis gratuit
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-2">
          {[
            ["Services", "services"],
            ["Process", "process"],
            ["Technologies", "tech"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {label}
            </button>
          ))}
          <Button onClick={() => scrollTo("contact")} size="sm" className="w-full">
            Devis gratuit
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
