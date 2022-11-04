import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import spinnerr from "../assets/spinnerr.gif";

function RealtorsManager({ google, realtors, Referred }) {
  const [chart, setChart] = useState(null);
  const [datoSale, setDatoSale] = useState([]);
  const [datoRec, setDatoRec] = useState([]);
  const [datoRef, setDatoRef] = useState([]);
  const [datoCom, setDatoCom] = useState([]);
  const [time, setTime] = useState(false);

  // const date = new Date();
  // const DATE = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate();

  const stateRed = useSelector((state) => state);

  // let commision = stateRed.Commissions.filter(
  //   (us) =>
  //     (us.User.ReferredId === e.id) & (us.payded === true)
  // ).length * Number(e.ComissionValue)

  useEffect(() => {
    let dataSale = [];
    let dataRec = [];
    let dataRef = [];
    let dataCom = [];

    realtors?.map((e, index) => {
      dataSale.push([
        e.name,
        e.Sells.length,
        // e.Referrals.length,
        // Referred.filter((f) => f.User?.id == e.id).length,
      ]);
      dataRec.push([e.name, e.Referrals.length]);
      dataRef.push([e.name, Referred.filter((f) => f.User?.id == e.id).length]);
      dataCom.push([
        e.name,
        stateRed.Commissions.filter((us) => us.User.ReferredId === e.id)
          .length * Number(e.ComissionValue),
      ]);
    });
    setDatoSale(dataSale);
    setDatoRec(dataRec);
    setDatoRef(dataRef);
    setDatoCom(dataCom)
    console.log(dataCom);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTime(true);
      if (google && !chart) {
        const dataSale = new google.visualization.DataTable();
        dataSale.addColumn("string", "Topping");
        dataSale.addColumn("number", "Sales", "color:#6F52ED");
        dataSale.addRows(datoSale);

        const dataRecruited = new google.visualization.DataTable();
        dataRecruited.addColumn("string", "Topping");
        dataRecruited.addColumn("number", "Recruited");
        dataRecruited.addRows(datoRec);

        const dataReferrals = new google.visualization.DataTable();
        dataReferrals.addColumn("string", "Topping");
        dataReferrals.addColumn("number", "Referrals");
        dataReferrals.addRows(datoRef);

        const dataCommissions = new google.visualization.DataTable();
        dataCommissions.addColumn("string", "Topping");
        dataCommissions.addColumn("number", "Commisions");
        dataCommissions.addRows(datoCom);

        // Set chart options

        var options = {
          title: "Sales",
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

        var options2 = {
          title: "Recuited",
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

        var options3 = {
          title: "Refferals",
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

        var options4 = {
          title: "Commissions",
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
        const salesChart = new google.visualization.ColumnChart(
          document.getElementById("saleChart")
        );
        salesChart.draw(dataSale, options);

        setChart(salesChart);

        const RecruitedChart = new google.visualization.ColumnChart(
          document.getElementById("recChart")
        );
        RecruitedChart.draw(dataRecruited, options2);

        const ReferralsChart = new google.visualization.ColumnChart(
          document.getElementById("refChart")
        );
        ReferralsChart.draw(dataReferrals, options3);

        const CommissionsChart = new google.visualization.ColumnChart(
          document.getElementById("comChart")
        );
        CommissionsChart.draw(dataCommissions, options4);
      }
    }, 1000);
  }, [datoSale, chart]);

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
        <div className="parent">
          <div
            style={{
              height: "35vh",
              width: "auto",
            }}
            id="saleChart"
            className={!google ? "d-none" : "grid1"}
          ></div>
          <div
            style={{
              height: "35vh",
              width: "100%",
            }}
            id="recChart"
            className={!google ? "d-none" : "grid2"}
          ></div>
          <div
            style={{
              height: "35vh",
              width: "40vw",
            }}
            id="refChart"
            className={!google ? "d-none" : "grid3"}
          ></div>
          <div
            style={{
              height: "35vh",
              width: "40vw",
            }}
            id="comChart"
            className={!google ? "d-none" : "grid4"}
          ></div>
        </div>
      )}
    </>
  );
}

export default RealtorsManager;
