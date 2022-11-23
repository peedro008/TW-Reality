import React, { useEffect, useState } from "react";
import spinnerr from "../assets/loadingIcon.gif";
function RealtorsManagers({ google, realtors, Referred, goUser }) {
  const [chart, setChart] = useState(null);
  const [dato, setDato] = useState([]);
  const [time, setTime] = useState(false);
  const [maxNumber, setmaxNumber] = useState(0)

  useEffect(() => {
    let all = [];
    realtors?.map((e, index) => {
      all.push([
        e.name,
        e.Sells.length,
        e.Referrals.length,
        Referred.filter((f) => f.User?.id == e.id).length,
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
        data.addColumn("number", "Sales", "color:#6F52ED");
        data.addColumn("number", "Recruited", "color:#FF7A00");
        data.addColumn("number", "Referrals", "color:#33D69F");
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
          colors: ["#6F52ED", "#FF7A00", "#33D69F"],
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
        <div id="Realtors" className={!google ? "d-none" : "graficBig"}></div>
      )}
    </>
  );
}

export default RealtorsManagers;
