import { useLayoutEffect } from "react";

const HelfenAnders = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="main wunsch">
      <img
        className="header"
        src="/images/banner/bochito.jpg"
        alt="Tierheim mit Blumen"
      />
      <h2>Weitere Möglichkeiten uns zu unterstützen</h2>
      <div>
        <h3>
          Flyer{" "}
          <span style={{ fontWeight: "400", fontSize: "2.0rem" }}>
            ausdrucken und verteilen
          </span>
        </h3>
        <p>
          Hier geht es zum:{" "}
          <a
            href="/documents/Flyer.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flyer
          </a>.
        </p>
        <p>
          {" "}
          Es wäre eine große Hilfe, wenn ihr diesen Flyer ausdruckt und
          großzügig verteilt. Vielleicht bietet sich ja die eine oder andere
          passende Gelegenheit, wo man diese Flyer auslegen kann
        </p>
      </div>
      <hr />
      <div>
        <h3>
          Spendendosen{" "}
          <span style={{ fontWeight: "400", fontSize: "2.0rem" }}>
          für Aegean Dogs aufstellen
          </span>
        </h3>
        <p>
          {" "}
          Schön wäre es, wenn ihr eine Spendendose für Aegean Dogs aufstellen könntet und den so gesammelten Betrag auf unser Konto überweisen würdet.
        </p>
      </div>
      <hr />
      <div>
        <h3>
        Unser Facebook-Flohmarkt
        </h3>
        <p>
          {" "}
          Was Sie schon immer loswerden wollten, oder schon lange suchten: 
Verkaufen und kaufen auf dem FACEBOOK-Flohmarkt zu Gunsten der Tiere auf Aegina
        </p>
        <p>
          Hier geht es zum:{" "}
          <a
            href="https://www.facebook.com/groups/431803200993664/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flohmarkt
          </a>.
        </p>
      </div>
    </div>
  );
};

export default HelfenAnders;
