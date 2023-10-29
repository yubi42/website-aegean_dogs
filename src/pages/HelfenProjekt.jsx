import { useLayoutEffect } from "react";

const HelfenProjekt = () => {
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
      <h2>Projektbezogene Spende auf betterplace.org</h2>
      <div className="pate">
        <h3>Betterplace - das andere Spendenportal</h3>
        <p>
          Wir sammeln Spenden für konkrete Projekte - aktuell wird für Futter
          für die Hunde sowie Straßenkatzen gesammelt.
        </p>
        <p>
          Ihre Spende ist steuerlich absetzbar, bitte folgen Sie diesem Link:
        </p>

        <a href="https://www.betterplace.org/de/projects/13982-aegean-dogs-e-v?fb_action_ids=502265026527016&fb_action_types=og.recommends&fb_source=other_multiline&action_object_map=%7B%22502265026527016%22%3A278463418962428%7D&action_type_map=%7B%22502265026527016%22%3A%22og.recommends%22%7D&action_ref_map=%5B%5D" target="_blank" rel="noopener noreferrer">
          <img
            className="header"
            src="/images/betterplace_Logo_org.png"
            alt="betterplace logo"
          />
        </a>
      </div>
    </div>
  );
};

export default HelfenProjekt;
