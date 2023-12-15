import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const [showHelp, setshowHelp] = useState(false);
    const [showTeam, setshowTeam] = useState(false);
    const [showNews, setshowNews] = useState(false);
    const [showDanke, setshowDanke] = useState(false);
    const [Burger, setBurger] = useState(false);
  
  function resetState()
  {
    setshowHelp(false);
    setshowTeam(false);
    setshowNews(false);
    setshowDanke(false);
    setBurger(!Burger);
  }

  return (
    <div>
      <div className="nav-mobile">
      <div className="nav-top">
      <img onClick={() => resetState()} src="/images/burger-menu.svg"></img>
      <p> Aegean Dogs</p>
      </div>
      <div className={Burger ? "nav-burger" : ""} style={{ display: Burger ? "flex" : "none" }}>
        <Link to="/" onClick={() => resetState()} >
          <p>Willkommen</p>
        </Link>
        <div onClick={() => setshowTeam(true)}>
        <Link to="/ueber-uns">
          <p>Über uns</p>        
          </Link>
          {showTeam && (<div className="nav-under">
            <Link to="/ueber-uns" onClick={ (event) => {event.stopPropagation(); resetState();}}><p>Unser Team</p></Link>
            <Link to="/das-tierheim" onClick={ (event) => {event.stopPropagation(); resetState();}}><p>Das Tierheim</p></Link>
            <Link to="/aegina" onClick={ (event) => {event.stopPropagation(); resetState();}}><p>Aegina</p></Link>
        </div>)}
        </div>

        <Link to="/unsere-ziele" onClick={() => resetState()}>
          <p>Ziele</p>
        </Link>
        <div onClick={() => setshowHelp(true)}>
        <Link to="/spenden" >
          <p>So helfen Sie</p>
        </Link>
        {showHelp && (<div className="nav-under">
            <Link to="spenden" onClick={ (event) => {event.stopPropagation(); resetState();}}><p>Spende</p></Link>
            <Link to="spenden-projekt" onClick={ (event) => {event.stopPropagation(); resetState();}}><p>Projektbezogene Spende</p></Link>
            <Link to="werde-parte" onClick={ (event) => {event.stopPropagation(); resetState();}}><p>Patenschaft</p></Link>
            <Link to="werde-mitglied" onClick={ (event) => {event.stopPropagation(); resetState();}}><p>Mitgliedschaft</p></Link>
            <Link to="sponsoring" onClick={ (event) => {event.stopPropagation(); resetState();}}><p>Sponsoring</p></Link>
            <Link to="wunschliste" onClick={ (event) => {event.stopPropagation(); resetState();}}><p>Wunschliste</p></Link>
            <Link to="weiteres-helfen" onClick={ (event) => {event.stopPropagation(); resetState();}}><p>Weitere Möglichkeiten</p></Link>
        </div>)}
        </div>
        <Link to="/vermittlung" onClick={() => resetState()}>
          <p>Vermittlung</p>
        </Link>
        <div onClick={() => setshowNews(true)}>
        <Link to="/news">
          <p>News</p>
        </Link>
        {showNews && (<div className="nav-under">
            <Link to="news" onClick={ (event) => {event.stopPropagation(); resetState();}}><p>Neuigkeiten</p></Link>
            <Link to="berichte" onClick={ (event) => {event.stopPropagation(); resetState();}}><p>Berichte</p></Link>
        </div>)}
        </div>
        <div onClick={() => setshowDanke(true)}>
        <Link to="/danke">
          <p>Danke!</p>
        </Link>
        {showDanke && (<div className="nav-under">
            <Link to="danke" onClick={ (event) => {event.stopPropagation(); resetState();}}><p>Spendeneinnahmen</p></Link>
            <Link to="links" onClick={ (event) => {event.stopPropagation(); resetState();}}><p>Partner</p></Link>
        </div>)}
        </div>
      </div>
      </div>
    <div className="navbar">
      <img src="/images/dogs-logo.jpg" alt="Aegean Dogs Loo" />
      <div>
        <Link to="/">
          <p>Willkommen</p>
        </Link>
        <div onClick={() => setshowTeam(true)} onMouseLeave={() => setshowTeam(false)}>
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
    </div>
  );
};

export default NavBar;
