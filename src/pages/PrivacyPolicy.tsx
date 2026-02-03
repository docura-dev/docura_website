import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-display-lg font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  1. Titolare del Trattamento
                </h2>
                <p className="text-muted-foreground">
                  Il Titolare del trattamento dei dati personali è Docura S.r.l., con sede legale in Monza e Brianza (MB), Italia. 
                  Per qualsiasi informazione relativa al trattamento dei dati personali, è possibile contattarci all'indirizzo email: 
                  <a href="mailto:ask@docura.it" className="text-primary hover:underline ml-1">ask@docura.it</a>
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  2. Tipologie di Dati Raccolti
                </h2>
                <p className="text-muted-foreground mb-4">
                  I dati personali raccolti dal sito web includono:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Dati di navigazione:</strong> indirizzo IP, browser utilizzato, sistema operativo, pagine visitate, orari di accesso</li>
                  <li><strong>Dati forniti volontariamente:</strong> nome, cognome, email, numero di telefono, nome azienda, messaggio inseriti nei moduli di contatto</li>
                  <li><strong>Cookie e tecnologie simili:</strong> cookie tecnici, analitici e di profilazione (vedi Cookie Policy)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  3. Finalità del Trattamento
                </h2>
                <p className="text-muted-foreground mb-4">
                  I dati personali sono trattati per le seguenti finalità:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Rispondere alle richieste di contatto e fornire consulenza</li>
                  <li>Gestire la relazione contrattuale e pre-contrattuale</li>
                  <li>Inviare comunicazioni commerciali e newsletter (previo consenso)</li>
                  <li>Adempiere agli obblighi legali e fiscali</li>
                  <li>Migliorare i nostri servizi attraverso analisi statistiche anonime</li>
                  <li>Garantire la sicurezza del sito web</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  4. Base Giuridica del Trattamento
                </h2>
                <p className="text-muted-foreground mb-4">
                  Il trattamento dei dati personali si basa su:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Consenso:</strong> per l'invio di comunicazioni commerciali e l'utilizzo di cookie non tecnici</li>
                  <li><strong>Esecuzione contrattuale:</strong> per la gestione delle richieste di consulenza e dei servizi</li>
                  <li><strong>Legittimo interesse:</strong> per la sicurezza del sito e l'analisi statistica aggregata</li>
                  <li><strong>Obbligo legale:</strong> per adempimenti fiscali e normativi</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  5. Modalità di Trattamento e Conservazione
                </h2>
                <p className="text-muted-foreground">
                  I dati personali sono trattati con strumenti elettronici e cartacei, con logiche di organizzazione ed elaborazione 
                  strettamente correlate alle finalità indicate. Sono adottate misure di sicurezza tecniche e organizzative per 
                  proteggere i dati da accessi non autorizzati, perdita o distruzione. I dati sono conservati per il tempo 
                  strettamente necessario al raggiungimento delle finalità per cui sono stati raccolti, e comunque nel rispetto 
                  dei termini di legge applicabili.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  6. Comunicazione e Diffusione dei Dati
                </h2>
                <p className="text-muted-foreground mb-4">
                  I dati personali potranno essere comunicati a:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Dipendenti e collaboratori del Titolare, in qualità di autorizzati al trattamento</li>
                  <li>Fornitori di servizi tecnologici (hosting, email, CRM) in qualità di Responsabili del trattamento</li>
                  <li>Professionisti e consulenti per adempimenti contabili e legali</li>
                  <li>Autorità competenti, ove richiesto dalla legge</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  I dati non saranno diffusi pubblicamente né ceduti a terzi per finalità di marketing senza il consenso esplicito.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  7. Trasferimento dei Dati
                </h2>
                <p className="text-muted-foreground">
                  I dati sono trattati principalmente all'interno dell'Unione Europea. Qualora si rendesse necessario un 
                  trasferimento verso Paesi terzi, questo avverrà nel rispetto delle garanzie previste dal GDPR, quali 
                  decisioni di adeguatezza della Commissione Europea o clausole contrattuali standard.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  8. Diritti dell'Interessato
                </h2>
                <p className="text-muted-foreground mb-4">
                  Ai sensi degli articoli 15-22 del GDPR, l'interessato ha diritto di:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Accedere ai propri dati personali e ottenerne copia</li>
                  <li>Rettificare dati inesatti o incompleti</li>
                  <li>Cancellare i propri dati ("diritto all'oblio")</li>
                  <li>Limitare il trattamento in determinate circostanze</li>
                  <li>Opporsi al trattamento per motivi legittimi</li>
                  <li>Richiedere la portabilità dei dati</li>
                  <li>Revocare il consenso in qualsiasi momento</li>
                  <li>Proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Per esercitare i propri diritti, scrivere a: 
                  <a href="mailto:ask@docura.it" className="text-primary hover:underline ml-1">ask@docura.it</a>
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  9. Modifiche alla Privacy Policy
                </h2>
                <p className="text-muted-foreground">
                  Il Titolare si riserva il diritto di apportare modifiche alla presente Privacy Policy in qualsiasi momento, 
                  dandone informazione agli utenti su questa pagina. Si prega di consultare regolarmente questa pagina per 
                  verificare eventuali aggiornamenti.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
