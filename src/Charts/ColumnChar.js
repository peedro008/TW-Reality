import axios from "axios";
import React,{ useEffect, useState } from "react";
import { useSelector } from "react-redux";
import spinnerr from "../assets/spinnerr.gif";
import useGoogleCharts from "../Charts/useGoogleCharts";

function PozzaChart() {
  const google = useGoogleCharts();
  const [chart, setChart] = useState(null);
  const transactionCoord = useSelector(state => state.TransactionCoordinator)
  const [dato, setDato] = useState([]);
  const [time, setTime] = useState(false);


  useEffect(() => {

    let Unsold = 0;
    let Sold = 0;
    transactionCoord?.map(f => { if(f.isSold === true) {Unsold = Unsold + 1}})
    transactionCoord?.map(f => { if(f.isSold === false) {Sold = Sold + 1}})
    // let Sold = 0;
    // let Unsold = 0;
    // quotes.map((e) => {
    //   if (e.QuoteStatuses.some((f) => f.Status === "Sold")) {
    //     Sold++;
    //   }
    // });
    // Unsold = quotes.length - Sold;
    let pes = [
      ["Unsold", Unsold],
      ["Sold", Sold],
    ];
    let pas = [];
    pes.map((e) => {
      if (e[1] !== 0) pas.push(e);
    });

    setDato(pas);
  }, [transactionCoord]);

  useEffect(() => {
    setTimeout(() => {
      setTime(true);
      if (google && !chart) {
        const data = new google.visualization.DataTable();
        data.addColumn("string", "Topping");
        data.addColumn("number", "Slices");

        data.addRows(dato);

        // Set chart options
        var options = {
          title: "Quote status",

          pieHole: 0.4,
          titleTextStyle: {
            fontName: "Gilroy-Regular",
            fontSize: "14",
            marginLeft: "-10px",
          },
          height: 400,
          width: 600,
          colors: ["#FFB800", "#33D69F", "#FF4C61", "#777DA7", "#ADD9F4"],

          backgroundColor: "#EBEFF2",
        };

        // Instantiate and draw our chart, passing in some options.
        const newChart = new google.visualization.PieChart(
          document.getElementById("pozzaChart")
        );
        newChart.draw(data, options);

        setChart(newChart);
      }
    }, 2000);
  }, [dato, chart]);
  return (
    <>
      {!google && <p>Loading</p>}
      {!time ? (
        <div style={{ height: "400px", width: "650px" }}>
          <img
            src={spinnerr}
            style={{
              width: "100px",
              position: "absolute",
              right: "50vw",
              top: "50vh",
            }}
          />
        </div>
      ) : (
        <div id="pozzaChart" className={!google ? "d-none" : ""} />
      )}
    </>
  );
}

export default PozzaChart;
