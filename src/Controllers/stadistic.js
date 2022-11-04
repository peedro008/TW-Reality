import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StadisticComponent from "../Components/Stadistic";
import axios from "axios"

import useGoogleCharts from "../Charts/useGoogleCharts";
function Stadistic() {
  const Users = useSelector((state) => state.Users);
  const [dateReq, setDateReq] = useState({});
  const [yearLabel, setYearLabel] = useState("");
  const [dateSelected, setDateSelected] = useState("");
  const [defMonth, setDefMonth] = useState([])

  const google = useGoogleCharts();

  
const search = () => {
  dateSelected.substring(0,2)!=="00"?
    setDateReq({
      dateFrom: dateSelected.split("/").join("-"),
      dateTo:
        (parseFloat(dateSelected.substring(0, 2)) == 12
          ? "01"
          : parseFloat(dateSelected.substring(0, 2)).toString().length == 2
          ? parseFloat(dateSelected.substring(0, 2)) + 1
          : "0" + (parseFloat(dateSelected.substring(0, 2)) + 1)) +
        (parseFloat(dateSelected.substring(0, 2)) == 12
          ? dateSelected.substring(2, 6) +
            (parseFloat(dateSelected.substring(6, 10)) + 1)
          : dateSelected.substring(2, dateSelected.length)),
    }):
    setDateReq({
      dateFrom:"01"+ dateSelected.substring(2,dateSelected.length),
      dateTo:"01"+ dateSelected.substring(2,dateSelected.length-4)+(parseFloat(dateSelected.substring(dateSelected.length-4, dateSelected.length))+1)
    })
  };


  ///dateStuff
  //.split('/').join("-")
  const now = new Date();
  const NOW =
    now.getFullYear() + "-0" + (now.getMonth() + 1) + "-" + now.getDate();

  let yyyymmdd = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  useEffect(() => {
    setYearLabel(
      now.toLocaleDateString("en-US", { month: "short", year: "numeric" })
    );
    let temp = (yyyymmdd.substring(0, 3) + "01" + yyyymmdd.substring(5, yyyymmdd.length))
    .split("/")
    .join("-")
    setDateSelected(
      temp
    );

    setDateReq({
      dateFrom: temp.split("/").join("-"),
      dateTo:
        (parseFloat(temp.substring(0, 2)) == 12
          ? "01"
          : parseFloat(temp.substring(0, 2)).toString().length == 2
          ? parseFloat(temp.substring(0, 2)) + 1
          : "0" + (parseFloat(temp.substring(0, 2)) + 1)) +
        (parseFloat(temp.substring(0, 2)) == 12
          ? temp.substring(2, 6) +
            (parseFloat(temp.substring(6, 10)) + 1)
          : temp.substring(2, temp.length)),
    })

  }, []);


  let yearOptions = [
    parseFloat(yyyymmdd.substring(6, 10)),
    parseFloat(yyyymmdd.substring(6, 10)) - 1,
    parseFloat(yyyymmdd.substring(6, 10)) - 2,
    parseFloat(yyyymmdd.substring(6, 10)) - 3,
    parseFloat(yyyymmdd.substring(6, 10)) - 4,
  ];
  let monthOptions = [
    { value: "01", label: "Jan" },
    { value: "02", label: "Feb" },
    { value: "03", label: "Mar" },
    { value: "04", label: "Apr" },
    { value: "05", label: "May" },
    { value: "06", label: "Jun" },
    { value: "07", label: "Jul" },
    { value: "08", label: "Aug" },
    { value: "09", label: "Sep" },
    { value: "10", label: "Oct" },
    { value: "11", label: "Nov" },
    { value: "12", label: "Dec" },
    { value: "00", label: "All year" },
  ];


  useEffect(()=>{setDefMonth(monthOptions.find(e=>e.label==yearLabel.substring(0,3)))}, [yearLabel])
  
  const getRSells = (e) =>{
    let temp = 0

    e.map(e=>{
      if(e.Sells?.length){
      temp=temp+e.Sells.length}
    })
    return temp
  }

  return (
    <StadisticComponent
    getRSells={getRSells}
    Users={Users}
      yearLabel={yearLabel}
      yearOptions={yearOptions}
      monthOptions={monthOptions}
      setDateSelected={setDateSelected}
      dateSelected={dateSelected}
      setYearLabel={setYearLabel}
      search={search}
      dateReq={dateReq}
      defMonth={defMonth}
      google={google}
    />
  );
}

export default Stadistic;
