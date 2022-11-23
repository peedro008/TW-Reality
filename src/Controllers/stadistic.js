import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StadisticComponent from "../Components/Stadistic";

function Stadistic() {
  const Users = useSelector((state) => state.Users);
  const [dateReq, setDateReq] = useState({});
  const [yearLabel, setYearLabel] = useState("");
  const [dateSelected, setDateSelected] = useState("");
  const [yearLabelTo, setYearLabelTo] = useState("");
  const [dateSelectedTo, setDateSelectedTo] = useState("");
  const [defMonth, setDefMonth] = useState([])
  const [nothing, setNothing] = useState()
  const [UsersByDate, setUsersByDate] = useState()
  const [form, setForm] = useState({});
  const [dataDate, setDataDate] = useState()
  const {dateFrom, dateTo} = form

  useEffect(() => {
    setUsersByDate(dataDate || Users )
  }, [dataDate])
  
  console.log(form)
  console.log(dataDate)

  const onSubmit = () => {
    fetch(`http://localhost:8080/getRealtors?dateFrom=${dateFrom}&dateTo=${dateTo}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();

          if (res.status !== 200) {
            console.log("error");
            setNothing('Nothing On This Date')
          } else {
            console.log(jsonRes);
            setDataDate(jsonRes)
            setNothing()
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
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
      yearLabelTo={yearLabelTo}
      setDateSelected={setDateSelected}
      dateSelected={dateSelected}
      setDateSelectedTo={setDateSelectedTo}
      UsersByDate={UsersByDate}
      form={form}
      setForm={setForm}
      onSubmit={onSubmit}
      nothing={nothing}
    />
  );
}

export default Stadistic;
