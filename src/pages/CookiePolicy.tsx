import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const CookiePolicy = () => {
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
              Cookie Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  1. Cosa sono i Cookie
                </h2>
                <p className="text-muted-foreground">
                  I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente quando visita un sito web. 
                  I cookie permettono al sito di riconoscere il dispositivo dell'utente e di memorizzare alcune informazioni sulle 
                  preferenze o le azioni passate. Docura utilizza i cookie per migliorare l'esperienza di navigazione e per 
                  raccogliere informazioni statistiche sull'utilizzo del sito.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  2. Tipologie di Cookie Utilizzati
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-heading-md font-medium text-foreground mb-2">
                      2.1 Cookie Tecnici (Necessari)
                    </h3>
                    <p className="text-muted-foreground">
                      Sono essenziali per il corretto funzionamento del sito web. Senza questi cookie, il sito non potrebbe 
                      funzionare correttamente. Non richiedono il consenso dell'utente.
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
                      <li>Cookie di sessione per la navigazione</li>
                      <li>Cookie per la gestione delle preferenze di consenso</li>
                      <li>Cookie per la sicurezza del sito</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-heading-md font-medium text-foreground mb-2">
                      2.2 Cookie Analitici
                    </h3>
                    <p className="text-muted-foreground">
                      Ci permettono di capire come gli utenti utilizzano il sito, raccogliendo informazioni in forma anonima e 
                      aggregata. Questi dati ci aiutano a migliorare le prestazioni e l'usabilità del sito.
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
                      <li>Google Analytics (con IP anonimizzato)</li>
                      <li>Statistiche sulle pagine visitate</li>
                      <li>Tempo di permanenza sul sito</li>
                      <li>Dispositivi e browser utilizzati</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-heading-md font-medium text-foreground mb-2">
                      2.3 Cookie di Profilazione e Marketing
                    </h3>
                    <p className="text-muted-foreground">
                      Sono utilizzati per tracciare la navigazione dell'utente e creare profili sui suoi gusti, abitudini e scelte. 
                      Questi cookie possono essere utilizzati per mostrare pubblicità personalizzata. Richiedono il consenso 
                      esplicito dell'utente.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-heading-md font-medium text-foreground mb-2">
                      2.4 Cookie di Terze Parti
                    </h3>
                    <p className="text-muted-foreground">
                      Il sito potrebbe includere servizi di terze parti che installano cookie propri:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
                      <li><strong>Google Analytics:</strong> per l'analisi del traffico web</li>
                      <li><strong>LinkedIn:</strong> per i pulsanti di condivisione social</li>
                      <li><strong>Servizi di chat e supporto:</strong> per l'assistenza clienti</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  3. Durata dei Cookie
                </h2>
                <p className="text-muted-foreground mb-4">
                  I cookie possono avere durate differenti:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Cookie di sessione:</strong> vengono eliminati automaticamente alla chiusura del browser</li>
                  <li><strong>Cookie persistenti:</strong> rimangono memorizzati per un periodo definito (da pochi giorni a diversi mesi)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  4. Gestione del Consenso
                </h2>
                <p className="text-muted-foreground mb-4">
                  Al primo accesso al sito, viene mostrato un banner che permette di:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Accettare tutti i cookie</li>
                  <li>Rifiutare i cookie non necessari</li>
                  <li>Personalizzare le preferenze per ogni categoria di cookie</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  È possibile modificare le proprie preferenze in qualsiasi momento accedendo alle impostazioni dei cookie 
                  tramite il link presente nel footer del sito.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  5. Come Disabilitare i Cookie
                </h2>
                <p className="text-muted-foreground mb-4">
                  Oltre alle impostazioni del nostro sito, è possibile gestire i cookie direttamente dal browser. 
                  Di seguito i link alle guide dei principali browser:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Apple Safari
                    </a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  <strong>Nota:</strong> La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  6. Diritti dell'Utente
                </h2>
                <p className="text-muted-foreground">
                  L'utente ha il diritto di accedere, rettificare, cancellare i propri dati personali raccolti tramite cookie, 
                  nonché di opporsi al trattamento. Per maggiori informazioni sui diritti privacy, consultare la nostra{" "}
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  7. Contatti
                </h2>
                <p className="text-muted-foreground">
                  Per qualsiasi domanda relativa ai cookie e alla privacy, contattare:{" "}
                  <a href="mailto:ask@docura.it" className="text-primary hover:underline">ask@docura.it</a>
                </p>
              </section>

              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mb-4">
                  8. Aggiornamenti
                </h2>
                <p className="text-muted-foreground">
                  La presente Cookie Policy può essere aggiornata periodicamente. Si consiglia di visitare regolarmente 
                  questa pagina per essere informati su eventuali modifiche.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicy;
