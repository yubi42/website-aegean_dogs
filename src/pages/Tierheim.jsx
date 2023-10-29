import React, { useLayoutEffect } from "react";

function Tierheim() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div className="main">
       <img className="header" src="/images/willkommen.jpg" alt="Tierheim mit Blumen" />
      <h2>Das Tierheim</h2>
      <p>
        Einige Impressionen von dem Tierheim auf Ägina. Es ist ausgelegt für ca.
        100 Hunde. Es wird liebevoll betreut durch Andreas, Elena und Lori.
      </p>
      <div className="gallery">
        <img src="/images/Tierheim/AndreasmitHund.jpg" alt="" />
        <img src="/images/Tierheim/Elenamithund.jpg" alt="" />
        <img src="/images/Tierheim/LorimitHund.jpg" alt="" />
        <img src="/images/Tierheim/SammyaufdemZwinger.jpg" alt="" />
        <img src="/images/Tierheim/SeniorenFloriDidi.jpg" alt="" />
        <img src="/images/Tierheim/SeniorenTolisGunni.jpg" alt="" />
        <img src="/images/Tierheim/SozialisierungWelpen.jpg" alt="" />
        <img src="/images/Tierheim/TierheimÄgina.jpg" alt="" />
        <img src="/images/Tierheim/TierheimEingang.jpg" alt="" />
        <img src="/images/Tierheim/Tierheimgrün.jpg" alt="" />
        <img src="/images/Tierheim/TierheimhintererTeil.jpg" alt="" />
        <img src="/images/Tierheim/TierheimimGrünen.jpg" alt="" />
        <img src="/images/Tierheim/TierheimimGrünen2.jpg" alt="" />
        <img src="/images/Tierheim/TierheimkleinerFreilauf.jpg" alt="" />
        <img src="/images/Tierheim/TierheimobererTeil.jpg" alt="" />
        <img src="/images/Tierheim/Tierheimschön.jpg" alt="" />
        <img src="/images/Tierheim/Tierheimschön2.jpg" alt="" />
        <img src="/images/Tierheim/Tierheimschön3.jpg" alt="" />
        <img src="/images/Tierheim/Tierheimschön4.jpg" alt="" />
        <img src="/images/Tierheim/Tierheimvonoben.jpg" alt="" />
        <img src="/images/Tierheim/Tierklinik.jpg" alt="" />
        <img src="/images/Tierheim/WelpenamGitter.jpg" alt="" />
        <img src="/images/Tierheim/ZiegenvordemTierheim.jpg" alt="" />
      </div>
    </div>
  );
}

export default Tierheim;
