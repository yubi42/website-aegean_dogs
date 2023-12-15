import { useLayoutEffect } from "react";

const HelfenPartenschaft = () => {
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
      <h2>So können Sie Pate werden:</h2>
      <div className="pate">
        <h3>Eine Patenschaft übernehmen für ein bestimmtes Tier</h3>
        <p>
          Sie möchten gern einem bestimmten Hund, der vielleicht schwer
          vermittelbar ist, helfen? Dann können Sie gern eine Patenschaft
          übernehmen.
        </p>
        <p>
          Weitere Infos und die Anmeldung gibt es im{" "}
          <a href="/images/Patenschaft/Patenschaft_Antrag.pdf" target="_blank">
            Patenschaftsformular
          </a>
          . Bitte ausdrucken, ausfüllen und an unsere{" "}
          <a href="mailto:kassenwart@aegean-dogs.com">Kassenwartin</a>{" "}
          schicken.
        </p>
        <p>
          Schwer vermittelbare Hunde finden sie{" "}
          <a
            href="https://www.faza-aegina.de/patenschaften.html"
            rel="noreferrer"
            target="_blank"
          >
            
            hier
          </a>
          .
        </p>
      </div>
      <hr />
      <div className="pate">
        <h3>Eine Futterpatenschaft übernehmen</h3>
        <p>
          Wenn Sie kein bestimmtes Tier fördern wollen, sondern ihre
          Futterspende allen Tieren zu gute kommen soll, gibt es auch die Spende
          über die Futterbrücke.
        </p>
        <p>
          Weitere Infos und die Anmeldung gibt es im{" "}
          <a
            href="/images/Patenschaft/Futterbruecke_Antrag.pdf"
            target="_blank"
          >
            
            Patenschaftsformular
          </a>
          . Bitte ausdrucken, ausfüllen und an unsere{" "}
          <a href="mailto:kassenwart@aegean-dogs.com">Kassenwartin</a>{" "}
          schicken.
        </p>
      </div>
      <hr />
      <div className="pate">
        <h3>Die Namenspatenschaft</h3>
        <p>
          Nicht unerwähnt wollen wir lassen, dass unser Partnertierheim auf der
          Insel Ägina die Möglichkeit der Namenspatenschaft anbietet. Für nur 20
          Euro wird einer der Hunde im Tierheim mit Ihrem Wunschnamen benannt
          und <b>Sie erhalten eine schöne Urkunde.</b> </p><p>
          Achtung: Hierfür können wir leider <b>
            keine Spendenbescheinigung
          </b>{" "}
          erstellen.
        </p>
        <p>Infos zur Namenspatenschaft finden sie <a
            href="/images/Patenschaft/Namenspatenschaft_2017.pdf"
            target="_blank"
          >
            hier
          </a></p>
      </div>
    </div>
  );
};

export default HelfenPartenschaft;
