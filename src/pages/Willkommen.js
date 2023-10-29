import { useLayoutEffect } from "react";
import "../App.css";

const Willkommen = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div className="main">
        <img className="header" src="/images/willkommen.jpg" alt="Tierheim mit Blumen" />
      <h2>Schön, dass ihr uns gefunden habt!</h2>
        <p>
          Wir sind ein Verein, der sich zum Ziel gesetzt hat, den Tieren in Not
          auf der Insel Ägina in Griechenland zu helfen. Die Insel Ägina liegt
          nur 1,5 Stunden mit der Fähre von der Hauptstadt Athen entfernt. Unter
          anderem aus diesem Grund gibt es immer viel zu tun für den Tierschutz.
        </p>
        <ul>
          <li>
            Das gut geführte Tierheim auf der Insel, dass für ca. 100 Hunde
            ausgelegt ist, ist fast immer am Rande seiner Kapazitäten oder
            darüber hinaus. Es ist gefüllt mit Tieren, die, aufgrund ihrer
            Vergangenheit, ihres Alters oder aufgrund von körperlichen
            Defiziten, nicht alleine auf der Straße überlebensfähig wären. Für
            diese Hunde und Katzen wird versucht ein behütetes Zuhause zu
            finden. Besuchen Sie gerne unsere Rubrik „Tiere auf Ägina“ und
            lernen Sie die Hunde und Katzen kennen.
          </li>
          <li>
            Das Tierheim hat eine kleine Klinik auf dem Gelände, in der die
            nötigen Kastrationen der Hunde und Katzen durchgeführt werden
            können. So hoffen wir, dass irgendwann das Leid der Streuner ein
            Ende haben wird.
          </li>
          <li>
            Für die freilebenden Tiere – nicht alle Tiere können in dem Tierheim
            aufgenommen werden - wurden Futterstellen eingerichtet und es wird
            immer nach dem Gesundheitszustand dieser Tiere so gut es geht
            geschaut. Gegebenenfalls werden diese freilebenden Tiere medizinisch
            versorgt.
          </li>
          <li>
            Die Streuner, die auf der Insel aufgegriffen werden, sind meist
            nicht in dem besten Gesundheitszustand, so dass diese oft vom
            örtlichen Tierarzt versorgt werden müssen. Hohe Tierarztkosten sind
            die Regel.
          </li>
        </ul>
        <p>
          Bei all diesen Sachen versuchen wir, den Tierschützern vor Ort unter
          die Arme zu greifen. Unsere Mitglieder überzeugen sich durch
          regelmäßige Besuche des Tierheims persönlich, von dem Wohlergehen der
          Tiere. Die meisten Unterstützer von Aegean Dogs sind selber ehemalige
          Adoptanten von Tieren aus diesem Tierheim oder haben vor Ort das
          Tierheim kennengelernt, weil sie ein Tier in Not im Urlaub fanden, und
          dort Hilfe erhalten haben. Wir würden uns freuen, wenn auch Sie diese
          Arbeit unterstützen würden. Ob viel oder wenig, tatkräftig,
          Sachspenden oder mit Geld – jede Hilfe ist willkommen!
        </p>
      
    </div>
  );
};

export default Willkommen;
