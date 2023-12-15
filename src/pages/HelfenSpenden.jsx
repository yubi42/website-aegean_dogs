import { useLayoutEffect } from "react";

const Helfen = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="main spenden">
      <img
        className="header"
        src="/images/willkommen.jpg"
        alt="Tierheim mit Blumen"
      />
      <h2>Vielen Dank für jede Spende!</h2>

      <div>
        <h3>Unser Spendenkonto:</h3>
        <p>Aegean Dogs e.V.</p>
        <p>
          <b>IBAN: DE61 1203 0000 1020 041529</b>
        </p>
        <p>BIC: BYLADEM 1001 </p>
        <p>Institut: DKB (Deutsche Kreditbank AG)</p>
      </div>
      <hr />

      <div className="paypal">
        <h3>Unser Paypal:</h3>
        <div>
          <table border="0" cellPadding="10" cellSpacing="0" align="center">
            <tr>
              <td align="center"></td>
            </tr>
            <tr>
              <td align="center">
                <a
                  href="https://www.paypal.com/c2/webapps/mpp/home?locale.x=en_C2"
                  title="PayPal"
                  onClick="javascript:window.open('https://www.paypal.com/c2/webapps/mpp/home?locale.x=en_C2','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"
                >
                  <img
                    src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/C2/logos-buttons/optimize/Online_Primary_Acceptance_Mark_RGB_V2_medium.jpg"
                    alt="PayPal"
                  />
                </a>
              </td>
            </tr>
          </table>
          <div>
            <p>
              <b>jk.aegean.dogs@aol.de</b>
            </p>
            <p>Bitte an "Freunde" senden wegen der Gebühren.</p>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h3>Spendenquittungen:</h3>
        <p>
          Wir sind berechtigt Spendenquittungen auszustellen.
          Spendenbescheinigungen werden am Jahresende in einer
          Sammelspendenbescheinigung bearbeitet und versendet.{" "}
        </p>
      </div>
      <hr />
      <div>
        <h3>Wichtig!</h3>
        <p>
          Wenn Sie eine Spendenquittung erhalten möchten,{" "}
          <a href="mailto:kassenwart@aegean-dogs.com">mailen</a> Sie bitte Ihre
          Adresse an den Kassenwart! 
        </p>
      </div>
      <p>Unsere Spenden werden ausschließlich satzungsgerecht verwendet.</p>
    </div>
  );
};

export default Helfen;
