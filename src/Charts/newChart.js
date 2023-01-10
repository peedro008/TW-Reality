import { Chart } from "react-google-charts";
import React,{ useEffect, useState } from "react";
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
    title: 'Transaction Coordinator',
  pieHole: 0.5,
  is3D: false,
  backgroundColor: 'transparent',
  colors: ["#84596B", "#98473E"],

};

const NewChart = () => {

    const transactionCoord = useSelector(state => state.TransactionCoordinator)

    const [dato, setDato] = useState([]);
    const [time, setTime] = useState(false);
  
  console.log(dato)
  console.log(data)
    useEffect(() => {
  
      let Unsold = 0;
      let Sold = 0;
      transactionCoord?.map(f => { if(f.isSold === true) {Unsold = Unsold + 1}})
      transactionCoord?.map(f => { if(f.isSold === false) {Sold = Sold + 1}})

      let pes = [
        ["TC", "%"],
        ["T.C.", Unsold],
        ["T.C. Active", Sold],
      ];
      let pas = [];
      pes.map((e) => {
        if (e[1] !== 0) pas.push(e);
      });
  
      setDato(pas);
    }, [transactionCoord]);
    if (dato.length > 1) {
  return (
    <div style={{position: 'fixed', left: '600px', bottom: '10vh',width: '600px'}}>

    <Chart
      chartType="PieChart"
      data={dato}
      options={options}
      width={"600px"}
      height={"400px"}
      style={{backgroundColor: 'transparent'}}
     
      />
      </div>
  )} else {
      return(<></>)
  }
}
export default NewChart