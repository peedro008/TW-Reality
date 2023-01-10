import { Chart } from "react-google-charts";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];
export const options = {
  pieSliceText: "none",
  title: "Marketing",
  pieHole: 0.5,
  is3D: false,
  backgroundColor: "transparent",
  colors: ['#B0DAF1', '#002752'],
};

const NewChartMarketing = () => {
  const PackageMarketing = useSelector((state) => state.PackageMarketing);

  const [dato, setDato] = useState([]);
  const [time, setTime] = useState(false);

  useEffect(() => {
    let Unsold = 0;
    let Sold = 0;
    PackageMarketing?.map((f) => {
      if (typeof f.closingDate === "string") {
        Unsold = Unsold + 1;
      }
    });
    PackageMarketing?.map((f) => {
      if (f.closingDate !== "string") {
        Sold = Sold + 1;
      }
    });

    let pes = [
      ["Marketing", "%"],
      ["Closed", Unsold],
      ["Monthly", Sold],
    ];
    let pas = [];
    pes.map((e) => {
      if (e[1] !== 0) pas.push(e);
    });

    setDato(pas);
  }, [PackageMarketing]);

  console.log(dato.length);

  if (dato.length > 1) {
    return (
      <div
        style={{
          position: "fixed",
          left: "50px",
          bottom: "10vh",
          width: "600px",
        }}
      >
        <Chart
          chartType="PieChart"
          data={dato}
          options={options}
          width={"600px"}
          height={"400px"}
          style={{ backgroundColor: "transparent" }}
        />
      </div>
    );
  } else {
    return <></>;
  }
};
export default NewChartMarketing;
