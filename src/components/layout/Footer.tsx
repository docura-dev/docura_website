import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import docuraLogo from "@/assets/docura-logo.png";

const footerLinks = {
  navigazione: [
    { href: "/", label: "Home" },
    { href: "/soluzione", label: "La Soluzione" },
    { href: "/metodo", label: "Il Metodo" },
    { href: "/contatti", label: "Contatti" },
  ],
  contatti: [
    { icon: Phone, label: "+39 349 331 7518" },
    { icon: Mail, label: "ask@docura.it" },
    { icon: MapPin, label: "Monza e Brianza (MB), Italia" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding-sm">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={docuraLogo} alt="Docura" className="h-8 mb-4 brightness-0 invert" />
            <p className="text-background/70 max-w-md mb-6">
              Docura trasforma i processi aziendali ripetitivi in automazioni
              intelligenti. Meno lavoro manuale, più controllo sul tuo business.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <a
                href="https://www.linkedin.com/company/docura-software"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-background" />
              </a>
            </div>
            <p className="text-sm text-background/50">
              P.IVA: 123456789
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Navigazione</h4>
            <ul className="space-y-3">
              {footerLinks.navigazione.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Contatti</h4>
            <ul className="space-y-3">
              {footerLinks.contatti.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-background/70">
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-background/50 mt-4">
              Lun–Ven, 8:00–18:00
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Docura. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-sm text-background/50 hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie"
                className="text-sm text-background/50 hover:text-background transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
