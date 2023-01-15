import React, { useEffect, useState } from "react";
import spinnerr from "../assets/loadingIcon.gif";
function RealtorsManagers({ google, realtors, Referred, goUser }) {
  const [chart, setChart] = useState(null);
  const [dato, setDato] = useState([]);
  const [time, setTime] = useState(false);
  const [maxNumber, setmaxNumber] = useState(0)
  console.log(realtors)
  const realtorsWithData = realtors.filter(e => e.Sells?.length !== 0 || e.Referrals?.length !== 0 || Referred.filter((f) => f.User?.id == e.id)?.length !== 0 || e.PackageMarketings?.length !== 0 || e.TransactionCoordinators?.length !== 0) 
  let Screen = window.screen
  useEffect(() => {
    let all = [];
    realtorsWithData?.map((e, index) => {
      all.push([
        e.name,
        e.Sells?.length,
        realtors.filter(f => e.id === f.ReferredId)?.length,
        Referred.filter((f) => f.User?.id == e.id)?.length,
        // e.PackageMarketings?.length,
        // e.TransactionCoordinators?.length
      ]);
    });
    setDato(all);
    let arrNum = all.map(e => e.slice(1,4));
    let arrNumMax = (arrNum.map(e => Math.max(...e)))
    setmaxNumber(Math.max(...arrNumMax))
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTime(true);
      if (google && !chart) {
        const data = new google.visualization.DataTable();
        data.addColumn("string", "Topping");
        data.addColumn("number", "Sales", "color:#002752");
        data.addColumn("number", "Recruited", "color:#D8AF4D");
        data.addColumn("number", "Referrals", "color:#B0DAF1");
        // data.addColumn("number", "Package Marketing", "color:#DC4C64");
        // data.addColumn("number", "Transaction Coord", "color:#332D2D");
        data.addRows(dato);

        // Set chart options
        var options = {
          title: "Stats",
          fontSize: 12,
          titleTextStyle: {
            fontName: "Gilroy-Regular",
            fontSize: "20",
            marginLeft: "-10px",
          },
          colors: ["#002752", "#D8AF4D", "#B0DAF1"],
          backgroundColor: "#EBEFF2",
          bar: { groupWidth: "40%", borderRadius: "10px" },
          vAxis: { format: "0", minValue: maxNumber + 2 },
          hAxis: { format: "0" },
          chartArea: { width: "70%", height: "80%" },
        };

        // Instantiate and draw our chart, passing in some options.
        const newChart = new google.visualization.ColumnChart(
          document.getElementById("Realtors")
        );
        google.visualization.events.addListener(newChart, 'select', selectHandler);

        function selectHandler(e) {
        var selectedItem = newChart.getSelection()[0];
        var value = data.getValue(selectedItem.row, 0);
        goUser(value)
}
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
         width: "150px",
         position: "absolute",
         right: "65vw",
         top: "40vh",
       }}
     />
      ) : (
        <div id="Realtors" className={!google ? "d-none" : Screen.width > 1000 ? "graficBig" : 'graficBigIpad' }></div>
      )}
    </>
  );
}

export default RealtorsManagers;
