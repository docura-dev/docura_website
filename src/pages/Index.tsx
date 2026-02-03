import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import {
  FloatingDocument,
  FloatingDataBlock,
  FloatingChart,
  FloatingWorkflow,
  FloatingAIBot,
  FloatingEmail,
  FloatingNotification,
  FloatingChat,
  GradientOrb,
} from "@/components/ui/FloatingElements";
import { PresentationSlider } from "@/components/ui/PresentationSlider";
import {
  FileText,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle2,
  Truck,
  Factory,
  Building2,
  Wrench,
  Globe,
  ShoppingBag,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Risparmio di tempo",
    description:
      "Automatizza ore di lavoro manuale quotidiano. Il tuo team può concentrarsi su attività ad alto valore.",
  },
  {
    icon: Shield,
    title: "Zero errori",
    description:
      "Elimina gli errori di data entry e trascrizione. Dati sempre accurati e verificati automaticamente.",
  },
  {
    icon: TrendingUp,
    title: "Scalabilità",
    description:
      "Gestisci volumi crescenti senza aumentare il personale. Docura scala con il tuo business.",
  },
  {
    icon: Zap,
    title: "Operazioni più veloci",
    description:
      "Processi che richiedevano ore ora si completano in secondi. Risposte immediate ai tuoi clienti.",
  },
  {
    icon: FileText,
    title: "Controllo totale",
    description:
      "Dashboard in tempo reale per monitorare ogni processo. Trasparenza completa sulle operazioni.",
  },
  {
    icon: Users,
    title: "Team più produttivo",
    description:
      "Libera il tuo personale dalle attività ripetitive. Maggiore soddisfazione e focus strategico.",
  },
];

const industries = [
  { icon: Truck, name: "Logistica e trasporti" },
  { icon: Factory, name: "Produttori alimentari" },
  { icon: Globe, name: "Import-export" },
  { icon: Building2, name: "Uffici amministrativi" },
  { icon: Wrench, name: "Back office" },
  { icon: ShoppingBag, name: "Vendita al dettaglio" },
];

const beforeAfter = {
  before: [
    "Ore di data entry manuale ogni giorno",
    "Errori frequenti nella trascrizione dati",
    "Documenti persi o difficili da trovare",
    "Ritardi nelle risposte ai clienti",
    "Processi lenti e non scalabili",
  ],
  after: [
    "Dati estratti e inseriti automaticamente",
    "Validazione automatica, zero errori",
    "Archivio digitale organizzato e ricercabile",
    "Risposte immediate e automatizzate",
    "Processi veloci che crescono con te",
  ],
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background elements */}
        <GradientOrb className="w-[600px] h-[600px] -top-40 -right-40" />
        <GradientOrb className="w-[400px] h-[400px] bottom-20 -left-20" />
        
        {/* Floating elements - Right side */}
        <FloatingDocument className="top-32 right-[10%] hidden lg:block" delay={0.2} />
        <FloatingChart className="bottom-32 right-[15%] hidden lg:block" delay={0.6} />
        <FloatingNotification className="top-56 right-[5%] hidden lg:block" delay={0.9} />
        <FloatingEmail className="bottom-48 right-[8%] hidden lg:block" delay={1.1} />
        
        {/* Floating elements - Left side */}
        <FloatingDataBlock className="top-48 left-[8%] hidden lg:block" delay={0.4} />
        <FloatingWorkflow className="bottom-40 left-[12%] hidden lg:block" delay={0.8} />
        <FloatingAIBot className="top-36 left-[5%] hidden lg:block" delay={1.0} />
        <FloatingChat className="bottom-56 left-[6%] hidden lg:block" delay={1.2} />

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                Automazione intelligente per le PMI
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-display-lg lg:text-display-xl font-bold text-foreground mb-6"
            >
              Automatizza i tuoi processi aziendali.{" "}
              <span className="text-gradient-azure">Semplicemente.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Docura automatizza data entry, lettura documenti, report, email e workflow
              aziendali. Meno lavoro manuale, più controllo, zero errori.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="btn-primary rounded-full px-8 py-6 text-base"
              >
                <Link to="/contatti">
                  Richiedi consulenza gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base"
              >
                <Link to="/soluzione">Scopri come funziona</Link>
              </Button>
            </motion.div>

            {/* Presentation Slider */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-16 relative"
            >
              <PresentationSlider className="w-full max-w-5xl mx-auto" interval={5000} />
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
      </section>

      {/* What is Docura */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-wide">
          <SectionHeading
            badge="Cos'è Docura"
            title="La piattaforma che automatizza il tuo lavoro ripetitivo"
            description="Docura non è solo un lettore di documenti. È una piattaforma AI che trasforma ogni processo aziendale ripetitivo in un'automazione su misura per la tua azienda."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {[
              "Lettura e validazione documenti",
              "Estrazione dati da PDF e Excel",
              "Data entry automatico",
              "Alert e notifiche",
              "Email ricorrenti automatiche",
              "Report automatizzati",
              "Workflow interni personalizzati",
              "Agenti AI su misura",
              "Integrazioni con i tuoi software",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border/50"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problems & Before/After */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Il problema"
            title="Smetti di sprecare ore in attività ripetitive"
            description="Ogni giorno il tuo team perde tempo prezioso in lavori manuali che potrebbero essere automatizzati. È tempo di cambiare."
          />

          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-destructive/5 rounded-2xl p-8 border border-destructive/20"
            >
              <h3 className="text-heading-lg font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center text-destructive text-sm font-bold">
                  ✗
                </span>
                Prima di Docura
              </h3>
              <ul className="space-y-4">
                {beforeAfter.before.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-primary/5 rounded-2xl p-8 border border-primary/20"
            >
              <h3 className="text-heading-lg font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                  ✓
                </span>
                Con Docura
              </h3>
              <ul className="space-y-4">
                {beforeAfter.after.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-wide">
          <SectionHeading
            badge="I vantaggi"
            title="Perché scegliere Docura"
            description="Un investimento che si ripaga in settimane, non anni. Ecco cosa ottieni con l'automazione Docura."
          />

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Settori"
            title="Docura lavora con le aziende di ogni settore"
            description="Dalla logistica alla produzione, dall'import-export alla manutenzione: ogni azienda con processi ripetitivi può beneficiare di Docura."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2.5 bg-background rounded-full border border-border/50 shadow-card"
              >
                <industry.icon className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground text-sm">{industry.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-surface-subtle relative overflow-hidden">
        <GradientOrb className="w-[500px] h-[500px] top-0 right-0 opacity-10" />
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-display-lg md:text-display font-bold text-foreground mb-6"
            >
              Pronto a trasformare le tue operazioni?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground mb-10"
            >
              Richiedi una consulenza gratuita. Analizzeremo insieme i tuoi processi e
              ti mostreremo come Docura può aiutarti.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                asChild
                size="lg"
                className="btn-primary rounded-full px-8 py-6 text-base"
              >
                <Link to="/contatti">
                  Richiedi consulenza gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
