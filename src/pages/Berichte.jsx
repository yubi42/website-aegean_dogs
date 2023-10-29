import { useLayoutEffect } from "react";
import { berichte } from "../bearbeiten/Berichte";


const Berichte = () => {
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
      <h2>Andere Neuigkeiten</h2>
      <p>Auf dieser Seite möchten wir Ihnen Reiseberichte von Aegina-Besuchern präsentieren, Neuigkeiten aus dem Tierheim oder über unsere Zöglinge, sowie interessante Artikel anderer Tierschutzorganisationen oder aus der Presse, die nicht direkt die Aegean Dogs e.V. betreffen bzw. in die "News" passen.</p>
      <p> Die Rechte und Verantwortung liegt bei den jeweiligen Autoren.</p>

      <div className="berichte">
        {berichte.map((x,i) => (
           <a key={i} href={`/documents/${x.pdf}`} target="_blank" rel="noopener noreferrer"><p>{x.text}</p></a>
        ))}
      </div>
    </div> );
}
 
export default Berichte;