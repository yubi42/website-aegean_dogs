import { useLayoutEffect } from "react";

const HelfenSponsoring = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="main spenden">
      <img
        className="header"
        src="/images/willkommen.jpg"
        alt="Tierheim mit Blumen"
      />
      <h2>Sponsoring - Einkaufen bei unseren Partnern</h2>

      <div className="pate">
        <h3>Einkaufen und helfen !</h3>
        <p>
          Wenn Sie über Sponsoring-Programme einkaufen, erhalten wir eine
          Vergütung, die den Tieren zu Gute kommt.
        </p>
        <p>Viel Spaß beim Shoppen!</p>
        <p>Ein Klick auf die Banner oder Links, anmelden und los geht's:</p>
      </div>
      <div className="sponsoring">
        <div style={{borderBottom: "none" }}>
          <a href="https://www.bildungsspender.de/412357002/spendenprojekt" target="_blank" rel="noopener noreferrer"><iframe
            src="https://www.bildungsspender.org/extern/bs/spendenstandbanner2.php?kt=412357002&amp;url=412357002"
            scrolling="no"
            width="150"
            height="140"
            frameborder="0"
            title="Spendenstandbanner"
          >
          </iframe></a>
          <div>
            <p>
              "Bildungsspender" ist Nachfolger von Boost. Hier können Sie direkt
              einen Betrag spenden: <a href="https://www.bildungsspender.de/donation.php?org_id=412357002" target="_blank" rel="noopener noreferrer">*klick*</a> oder wie bei Boost in verschiedenen
              Shops einkaufen.
            </p>
            <p>
              Dazu übernehmen Sie Ihren Boost-Account oder melden sich neu an
              bei <a href="https://www.bildungsspender.de/412357002/spendenprojekt" target="_blank" rel="noopener noreferrer">Bildungsspender.de</a>. Nach der Registrierung legen Sie einmal
              fest, dass Aegean Dogs Ihr Standardprojekt ist, dann geht keine
              Spende verloren.  
            </p>
            <p> Ihr Flyer zum Herunterladen: <a href="http://www.aegean-dogs.de/Flyer_wecanhelp.pdf" target="_blank" rel="noopener noreferrer">Wecanhelp.de</a> </p>
          </div>
        </div>
        <div>
          <a href="https://www.gooding.de/aegean-dogs-e-v-55715" target="_blank" rel="noopener noreferrer"><img src="/images/Gooding-Logo-Gross.png" alt="gooding logo" /></a>
          <div>
            <p>
            Funktioniert ähnlich wie boost - auch hier nehmen viele Shops dran teil. Vielleicht eine Alternative, wenn man bei boost nicht "das richtige" findet. 
            </p>
            <p>
            Bitte melden Sie sich an und unterstützen uns mit ihrem Einkauf. 
            </p>
          </div>
        </div>
      </div>
      <p>Alle genannten Programme arbeiten seriös und Aegean Dogs hat auf diesem Wege bereits viele Spenden erhalten!</p>
    </div>
  );
};

export default HelfenSponsoring;
