export default function PrivacyPage() {
  return (
    <div style={{ background: '#FDF8F0', minHeight: '100vh', paddingTop: 100, paddingBottom: 80 }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 32px' }}>

        <p style={{
          fontSize: 11, fontWeight: 600, letterSpacing: '0.3em',
          textTransform: 'uppercase', color: '#722F37', marginBottom: 16,
        }}>
          Informativa
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem, 4vw, 2.8rem)',
          fontWeight: 600, color: '#3C2415',
          lineHeight: 1.2, marginBottom: 48,
        }}>
          Privacy Policy &amp; Cookie
        </h1>

        <Section title="1. Titolare del trattamento">
          <p>
            BAR CAFFINERIA DI LASCANO ZOLANO CINTHYA FERNANDA<br />
            P.IVA / C.F.: 13435150969<br />
            Via Privata Giovanni Battista Prandina, 1 — 20128 Milano (MI)<br />
            Email: <a href="mailto:cinthyalascano@pec.it" style={linkStyle}>cinthyalascano@pec.it</a>
          </p>
        </Section>

        <Section title="2. Dati raccolti e finalità">
          <p>
            Il presente sito web utilizza esclusivamente <strong>cookie tecnici</strong> strettamente
            necessari al funzionamento delle pagine (es. memorizzazione della preferenza sui cookie).
            Non vengono raccolti dati personali degli utenti, non vengono utilizzati cookie di
            profilazione né strumenti di analisi di terze parti (es. Google Analytics).
          </p>
        </Section>

        <Section title="3. Cookie tecnici">
          <p>
            I cookie tecnici sono file di testo salvati sul dispositivo dell'utente al solo scopo di
            garantire il corretto funzionamento del sito. In particolare viene salvata localmente
            (tramite <code>localStorage</code>) la preferenza espressa sul banner cookie.
            Nessuna informazione viene trasmessa a server esterni.
          </p>
        </Section>

        <Section title="4. Base giuridica del trattamento">
          <p>
            Il trattamento dei soli dati tecnici è fondato sul legittimo interesse del Titolare
            ai sensi dell'art. 6, par. 1, lett. f) del Regolamento UE 2016/679 (GDPR), necessario
            a garantire la navigazione sicura e il funzionamento del sito.
          </p>
        </Section>

        <Section title="5. Conservazione dei dati">
          <p>
            La preferenza cookie viene conservata localmente nel browser dell'utente fino alla
            cancellazione manuale dei dati di navigazione. Nessun dato viene trasmesso o conservato
            su server del Titolare.
          </p>
        </Section>

        <Section title="6. Diritti dell'interessato">
          <p>
            In qualità di interessato, hai diritto di accedere ai tuoi dati, richiederne la
            rettifica o la cancellazione, opporti al trattamento e proporre reclamo all'Autorità
            Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.garanteprivacy.it</a>).
            Per esercitare i tuoi diritti scrivi a:{' '}
            <a href="mailto:cinthyalascano@pec.it" style={linkStyle}>cinthyalascano@pec.it</a>.
          </p>
        </Section>

        <Section title="7. Modifiche alla presente informativa">
          <p>
            Il Titolare si riserva il diritto di apportare modifiche alla presente informativa.
            La versione aggiornata sarà sempre disponibile a questo indirizzo.
          </p>
        </Section>

        <p style={{ fontSize: 12, color: 'rgba(60,36,21,0.4)', marginTop: 48 }}>
          Ultimo aggiornamento: maggio 2025
        </p>
      </div>
    </div>
  )
}

const linkStyle = {
  color: '#722F37',
  textDecoration: 'underline',
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.15rem',
        fontWeight: 600,
        color: '#3C2415',
        marginBottom: 12,
      }}>
        {title}
      </h2>
      <div style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(60,36,21,0.75)' }}>
        {children}
      </div>
    </div>
  )
}
