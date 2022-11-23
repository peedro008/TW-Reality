import React, { useEffect, useState } from "react";
// import spinnerr from "../assets/spinnerr.gif";
import spinnerr from "../assets/loadingIcon.gif";

function RealtorsAdminBig({ google, realtors, Referred, graficType, goUser }) {
  const [dato, setDato] = useState([]);
  const [time, setTime] = useState(false);
  const [maxNumber, setmaxNumber] = useState(0)
  const [color, setColor] = useState("#2b4162")

  const realtorsSale = realtors.filter((e) => e.Sells.length !== 0);
  const realtorsRecruited = realtors.filter((e) => e.Referrals.length !== 0);
  const realtorsReferred = realtors.map(e => Referred.filter((f) => f.UserId == e.id)).filter(e => e.length !== 0)
 
  useEffect(() => {
    let dataSale = [];
    let dataRec = [];
    let dataRef = [];

    realtorsSale?.map((e, index) => {
      dataSale.push([e.name, e.Sells.length]);
    });

    realtorsRecruited?.map((e, index) => {
      dataRec.push([e.name, e.Referrals.length]);
    });

    realtorsReferred?.map((e, index) => {
      dataRef.push([e[0].User.name,
        e.length,
     ])
    });

    if (graficType === "Sales") {
      setDato(dataSale);

      let arrNum = dataSale.map(e => e.slice(1));
      let arrNumMax = (arrNum.map(e => Math.max(...e)))
      setmaxNumber(Math.max(...arrNumMax))
      setColor('#6F52ED')
    } else if (graficType === "Recruited") {
      setDato(dataRec);
      let arrNum = dataRec.map(e => e.slice(1));
      let arrNumMax = (arrNum.map(e => Math.max(...e)))
      setmaxNumber(Math.max(...arrNumMax))
      setColor("#FF7A00")
    } else {
      setDato(dataRef);
      let arrNum = dataRef.map(e => e.slice(1));
      let arrNumMax = (arrNum.map(e => Math.max(...e)))
      setmaxNumber(Math.max(...arrNumMax))
      setColor("#33D69F")
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
          colors: [color],
          backgroundColor: "#EBEFF2",
          bar: { groupWidth: "20%", borderRadius: "20px" },
          vAxis: { format: "0", minValue: 0, maxValue: maxNumber + 2 },
          hAxis: { format: "0" },
          chartArea: { width: "70%", height: "80%" },
        };


        // Instantiate and draw our chart, passing in some options.
        const Chart = new google.visualization.ColumnChart(
          document.getElementById("Chart")
        );
        google.visualization.events.addListener(Chart, 'select', selectHandler);

        function selectHandler(e) {
        var selectedItem = Chart.getSelection()[0];
        var value = data.getValue(selectedItem.row, 0);
        goUser(value)
}
        Chart.draw(data, options);
      }

    }, 1000);
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
