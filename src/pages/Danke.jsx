import { useLayoutEffect } from "react";

const Danke = () => {
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
      <h2>Danke!</h2>
      <p>Dank eurer tatkräftigen Unterstützung konnte das Tierheim mit folgenden Summen unterstützt werden.</p>
      <div className="spendenaufkommen">
        <h3>Januar bis Juli 2023</h3>
        <p>Einnahmen aus Spendenportalen und Aktionen:</p>
        <div>
          <div>
            <p>Bildungsspender/WeCanHelp:</p>
            <p>223,55 €</p>
          </div>
          <div>
            <p>Amazon Smile:</p>
            <p>229,00 €</p>
          </div>
          <div>
            <p>Gooding-Prämie:</p>
            <p>30,17 €</p>
          </div>
          <div>
            <p>Betterplace:</p>
            <p>154,16 €</p>
          </div>
        </div>
      </div>

      <div className="spendenaufkommen">
        <h3>August bis Dezember 2022</h3>
        <p>Einnahmen aus Spendenportalen und Aktionen:</p>
        <div>
          <div>
            <p>Bildungsspender/WeCanHelp:</p>
            <p>239,00 €</p>
          </div>
          <div>
            <p>Amazon Smile:</p>
            <p>387,00 €</p>
          </div>
          <div>
            <p>Gooding-Prämie:</p>
            <p>23,00 €</p>
          </div>
          <div>
            <p>Netto Spendenaktion:</p>
            <p>200,00 €</p>
          </div>
        </div>
      </div>

      <div className="spendenaufkommen">
        <h3>Januar bis Juli 2022</h3>
        <p>Einnahmen aus Spendenportalen und Aktionen:</p>
        <div>
          <div>
            <p>Bildungsspender/WeCanHelp:</p>
            <p>209,00 €</p>
          </div>
          <div>
            <p>Amazon Smile:</p>
            <p>353,00 €</p>
          </div>
          <div>
            <p>Gooding-Prämie:</p>
            <p>19,00 €</p>
          </div>
          <div>
            <p>Betterplace:</p>
            <p>146,00 €</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Danke;
