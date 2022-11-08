import React, { useEffect, useState } from "react";
// import spinnerr from "../assets/spinnerr.gif";
import spinnerr from "../assets/loadingIcon.gif";

function RealtorsAdminBig({ google, realtors, Referred, graficType }) {
  const [dato, setDato] = useState([]);
  const [time, setTime] = useState(false);

  const realtorsSale = realtors.filter((e) => e.Sells.length !== 0);
  const realtorsReferrals = realtors.filter((e) => e.Referrals.length !== 0);
  const realtorsReferred = realtors.filter((e) => e.Referrals.length !== 0);
 
  useEffect(() => {
    let dataSale = [];
    let dataRec = [];
    let dataRef = [];

    realtorsSale?.map((e, index) => {
      dataSale.push([e.name, e.Sells.length]);
    });

    realtorsReferrals?.map((e, index) => {
      dataRec.push([e.name, e.Referrals.length]);
    });

    realtorsReferred?.map((e, index) => {
      let Refferidos = Referred.filter((f) => f.User?.id == e.id).length;
      if (Refferidos !== 0) {
        dataRef.push([
          e.name,
          Referred.filter((f) => f.User?.id == e.id).length,
        ]);
      }
    });

    if (graficType === "Sales") {
      setDato(dataSale);
    } else if (graficType === "Recruited") {
      setDato(dataRec);
    } else {
      setDato(dataRef);
    }

    // if (graficType === 2) setDato('Hola');
    // if (graficType === 3) setDato(dataRef);
  }, [graficType, realtors]);

  useEffect(() => {
    setTime(false);
    setTimeout(() => {
      setTime(true);
      if (google) {
        const data = new google.visualization.DataTable();
        data.addColumn("string", "Topping");
        data.addColumn("number", `${graficType}`, "color:#6F52ED");
        data.addRows(dato);

        var options = {
          title: graficType,
          fontSize: 13,
          titleTextStyle: {
            fontName: "Gilroy-Regular",
            fontSize: "20",
          },
          colors: ["#2b4162"],
          backgroundColor: "#EBEFF2",
          bar: { groupWidth: "10%", borderRadius: "20px" },
          vAxis: { format: "0" },
          hAxis: { format: "0" },
          chartArea: { width: "80%", height: "80%" },
        };

        // Instantiate and draw our chart, passing in some options.
        const Chart = new google.visualization.ColumnChart(
          document.getElementById("Chart")
        );
        Chart.draw(data, options);
      }
    }, 500);
  }, [dato, realtors]);

  return (
    <>
      {!google && <p>Google 404</p>}
      {!time ? (
        <img
          src={spinnerr}
          style={{
            width: "150px",
            position: "absolute",
            right: "65vw",
            top: "40vh",
          }}
        />
      ) : (
        <div id="Chart" className={!google ? "d-none" : "graficBig"}></div>
      )}
    </>
  );
}

export default RealtorsAdminBig;
