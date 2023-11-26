import { useLayoutEffect } from "react";
import "./UeberUns.css";

const UeberUns = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div className="main">
       <img className="header" src="/images/willkommen.jpg" alt="Tierheim mit Blumen" />
            <h2>Unser Team</h2>
      <div className="team-1">
        <div>
          {" "}
          <h2>1. Vorsitzende</h2>
          <h3>Manuela Tillack-Lübke</h3>
          <p>
            Inhaberin der amtlichen Erlaubnis nach § 11 Abs. 1 Nr. 5 des
            Tierschutzgesetzes zur sachgemäßen Vermittlung von Tieren.
          </p>
          <p>0170 - 472 2618</p>
          <a href="mailto:vorsitz@aegean-dogs.de">E-mail</a>
        </div>
        <div className="image">
          <img src="/images/foto-matil.jpg" alt="Manuela Tillack-Lübke" />
        </div>
      </div>
      <div className="team-1 team-2">
        <div>
          <h2>Stellvertretender Vorsitzender</h2>
          <h3>Rainer Kopacek</h3>
          <p>0171 - 213 3081</p>
          <a href="mailto:stellv-vorsitz@aegean-dogs.de">E-mail</a>
        </div>
        <div className="image">
          <img src="/images/foto-rainer.jpg" alt="Rainer Kopacek" />
        </div>
      </div>
      <div className="team-1">
        <div>
          <h2>Schriftführerin</h2>
          <h3>Christiane Kopacek</h3>
          <p>0171 - 956 3419</p>
          <a href="mailto:schriftfuehrer@aegean-dogs.de">E-mail</a>
        </div>
        <div className="image">
          <img src="/images/foto-christiane.jpg" alt="Aegean Dogs Loo" />
        </div>
      </div>
      <div className="team-1 team-2">
        <div>
          <h2>Kassenwartin</h2>
          <h3>Janine Klatt</h3>
          <p>0173 - 462 6221</p>
          <a href="mailto:kassenwart@aegean-dogs.de">E-mail</a>
        </div>
        <div className="image">
          <img src="/images/foto-janine.jpg" alt="Aegean Dogs Loo" />
        </div>
      </div>
      <div className="team-1">
        <div>
          <h2>Webmaster</h2>
          <h3>Elke Börner</h3>
          <p>01578 - 815 6736</p>
          <a href="mailto:webmaster@aegean-dogs.de">E-mail</a>
        </div>
        <div className="image">
          <img src="/images/foto-elke.jpg" alt="Elke Börner" />
        </div>
      </div>
    </div>
  );
};

export default UeberUns;
