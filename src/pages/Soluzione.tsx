import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  FloatingDocument,
  FloatingDataBlock,
  FloatingChart,
  FloatingWorkflow,
  FloatingAIBot,
  FloatingEmail,
  FloatingNotification,
  FloatingFiles,
  GradientOrb,
} from "@/components/ui/FloatingElements";
import {
  FileSearch,
  CheckSquare,
  GitBranch,
  Bell,
  BarChart3,
  Settings2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const capabilities = [
  {
    icon: FileSearch,
    title: "Lettura e estrazione documenti",
    description:
      "Docura legge PDF, fatture, DDT, ordini, Excel e qualsiasi documento strutturato. Estrae i dati rilevanti e li organizza automaticamente.",
    features: [
      "OCR intelligente per documenti scansionati",
      "Riconoscimento automatico dei campi",
      "Estrazione dati strutturati",
      "Supporto per formati multipli",
    ],
  },
  {
    icon: CheckSquare,
    title: "Validazione e controlli",
    description:
      "Verifica automatica della correttezza dei dati. Confronta documenti, individua anomalie e segnala errori prima che diventino problemi.",
    features: [
      "Confronto automatico tra documenti",
      "Validazione regole di business",
      "Rilevamento anomalie",
      "Segnalazione errori in tempo reale",
    ],
  },
  {
    icon: GitBranch,
    title: "Automazione workflow",
    description:
      "Crea flussi di lavoro automatizzati che guidano i documenti attraverso ogni fase del processo, dall'arrivo all'archiviazione.",
    features: [
      "Workflow personalizzabili",
      "Routing intelligente",
      "Approvazioni automatiche",
      "Tracciamento completo",
    ],
  },
  {
    icon: Bell,
    title: "Alert e notifiche",
    description:
      "Ricevi avvisi su scadenze, anomalie, documenti mancanti o qualsiasi evento rilevante. Mai più deadline dimenticate.",
    features: [
      "Notifiche in tempo reale",
      "Alert personalizzabili",
      "Reminder automatici",
      "Escalation intelligente",
    ],
  },
  {
    icon: BarChart3,
    title: "Report automatizzati",
    description:
      "Genera report dettagliati automaticamente. Dati aggiornati, grafici chiari, insights utili senza lavoro manuale.",
    features: [
      "Report schedulati",
      "Dashboard in tempo reale",
      "Export in formati multipli",
      "KPI automatici",
    ],
  },
  {
    icon: Settings2,
    title: "Integrazioni e API",
    description:
      "Docura si collega ai tuoi software esistenti: ERP, CRM, gestionali. I dati fluiscono automaticamente tra i sistemi.",
    features: [
      "API RESTful",
      "Connettori pre-costruiti",
      "Integrazione bidirezionale",
      "Sincronizzazione in tempo reale",
    ],
  },
];

const Soluzione = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        <GradientOrb className="w-[500px] h-[500px] -top-20 -right-20" />
        <GradientOrb className="w-[300px] h-[300px] bottom-20 -left-10" />
        
        {/* Floating elements - Right side */}
        <FloatingChart className="top-40 right-[12%] hidden lg:block" delay={0.3} />
        <FloatingEmail className="top-56 right-[6%] hidden lg:block" delay={0.6} />
        <FloatingNotification className="bottom-40 right-[10%] hidden lg:block" delay={0.9} />
        <FloatingDataBlock className="bottom-28 right-[5%] hidden lg:block" delay={1.1} />
        
        {/* Floating elements - Left side */}
        <FloatingWorkflow className="bottom-32 left-[10%] hidden lg:block" delay={0.5} />
        <FloatingDocument className="top-60 left-[15%] hidden lg:block" delay={0.7} />
        <FloatingAIBot className="top-36 left-[6%] hidden lg:block" delay={0.8} />
        <FloatingFiles className="bottom-48 left-[5%] hidden lg:block" delay={1.0} />

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full"
            >
              La Soluzione
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-display-lg font-bold text-foreground mb-6"
            >
              Una piattaforma modulare che si adatta ai{" "}
              <span className="text-gradient-azure">tuoi processi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Docura non è un software rigido. È una piattaforma flessibile che
              configuriamo su misura per le esigenze specifiche della tua azienda.
              Ogni automazione è pensata per i tuoi documenti, i tuoi flussi, le tue
              regole di business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="btn-primary rounded-full px-8 py-6 text-base"
              >
                <Link to="/contatti">
                  Richiedi una demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base"
              >
                <Link to="/metodo">Scopri il metodo</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-wide">
          <SectionHeading
            badge="Funzionalità"
            title="Cosa può fare Docura per te"
            description="Ogni modulo di Docura risolve un problema concreto. Scegli quelli che servono alla tua azienda o usa l'intera piattaforma per un'automazione completa."
          />

          <div className="mt-16 space-y-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8 md:p-10 border border-border/50 shadow-card"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <capability.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-heading-lg font-bold text-foreground mb-4">
                      {capability.title}
                    </h3>
                    <p className="text-body-lg text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                  <div className="lg:pl-8 lg:border-l lg:border-border">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      Caratteristiche
                    </h4>
                    <ul className="space-y-3">
                      {capability.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-center gap-3 text-foreground"
                        >
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization emphasis */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-10 md:p-16 border border-primary/20"
            >
              <h2 className="text-heading-xl md:text-display-lg font-bold text-foreground mb-6">
                Docura si adatta a te,<br />non il contrario
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Non ti chiediamo di cambiare i tuoi processi per usare il nostro
                software. Analizziamo come lavori e configuriamo Docura per
                automatizzare esattamente quello che fai oggi, ma meglio e più
                velocemente.
              </p>
              <Button
                asChild
                size="lg"
                className="btn-primary rounded-full px-8 py-6 text-base"
              >
                <Link to="/metodo">
                  Scopri come lavoriamo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-display-lg font-bold text-foreground mb-6"
            >
              Vuoi vedere Docura in azione?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground mb-10"
            >
              Richiedi una demo gratuita basata sui tuoi documenti reali. Ti
              mostriamo esattamente come Docura può automatizzare i tuoi processi.
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
                  Richiedi demo gratuita
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

export default Soluzione;
