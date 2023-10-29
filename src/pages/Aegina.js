import React, { useLayoutEffect } from "react";

function Aegina() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div className="main">
       <img className="header" src="/images/willkommen.jpg" alt="Tierheim mit Blumen" />
      <h2>Aegina</h2>
    <p>Die griechische Insel ΑΙΓΙΝΑ liegt im Saronischen Golf, etwa eine dreiviertel Stunde (16 Seemeilen) mit der Fähre vom Athener Hafen Piräus entfernt. Die Insel ist ca. 85 km² groß, hat eine Küstenlinie von 57 km und die höchste Erhebung, der Oros, ist 532 m hoch.
 
 Eines der Wahrzeichen Aeginas ist die kleine Hafenkapelle Agios Nikolaos.</p>
 <img src="/images/Aegina/c1647.jpg" alt="ein Hafen auf Aegina" />
      <img
        src="/images/Aegina/c0844.jpg"
        alt="ein Boot vor einer Stadt auf Aegina"
      />
      <img src="/images/Aegina/c1244.jpg" alt="ein Olivenbaum auf Aegina" />
      <img src="/images/Aegina/c1400.jpg" alt="die Landschaft auf Aegina" />
      
    </div>
  );
}

export default Aegina;
