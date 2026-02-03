import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GradientOrb, FloatingDocument, FloatingDataBlock, FloatingWorkflow, FloatingAIBot, FloatingEmail, FloatingNotification, FloatingChat } from "@/components/ui/FloatingElements";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactReasons = [
  { value: "consulenza", label: "Richiesta consulenza gratuita" },
  { value: "demo", label: "Richiesta demo gratuita" },
  { value: "supporto", label: "Supporto tecnico" },
  { value: "altro", label: "Altro" },
];

const contactInfo = [
  {
    icon: Phone,
    label: "Telefono",
    value: "+39 349 331 7518",
    href: "tel:+393493317518",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ask@docura.it",
    href: "mailto:ask@docura.it",
  },
  {
    icon: MapPin,
    label: "Sede",
    value: "Monza e Brianza (MB), Italia",
    href: null,
  },
  {
    icon: Clock,
    label: "Orari",
    value: "Lun–Ven, 8:00–18:00",
    href: null,
  },
];

const Contatti = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Messaggio inviato!",
      description: "Ti risponderemo entro 24 ore lavorative.",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        <GradientOrb className="w-[400px] h-[400px] -top-20 right-10" />
        <GradientOrb className="w-[300px] h-[300px] bottom-0 left-10 opacity-20" />

        {/* Floating 3D Elements - Right Side */}
        <FloatingDocument className="top-32 right-[15%] hidden lg:block" delay={0.2} />
        <FloatingDataBlock className="bottom-20 right-[25%] hidden lg:block" delay={0.5} />
        <FloatingWorkflow className="top-40 right-[5%] hidden xl:block" delay={0.8} />

        {/* Floating 3D Elements - Left Side */}
        <FloatingAIBot className="top-36 left-[8%] hidden lg:block" delay={0.3} />
        <FloatingEmail className="bottom-28 left-[15%] hidden lg:block" delay={0.6} />
        <FloatingNotification className="top-56 left-[3%] hidden xl:block" delay={0.9} />
        <FloatingChat className="bottom-48 left-[5%] hidden xl:block" delay={1.2} />

        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full"
            >
              Contatti
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-display-lg font-bold text-foreground mb-6"
            >
              Parliamo del tuo{" "}
              <span className="text-gradient-azure">progetto</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Compila il modulo o contattaci direttamente. Ti risponderemo entro
              24 ore lavorative.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="bg-background rounded-2xl p-8 md:p-10 border border-border/50 shadow-card">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-heading-lg font-bold text-foreground mb-3">
                      Grazie per averci contattato!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Abbiamo ricevuto il tuo messaggio. Ti risponderemo entro 24
                      ore lavorative.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="rounded-full"
                    >
                      Invia un altro messaggio
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome e Cognome *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Mario Rossi"
                          required
                          className="rounded-xl h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Azienda *</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="La tua azienda"
                          required
                          className="rounded-xl h-12"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="mario@azienda.it"
                          required
                          className="rounded-xl h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefono</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+39 123 456 7890"
                          className="rounded-xl h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reason">Motivo del contatto *</Label>
                      <Select name="reason" required>
                        <SelectTrigger className="rounded-xl h-12">
                          <SelectValue placeholder="Seleziona un'opzione" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactReasons.map((reason) => (
                            <SelectItem key={reason.value} value={reason.value}>
                              {reason.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Messaggio</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Raccontaci brevemente della tua azienda e delle sfide che vorresti risolvere..."
                        rows={5}
                        className="rounded-xl resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full btn-primary rounded-full py-6 text-base"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Invio in corso..."
                      ) : (
                        <>
                          Invia messaggio
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Inviando questo modulo accetti la nostra{" "}
                      <a href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-heading font-semibold text-foreground mb-6">
                  Contatti diretti
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border/50"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background rounded-2xl p-6 border border-border/50">
                <h4 className="font-semibold text-foreground mb-3">
                  Cosa aspettarti
                </h4>
                <ul className="space-y-3">
                  {[
                    "Risposta entro 24 ore lavorative",
                    "Consulenza gratuita e senza impegno",
                    "Nessuna pressione commerciale",
                    "Conversazione con esperti, non venditori",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;
