import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { GradientOrb, FloatingDocument, FloatingDataBlock, FloatingChart, FloatingWorkflow, FloatingAIBot, FloatingEmail, FloatingFiles, FloatingFileDoc } from "@/components/ui/FloatingElements";
import {
  MessageSquare,
  Presentation,
  Settings,
  TestTube,
  Rocket,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import lucaPuglieseImg from "@/assets/team/luca-pugliese.jpeg";
import arturoBassoliImg from "@/assets/team/arturo-bassoli.png";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consulenza gratuita",
    subtitle: "Comprendiamo il tuo business",
    description:
      "Iniziamo con una call conoscitiva per capire la tua azienda, i tuoi processi e le tue sfide quotidiane. Nessun impegno, nessun costo.",
    details: [
      "Analisi dei processi attuali",
      "Identificazione dei colli di bottiglia",
      "Valutazione delle opportunità di automazione",
      "Stima preliminare dei benefici",
    ],
  },
  {
    number: "02",
    icon: Presentation,
    title: "Demo gratuita",
    subtitle: "Vedi Docura sui tuoi documenti",
    description:
      "Costruiamo un prototipo funzionante basato sui tuoi documenti reali. Vedi con i tuoi occhi come Docura può automatizzare il tuo lavoro.",
    details: [
      "Prototipo su documenti reali",
      "Dimostrazione pratica del funzionamento",
      "Risposta a domande tecniche",
      "Valutazione insieme dei risultati",
    ],
  },
  {
    number: "03",
    icon: Settings,
    title: "Configurazione su misura",
    subtitle: "Docura diventa il tuo software",
    description:
      "Configuriamo ogni aspetto di Docura secondo le tue esigenze: regole di validazione, workflow, integrazioni, report e dashboard.",
    details: [
      "Configurazione regole di business",
      "Setup workflow personalizzati",
      "Integrazione con i tuoi sistemi",
      "Personalizzazione report e dashboard",
    ],
  },
  {
    number: "04",
    icon: TestTube,
    title: "Test e validazione",
    subtitle: "Verifichiamo tutto con dati reali",
    description:
      "Testiamo ogni automazione con i tuoi dati reali. Correggiamo, ottimizziamo, perfezioniamo finché tutto funziona alla perfezione.",
    details: [
      "Test con dati di produzione",
      "Validazione dei risultati",
      "Ottimizzazione delle performance",
      "Correzione di eventuali anomalie",
    ],
  },
  {
    number: "05",
    icon: Rocket,
    title: "Installazione e formazione",
    subtitle: "Il tuo team è pronto a partire",
    description:
      "Installiamo Docura nel tuo ambiente e formiamo il tuo team all'utilizzo. Nessuno viene lasciato indietro.",
    details: [
      "Installazione nell'ambiente di produzione",
      "Formazione completa del team",
      "Documentazione personalizzata",
      "Supporto durante l'avvio",
    ],
  },
  {
    number: "06",
    icon: HeartHandshake,
    title: "Supporto continuo",
    subtitle: "Cresciamo insieme al tuo business",
    description:
      "Non ti lasciamo solo. Offriamo supporto continuo, aggiornamenti e nuove automazioni man mano che il tuo business evolve.",
    details: [
      "Assistenza tecnica dedicata",
      "Aggiornamenti e miglioramenti",
      "Nuove automazioni su richiesta",
      "Report periodici sulle performance",
    ],
  },
];

const Metodo = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
        <GradientOrb className="w-[500px] h-[500px] -top-20 right-20" />
        <GradientOrb className="w-[300px] h-[300px] bottom-10 left-0 opacity-20" />

        {/* Floating 3D Elements - Right Side */}
        <FloatingDocument className="top-28 right-[10%] hidden lg:block" delay={0.2} />
        <FloatingChart className="top-48 right-[25%] hidden lg:block" delay={0.5} />
        <FloatingDataBlock className="bottom-24 right-[15%] hidden lg:block" delay={0.8} />
        <FloatingWorkflow className="top-36 right-[3%] hidden xl:block" delay={1.1} />

        {/* Floating 3D Elements - Left Side */}
        <FloatingAIBot className="top-32 left-[10%] hidden lg:block" delay={0.3} />
        <FloatingEmail className="bottom-20 left-[18%] hidden lg:block" delay={0.6} />
        <FloatingFiles className="top-52 left-[5%] hidden xl:block" delay={0.9} />
        <FloatingFileDoc className="bottom-36 left-[8%] hidden xl:block" delay={1.2} />

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full"
            >
              Il Metodo
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-display-lg font-bold text-foreground mb-6"
            >
              Un percorso chiaro verso{" "}
              <span className="text-gradient-azure">l'automazione</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Niente sorprese, niente tecnicismi incomprensibili. Ti guidiamo passo
              dopo passo, dalla prima call fino all'automazione completa dei tuoi
              processi.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 md:left-10 top-24 bottom-0 w-px bg-border" />
                )}

                <div className="flex gap-6 md:gap-10 pb-16">
                  {/* Number badge */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center relative z-10">
                      <span className="text-lg md:text-2xl font-bold text-primary">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {step.subtitle}
                      </span>
                    </div>

                    <h3 className="text-heading-lg md:text-heading-xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>

                    <p className="text-body-lg text-muted-foreground mb-6">
                      {step.description}
                    </p>

                    <div className="bg-background rounded-xl p-6 border border-border/50">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                        Cosa include
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {step.details.map((detail, dIndex) => (
                          <li
                            key={dIndex}
                            className="flex items-center gap-2 text-foreground"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-heading-xl md:text-display-lg font-bold text-foreground">
                Chi c'è dietro Docura
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Luca Pugliese */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border-4 border-border/30">
                  <img
                    src={lucaPuglieseImg}
                    alt="Luca Pugliese"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-heading-lg font-bold text-foreground mb-1">
                  Luca Pugliese
                </h3>
                <p className="text-primary font-medium mb-4">CEO & Co-Founder</p>
                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  32 anni. Esperto in automazione aziendale e intelligenza artificiale.
                  Ha lavorato in contesti multinazionali nei settori Retail, Logistica, Trasporti e Food,
                  trasformando problemi operativi reali in soluzioni concrete per le PMI.
                </p>
              </motion.div>

              {/* Arturo Bassoli */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border-4 border-border/30">
                  <img
                    src={arturoBassoliImg}
                    alt="Arturo Bassoli"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-heading-lg font-bold text-foreground mb-1">
                  Arturo Bassoli
                </h3>
                <p className="text-primary font-medium mb-4">CEO & Co-Founder</p>
                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  Classe 1997. Specializzato in informatica, sviluppo software e automazione di processi aziendali.
                  Esperienza diretta nei settori Logistica, Trasporti e Alimentare,
                  con focus su sistemi affidabili, scalabili e su misura.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-heading-xl md:text-display-lg font-bold text-foreground mb-4">
                Perché questo metodo funziona
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Il nostro approccio è pensato per minimizzare i rischi e massimizzare
                i risultati. Ecco cosa ci distingue.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Nessun rischio iniziale",
                  description:
                    "Consulenza e demo sono gratuite. Vedi i risultati prima di investire.",
                },
                {
                  title: "Su misura, sempre",
                  description:
                    "Non vendiamo software pre-confezionato. Ogni configurazione è unica.",
                },
                {
                  title: "Partnership duratura",
                  description:
                    "Non spariremo dopo l'installazione. Cresciamo insieme al tuo business.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-surface-subtle rounded-2xl p-8 text-center"
                >
                  <h3 className="text-heading font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
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
              Inizia oggi il tuo percorso
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground mb-10"
            >
              Il primo passo è una semplice conversazione. Raccontaci della tua
              azienda e scopri se Docura può aiutarti.
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
                  Prenota consulenza gratuita
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

export default Metodo;
