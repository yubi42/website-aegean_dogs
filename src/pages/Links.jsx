import { useLayoutEffect } from "react";

const Links = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="main">
      <img
        className="header"
        src="/images/willkommen.jpg"
        alt="Tierheim mit Blumen"
      />
      <h2>Unsere Partner</h2>
      <p>Vielen Dank an alle unserer Unterstützer!</p>
      <div className="partner">      <div>
        <a href="https://www.faza-aegina.de/" target="blank_">
          <img src="/images/Links/faza-aegina.jpg" alt="Zu animal protection" />
        </a>
        <p className="blue">
          Mit Klick auf das Logo gelangt ihr zu dem Tierheim, das wir
          unterstützen.
        </p>
      </div>
      <hr />
        <div>
          <a href="http://www.lulucy-aegina.de/" target="blank_">
            <img src="/images/Links/logo-cats.jpg" alt="Zu cats of aegina" />
          </a>
          <p className="blue">
            Mit Klick auf das Logo gelangt ihr zu Cats of Aegina, die sich für
            Straßenkatzen auf Aegina einsetzen.
          </p>
        </div>
      <hr />
        <div>
          <a href="https://www.booklooker.de/Aristo" target="blank_">
            <img
              src="/images/Links/Logo_booklooker.png"
              alt="Zum Bücherflohmarkt"
            />
          </a>
          <p className="blue">
            Mit Klick auf das Logo gelangt ihr zum Bücherflohmarkt zugunsten der
            Tiere auf Aegina.
          </p>
        </div>
        <hr />
        <div>
          <a href="https://www.pre-zucht.de/" target="blank_">
          <p className="links">Ganaderia El Camino Andaluz</p>
          </a>
          <p className="blue">
          Eine spanische Pferdezucht in Sachsen - die Heimat einiger aeginitischer Hunde.
          </p>
        </div>
        <hr />
        <div>
          <a href="https://www.hundeschule-lbd-berlin.de/" target="blank_">
          <p className="links">LittleBigDogs</p>
          </a>
          <p className="blue">
          Eine Hundeschule in Berlin.
          </p>
        </div>
        <hr />
        <div>
          <a href="https://hundegnadenhof.de/" target="blank_">
          <p className="links">Diggersworld</p>
          </a>
          <p className="blue">
          Ein Hundegnadenhof in Georgensgmünd (Mittelfranken).
          </p>
        </div>
        <hr />
        <div>
          <a href="http://briefe-an-dich.de/" target="blank_">
          <p className="links">Briefe an Dich</p>
          </a>
          <p className="blue">
          Eine Freundin der Tiere auf Aegina blogt.
          </p>
        </div>
        <hr />
        <div>
        <a href="https://www.wolters-cat-dog.de/" target="blank_">
            <img
              src="/images/Links/wolters.png"
              alt="Zum Wolters Onlineshop"
            />
          </a>
          <p className="blue">
          Mit Klick auf das Logo gelangt ihr zu Wolters Onlineshop. Wolters unterstützt uns mit Futterspenden und Tierzubehör
          </p>
        </div>

      </div>
      
      <div>
        <p>
          Ihr unterstüzt das Tierheim und wollt hier auch eure Internetseite
          aufgelistet sehen?
        </p>
        <p>
          Dann kontaktiert bitte unseren{" "}
          <a href="mailto:webmaster@aegean-dogs.com">Webmaster</a>.
        </p>
      </div>
    </div>
  );
};

export default Links;
