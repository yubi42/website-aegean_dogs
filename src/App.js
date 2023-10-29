import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Willkommen from "./pages/Willkommen";
import Ueberzeugung from "./pages/Ueberzeugung";
import UeberUns from "./pages/UeberUns";
import Hunde from "./pages/Hunde";
import News from "./pages/News";
import HelfenSpenden from "./pages/HelfenSpenden";
import HelfenSponsoring from "./pages/HelfenSponsoring";
import HelfenPartenschaft from "./pages/HelfenPartenschaft";
import HelfenMitglied from "./pages/HelfenMitglied";
import Danke from "./pages/Danke";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Aegina from "./pages/Aegina";
import Tierheim from "./pages/Tierheim";
import HelfenProjekt from "./pages/HelfenProjekt";
import HelfenWunsch from "./pages/HelfenWunsch";
import Berichte from "./pages/Berichte";
import Links from "./pages/Links";
import Impressum from "./pages/Impressum";
import HelfenAnders from "./pages/HelfenAnders";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Willkommen />} />
          <Route path="/unsere-ziele" element={<Ueberzeugung />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/vermittlung" element={<Hunde />} />
          <Route path="/news" element={<News />} />
          <Route path="/berichte" element={<Berichte />} />
          <Route path="/weiteres-helfen" element={<HelfenAnders />} />
          <Route path="/spenden" element={<HelfenSpenden />} />
          <Route path="/spenden-projekt" element={<HelfenProjekt />} />
          <Route path="/werde-parte" element={<HelfenPartenschaft />} />
          <Route path="/wunschliste" element={<HelfenWunsch />} />
          <Route path="/werde-mitglied" element={<HelfenMitglied />} />
          <Route path="/sponsoring" element={<HelfenSponsoring />} />
          <Route path="/danke" element={<Danke />} />
          <Route path="/links" element={<Links />} />
          <Route path="/aegina" element={<Aegina />} />
          <Route path="/das-tierheim" element={<Tierheim />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
