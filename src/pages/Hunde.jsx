import React, { useLayoutEffect } from "react";

const Hunde = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
      return (
        <div className="main">
            <img className="header" src="/images/willkommen.jpg" alt="Tierheim mit Blumen" />
          <h2>Vermittlungen der Hunde</h2>
          <div>            <p>
            Hier finden Sie die Hunde unseres griechischen Partnervereins Animal Protection auf Aegina, die ein liebevolles Zuhause suchen.
            </p>
            <p>Warum einen Hund aus Griechenland, und was muss man beachten? Bitte lesen Sie zuvor die Informationen auf der Seite von Animal Protection: <a href="https://www.faza-aegina.de/vermittlung.html">*vor der Adoption*</a></p>
            <p>Klicken Sie auf die Bilder, um die Hunde kennenzulernen, die derzeit "reisefertig" auf Aegina oder auf Pflegestellen leben und auf ihr neues Zuhause warten:</p></div>
            <div className="vermittlung">
            <a href="https://www.faza-aegina.de/vermittlung/welpen-und-junghunde.html?status=junghund" target="_blank" rel="noopener noreferrer"><div><img src="/images/Welpe1.jpg" alt="Welpen" /><p>Welpen und Junghunde</p></div></a>
            <a href="https://www.faza-aegina.de/vermittlung/hunde.html?status=hund" target="_blank" rel="noopener noreferrer"><div><img src="/images/Hund1.jpg" alt="Hund" /><p>Hunde</p></div></a>
            <a href="https://www.faza-aegina.de/vermittlung/senioren.html?status=senior" target="_blank" rel="noopener noreferrer"><div><img src="/images/Senior1.jpg" alt="Hund-Senior" /><p>Hunde-Senioren</p></div></a></div>
            <p>
            Bei Interesse nehmen Sie bitte mit den Vermittlerinnen von Animal Protection Kontakt auf.
            </p>
          
        </div>
      );
}

export default Hunde;
