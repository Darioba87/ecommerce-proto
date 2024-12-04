export default function Impressum() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-3 has-text-centered">Impressum</h1>
        <div className="content">
          <h2 className="subtitle is-4">Projektbeschreibung</h2>
          <p>
            Dieses Projekt wurde im Rahmen meines persönlichen Portfolios
            entwickelt, um meine Fähigkeiten im Bereich Webdesign und
            Webentwicklung zu demonstrieren. Ziel ist es, eine
            benutzerfreundliche Erfahrung für eine Online-Shop-Simulation zu
            zeigen, einschließlich Kundenbewertungen, Produktkarussells und
            anderer Funktionen.
          </p>
          <h2 className="subtitle is-4">Zweck</h2>
          <p>
            Das Projekt dient ausschließlich Bildungszwecken und ist nicht für
            kommerzielle Zwecke gedacht. Alle Inhalte, einschließlich Bilder,
            Bewertungen und Produkte, wurden entweder fiktional erstellt oder
            aus öffentlichen Quellen bezogen. Es soll ausschließlich meine
            Fähigkeiten in modernen Webtechnologien veranschaulichen.
          </p>
          <h2 className="subtitle is-4">Quellen</h2>
          <ul>
            <li>
              <strong>
                <a
                  href="https://randomuser.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RandomUser.me
                </a>
              </strong>{" "}
              - Ein Avatar-Generator für fiktive Benutzerbilder, die in den
              Kundenbewertungen verwendet werden.
            </li>
            <li>
              <strong>
                <a
                  href="https://via.placeholder.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Via Placeholder
                </a>
              </strong>{" "}
              - Ein Dienst für Platzhalterbilder, der zur Darstellung visueller
              Inhalte im Projekt genutzt wurde.
            </li>
            <li>
              <strong>
                <a
                  href="https://fakestoreapi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fake Store API
                </a>
              </strong>{" "}
              - Eine öffentliche API, die verwendet wurde, um fiktive Produkte
              für den Online-Shop zu generieren.
            </li>
          </ul>
          <h2 className="subtitle is-4">Wichtige Hinweise</h2>
          <ul>
            <li>
              Dieses Projekt repräsentiert kein reales Unternehmen oder
              Geschäft.
            </li>
            <li>
              Alle dargestellten Bewertungen und Produkte sind rein fiktional.
            </li>
            <li>
              Die verwendeten Benutzer- und Produktbilder stammen ausschließlich
              aus den oben genannten Quellen und dienen nur
              Demonstrationszwecken.
            </li>
          </ul>
          <h2 className="subtitle is-4">Kontakt</h2>
          <p>
            Für weitere Informationen zu diesem Projekt oder bei Interesse an
            einer Zusammenarbeit können Sie mich gerne kontaktieren:
          </p>
          <ul>
            <li>
              <strong>Name:</strong> [Dario Brito Alvarez]
            </li>
            <li>
              <strong>E-Mail:</strong> [dariobritoalvarez[ät]gmail.com]
            </li>
            {/* <li>
              <strong>Portfolio:</strong>{" "}
              <a
                href="[Link zu Ihrem Portfolio]"
                target="_blank"
                rel="noopener noreferrer"
              >
                [Link zu Ihrem Portfolio]
              </a>
            </li> */}
          </ul>
          <h2 className="subtitle is-4">Lizenz</h2>
          <p>
            Dieses Projekt ist nur für persönliche Zwecke gedacht und nicht für
            kommerzielle Zwecke bestimmt. Alle hier dargestellten Inhalte
            sollten ausschließlich als Testmaterial angesehen werden.
          </p>
        </div>
      </div>
    </section>
  );
}
