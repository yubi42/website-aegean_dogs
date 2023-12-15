import { useLayoutEffect } from "react";


const HelfenMitglied = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return ( 
        <div className="main mitglied">      <img
        className="header"
        src="/images/willkommen.jpg"
        alt="Tierheim mit Blumen"
      />
      <h2>Werde Mitglied</h2>
<p>Damit wir effektiv arbeiten können, benötigen wir natürlich Menschen, die uns als Mitglied unterstützen. <br /> Die Rechte und Pflichten eines Mitgliedes können Sie unserer <a href="/documents/Satzung.pdf" target="blank_">Satzung</a> entnehmen.
</p>
<p>Hier können sie Ihr persönliches <a href="/documents/Mitgliedsantrag.pdf">Antragsformular</a>  herunterladen - bitte ausdrucken, ausfüllen und per Post oder eingescannt an die Kassenwartin schicken (Adresse im Formular).</p>
     <div><h3>Unsere Beiträge</h3><p>(es handelt sich dabei um Mindestbeiträge)</p></div>
     <div className="mitgliedschaft">
         <div><p>Einzelpersonen unter 18 Jahre</p>
         <p><b> 15 Euro</b></p></div>
         <div><p>Einzelpersonen ab 18 Jahre</p>
         <p><b> 50 Euro</b></p></div>
         <div><p>Familien</p>
         <p><b> 70 Euro</b></p></div>
         <div><p>Azubi, Rentner, Arbeitslose, Studenten<br />
(mit entsprechendem Nachweis)</p>
         <p><b> 20 Euro</b></p></div>
     </div>
     
      </div>
     );
}
 
export default HelfenMitglied;