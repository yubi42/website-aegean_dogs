import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Link to="/impressum">Impressum</Link>
        <Link to="/spenden">Spenden</Link>
        <a
          href="/documents/Satzung.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Satzung
        </a>
        <a
          href="/documents/Datenschutzerklaerung.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzerklärung
        </a>
      </div>
      <div>
        <p>
          {" "}
          <b> Kontakt:</b>
        </p>
        <div>
          {" "}
          <p>Aegean Dogs e. V.</p>
          <p>Meldenweg 1</p>
          <p>12357 Berlin</p>
          <p>E-Mail: vorsitz@aegean-dogs.de</p>
          <p>Telefon: 0170 - 472 2618</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
