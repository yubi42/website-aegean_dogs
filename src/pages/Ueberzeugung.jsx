import { useLayoutEffect } from "react";

const Ueberzeugung = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div className="main">
      <img
        className="header"
        src="/images/willkommen.jpg"
        alt="Tierheim mit Blumen"
      />
      <h2>Unsere Ziele</h2>
      <p>
        Wir sind ein stabiles Team von Ehrenamtlichen, die bereits seit einigen
        Jahren die Tierschützer auf der griechischen Insel Ägina dabei
        unterstützen, das Leid der Straßentiere in den Griff zu bekommen. Wir
        bemerkten, dass es einige Vorteile mit sich bringt, einen in Deutschland
        ansässigen Verein zu haben, um diese Arbeit noch effektiver zu
        gestalteten. Am 3. Oktober 2011 war es dann so weit. Die
        Gründungssitzung fand statt und am 29. November 2011 wurde unsere Idee
        auch vom Amtsgericht mit dem Registereintrag bestätigt.
      </p>
      <p>Als Förderverein haben wir uns zur Aufgabe gemacht, die finanziellen Mittel für folgende Aufgaben zu generieren:</p>
      <ul><li>Die Reduzierung der Anzahl von streunenden Hunden und Katzen durch regelmäßige Kastrationsprogramme</li>
      <li>Die Verbesserung der Gesundheits- und Lebensbedingungen der Streuner durch lokale Straßenfütterung, medizinische Kontrollen, Impfungen und Behandlungen sowie die Bereitstellung von Unterkünften</li>
      <li>Führung und Unterhaltung des Tierheimes</li>
      <li>Hilfe für Tiere, die Unfallopfer oder Opfer einer Vergiftung geworden sind</li></ul>
    </div>
  );
};

export default Ueberzeugung;
