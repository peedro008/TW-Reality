import React, { useEffect, useState } from "react";
import spinnerr from "../assets/loadingIcon.gif";
function Realtors({ google, realtors, Referred, goUser, Screen }) {
  const [chart, setChart] = useState(null);
  const [dato, setDato] = useState([]);
  const [time, setTime] = useState(false);
  const [maxNumber, setmaxNumber] = useState(0)

  const realtorsUp = realtors?.filter((e) => e.Sells.length !== 0 || e.Referrals.length !== 0 );

        // let transaction = 0;
        // realtorsUp.map(e => e.TransactionCoordinators.map(f => { if(f.isSold === true) {transaction = transaction + 1}}))
        // // setSumTransactionCoord(transaction)
        
        // let transactionActive = 0;
        // realtorsUp.map(e => e.TransactionCoordinators.map(f => { if(f.isSold === false) {transactionActive = transactionActive + 1}}))
        // // setSumTransactionCoordActive(transactionActive)

  useEffect(() => {
    let all = [];
    realtorsUp?.map((e, index) => {

      let transaction = 0;
      e.TransactionCoordinators?.map(f => { if(f.isSold === true) {transaction = transaction + 1}})

      let transactionActive = 0;
      e.TransactionCoordinators?.map(f => { if(f.isSold === false) {transactionActive = transactionActive + 1}})

      all.push([
        e.name,
        e.Sells.length,
        realtors.filter(f => e.id === f.ReferredId).length,
        Referred.filter((f) => f.User?.id == e.id).length,
        e.PackageMarketings?.length,
        transaction,
        transactionActive,
      ]);
    });
    setDato(all);
    let arrNum = all.map(e => e.slice(1,4));
    let arrNumMax = (arrNum.map(e => Math.max(...e)))
    setmaxNumber(Math.max(...arrNumMax))
  }, [realtors]);
  
  useEffect(() => {
    
    setTime(false)
    setTimeout(() => {
      setTime(true);
      if (google) {
        const data = new google.visualization.DataTable();
        data.addColumn("string", "Topping");
        data.addColumn("number", "Sales", "color:#002752");
        data.addColumn("number", "Recruited", "color:rgb(216, 175, 77)");
        data.addColumn("number", "Referrals", "color:#B0DAF1");
        data.addColumn("number", "Package Marketing", "color:#2CA58D");
        data.addColumn("number", "Transaction Coord", "color:#84596B");
        data.addColumn("number", "Transaction Active", "color:#98473E");
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
          colors: ["#002752", "rgb(216, 175, 77)", "#B0DAF1", '#2CA58D', '#84596B',"#98473E"],
          backgroundColor: "#EBEFF2",
          bar: { groupWidth: "80%", borderRadius: "10px" },
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
    }, 1500);

  }, [dato, realtors]);

//   useEffect(() => {
//     setTime(false);
//     setTimeout(() => {
//       setTime(true);
//       if (google) {
//         const data = new google.visualization.DataTable();
//         data.addColumn("string", "Topping");
//         data.addColumn("number", `${graficType}`, "color:#6F52ED");
//         data.addRows(dato);

//         var options = {
          
//           title: graficType,
//           fontSize: 13,
//           titleTextStyle: {
//             fontName: "Gilroy-Regular",
//             fontSize: "20",
//           },
//           colors: [color],
//           backgroundColor: "#EBEFF2",
//           bar: { groupWidth: "20%", borderRadius: "20px" },
//           vAxis: { format: "0", minValue: 0, maxValue: maxNumber + 2 },
//           hAxis: { format: "0" },
//           chartArea: { width: "70%", height: "80%" },
//         };


//         // Instantiate and draw our chart, passing in some options.
//         const Chart = new google.visualization.ColumnChart(
//           document.getElementById("Chart")
//         );
//         google.visualization.events.addListener(Chart, 'select', selectHandler);

//         function selectHandler(e) {
//         var selectedItem = Chart.getSelection()[0];
//         var value = data.getValue(selectedItem.row, 0);
//         goUser(value)
// }
//         Chart.draw(data, options);
//       }

//     }, 1000);
//   }, [dato, realtors]);

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
        <div id="Realtors" className={!google ? "d-none" : Screen.width < 1000 ? "graficBigIpad" : "graficBig"}></div>
      )}
    </>
  );
}

export default Realtors;
