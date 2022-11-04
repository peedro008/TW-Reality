import React, { useEffect, useState } from "react";
import spinnerr from "../assets/spinnerr.gif";

function RealtorsAdminBig({ google, realtors, Referred, graficType }) {
  const [chart, setChart] = useState(null);
  const [dato, setDato] = useState([]);
  // const [datoRec, setDatoRec] = useState([]);
  // const [datoRef, setDatoRef] = useState([]);
  const [time, setTime] = useState(false);

  useEffect(() => {
    let dataSale = [];
    let dataRec = [];
    let dataRef = [];

    realtors?.map((e, index) => {
      dataSale.push([
        e.name,
        e.Sells.length,
      ]);
      dataRec.push([e.name, e.Referrals.length]);
      dataRef.push([e.name, Referred.filter((f) => f.User?.id == e.id).length]);
    });

    if (graficType === 1) {setDato(dataSale)}
    else if (graficType === 2) {setDato(dataRec)}
    else {setDato(dataRef)};
  
    console.log(graficType)
    // if (graficType === 2) setDato('Hola');
    // if (graficType === 3) setDato(dataRef);
  }, [graficType]);

  useEffect(() => {
    setTimeout(() => {

      setTime(true);
      if (google) {

        const data = new google.visualization.DataTable();
        data.addColumn("string", "Topping");
        data.addColumn("number", 'Sale', "color:#6F52ED");
        data.addRows(dato);

        var options = {
          title: 'Hola',
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
        console.log(data)
        // Instantiate and draw our chart, passing in some options.
        const Chart = new google.visualization.ColumnChart(
          document.getElementById("Chart")
        );
        Chart.draw(data, options);
    
        setChart(Chart);
     
      }
    }, 1000);

  }, [dato, chart]);
  

  return (
    <>
      {!google && <p>Google 404</p>}
      {!time ? (
        <img
          src={spinnerr}
          style={{
            width: "100px",
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
