import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const [showHelp, setshowHelp] = useState(false);
    const [showTeam, setshowTeam] = useState(false);
    const [showNews, setshowNews] = useState(false);
    const [showDanke, setshowDanke] = useState(false);

  return (
    <div className="navbar">
      <img src="/images/dogs-logo.jpg" alt="Aegean Dogs Loo" />
      <div>
        <Link to="/">
          <p>Willkommen</p>
        </Link>
        <div onMouseEnter={() => setshowTeam(true)} onMouseLeave={() => setshowTeam(false)}>
        <Link to="/ueber-uns">
          <p>Über uns</p>        
          </Link>
          {showTeam && (<div>
            <Link to="/ueber-uns"><p>Unser Team</p></Link>
            <Link to="/das-tierheim"><p>Das Tierheim</p></Link>
            <Link to="/aegina"><p>Aegina</p></Link>
        </div>)}
        </div>

        <Link to="/unsere-ziele">
          <p>Ziele</p>
        </Link>
        <div onMouseEnter={() => setshowHelp(true)} onMouseLeave={() => setshowHelp(false)}>
        <Link to="/spenden" >
          <p>So helfen Sie</p>
        </Link>
        {showHelp && (<div>
            <Link to="spenden"><p>Spende</p></Link>
            <Link to="spenden-projekt"><p>Projektbezogene Spende</p></Link>
            <Link to="werde-parte"><p>Patenschaft</p></Link>
            <Link to="werde-mitglied"><p>Mitgliedschaft</p></Link>
            <Link to="sponsoring"><p>Sponsoring</p></Link>
            <Link to="wunschliste"><p>Wunschliste</p></Link>
            <Link to="weiteres-helfen"><p>Weitere Möglichkeiten</p></Link>
        </div>)}
        </div>
        <Link to="/vermittlung">
          <p>Vermittlung</p>
        </Link>
        <div onMouseEnter={() => setshowNews(true)} onMouseLeave={() => setshowNews(false)}>
        <Link to="/news">
          <p>News</p>
        </Link>
        {showNews && (<div>
            <Link to="news"><p>Neuigkeiten</p></Link>
            <Link to="berichte"><p>Berichte</p></Link>
        </div>)}
        </div>
        <div onMouseEnter={() => setshowDanke(true)} onMouseLeave={() => setshowDanke(false)}>
        <Link to="/danke">
          <p>Danke!</p>
        </Link>
        {showDanke && (<div>
            <Link to="danke"><p>Spendeneinnahmen</p></Link>
            <Link to="links"><p>Partner</p></Link>
        </div>)}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
