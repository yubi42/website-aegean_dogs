import { useLayoutEffect } from "react";

const HelfenWunsch = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="main wunsch">
      <img
        className="header"
        src="/images/willkommen.jpg"
        alt="Tierheim mit Blumen"
      />
      <h2>Wunschlisten</h2>
      <div>
        <h3>Wunschliste bei Veto</h3>
        <p>
          Wir haben bei VETO eine Wunschliste für verschiedene Futterspenden.
          Wenn du uns mit einer Geldspende über VETO unterstützt, werden diese
          von VETO in Futter umgewandelt und bei Erreichen von 2 vollen Paletten
          Futter direkt nach Griechenland (EU-Ausland) geliefert. Falls diese
          Menge innerhalb von 3 Monaten nicht zustande kommt, wird das Futter an
          einem in Deutschland bestimmten Standort ausgeliefert und der Verein
          muss den Transport nach Griechenland selber organisieren. Für deine
          Geldspende bekommst du von Veto unkompliziert deine
          Spendenbescheinigung, wenn du es wünschst.
        </p>
        <p>
          <b>Hier geht es zu unserer Wunschliste:</b>
        </p>
        <a
          href="https://www.veto-tierschutz.de/?wid=630820"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/veto.jpeg" alt="Link zur Wunschliste auf Veto." />
        </a>
      </div>
      <div>
        <h3>Weitere Wünsche</h3>
        <p>
          Viele Dinge wie Medikamente bzw. sog. Nahrungsergänzungspräparate,
          medizinische Einmalartikel und Halsbänder und Leinen werden immer
          wieder benötigt, bitte informieren Sie sich direkt auf der Homepage
          von Animal Protection. Hier sehen Sie den aktuellen Bedarf:
        </p>
        <a
          href="https://www.faza-aegina.de/foerderkreis/wir-brauchen-dringend.html"
          target="_blank"
          rel="noopener noreferrer"
        >
        <p>
          <b>Das wird dringend benötigt</b>
        </p>
        </a>
        <p>Bitte schicken Sie Ihre Spenden an folgende Anschrift: </p>
        <p>Alois Appel GmbH <br />
für Animal Protection <br />
Toni-Schecher-Str. 2 - 4 <br />
63820 Elsenfeld <br />
</p>
        <p>Im Verwaltungsbereich benötigen wir immer:</p>
        <p>- Druckerpapier <br />
- Briefmarken</p>
        <p>Bitte wenden Sie sich hierfür an unseren Kassenwart für die Versandadresse: <a href="mailto:kassenwart@aegean-dogs.com">E-mail</a></p>
      </div>
    </div>
  );
};

export default HelfenWunsch;
