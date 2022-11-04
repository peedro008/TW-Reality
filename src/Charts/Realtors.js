import React, { useEffect, useState } from "react";
import spinnerr from "../assets/spinnerr.gif";
function Realtors({ google, realtors, Referred }) {
  const [chart, setChart] = useState(null);
  const [dato, setDato] = useState([]);
  const [time, setTime] = useState(false);

  // const date = new Date();
  // const DATE = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate();
console.log(google)
  useEffect(() => {
    let pes = [];
    realtors?.map((e, index) => {
      pes.push([
        e.name,
        e.Sells.length,
        e.Referrals.length,
        Referred.filter((f) => f.User?.id == e.id).length,
      ]);
    });
    setDato(pes);
    console.log(pes)
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTime(true);
      if (google && !chart) {
        const data = new google.visualization.DataTable();
        data.addColumn("string", "Topping");
        data.addColumn("number", "Sales", "color:#6F52ED");
        data.addColumn("number", "Recruited", "color:#FF7A00");
        data.addColumn("number", "Referrals", "color:#33D69F");
        data.addRows(dato);

        // Set chart options
        var options = {
          title: "Mothly stats",
          fontSize: 12,
          titleTextStyle: {
            fontName: "Gilroy-Regular",
            fontSize: "14",
            marginLeft: "-10px",
          },
          colors: ["#6F52ED", "#FF7A00", "#33D69F"],
          backgroundColor: "#EBEFF2",
          bar: { groupWidth: "10%", borderRadius: "10px" },
          vAxis: { format: "0" },
          hAxis: { format: "0" },
        };

        // Instantiate and draw our chart, passing in some options.
        const newChart = new google.visualization.ColumnChart(
          document.getElementById("Realtors")
        );
        newChart.draw(data, options);

        setChart(newChart);
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
        <div
          style={{
            minHeight: "300px",
            minWidth: "70vw",
            marginLeft: "-65px",
            marginTop: "-5px",
          }}
          id="Realtors"
          className={!google ? "d-none" : ""}
        ></div>
      )}
    </>
  );
}

export default Realtors;
