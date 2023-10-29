import { useLayoutEffect } from "react";

const News = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="main">
      <img
        className="header"
        src="/images/banner/yuki.jpg"
        alt="Tierheim mit Blumen"
      />
      <h2>Neues von Aegean Dogs</h2>
      <div className="news">
        <p><b>Oktober 2023:</b></p>
        <p>
          Wir haben unsere Homepage überarbeitet. Weiterhin begrüßen wir unseren
          neuen Webmaster, <b>Elke Börner</b>. Wir bedanken uns bei Sylvia Rottmann für
          die jahrelange fleißige Arbeit an der Homepage.
        </p>
      </div>
      <div className="news">
        <p><b>März 2023:</b></p>
        <p>
        <b>Amazon Smile stellt seine Tätigkeit ein.</b> Leider können Sie uns bei den Amazon-Einkäufen nicht mehr unterstützen. Weiterhin haben Sie aber noch die Möglichkeit bei Gooding und WeCanHelp/Bildungsspender mit jedem Einkauf auch Aegean Dogs zu unterstützen.
        </p>
      </div>
      <div className="news">
        <p><b>Januar 2022:</b></p>
        <p>
        Wir feiern unser 10-jähriges Bestehen. Mehr Informationen finden Sie <a href="/documents/10_Jahre_Aegean_Dogs.pdf" target="_blank" rel="noopener noreferrer">hier</a>.
        </p>
      </div>
      <div className="news">
        <p><b>Januar 2021:</b></p>
        <p>
        Unser Facebook-Flohmarkt wurde eingerichtet. Hier können nicht mehr gebrauchte Utensilien zu Gunsten von Aegean Dogs angeboten werden.
        </p>
      </div>
    </div>
  );
};

export default News;
