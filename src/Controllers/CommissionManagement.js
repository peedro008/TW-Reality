import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommissionManagementComponent from "../Components/CommissionManagement";
import { getCommission } from "../Redux/actions";
function CommissionManagement() {
  const Commissions = useSelector((e) => e.Commissions);
  const Users = useSelector((e) => e.Users);
  const [modalPay, setModalPay] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [form, setForm] = useState({});
  const [dataDate, setDataDate] = useState()
  const [nothing, setNothing] = useState()
  const [CommissionsByDate, setCommissionsByDate] = useState(Commissions)
  const dispatch = useDispatch();
  const {dateFrom, dateTo} = form

  useEffect(() => {
    setCommissionsByDate(dataDate || Commissions )
  }, [dataDate])


// var today = new Date();
// var day = today.getDate();
// var month = today.getMonth() + 1;
// var year = today.getFullYear();
// console.log(`${month}/${day}/${year}`);


  useEffect(() => {
    axios
      .get(`http://localhost:8080/getCommission`)
      .then(function (response) {
        response.status == 404
          ? dispatch(getCommission([]))
          : dispatch(getCommission(response.data));
      })
      .catch((error) => {
        dispatch(getCommission([]));
      });
  }, []);

  const getCommissionByDate = () => {
    fetch(`http://localhost:8080/getCommission?dateFrom=${dateFrom}&dateTo=${dateTo}`, {
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
            setDataDate(jsonRes);
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

  const onSubmit = () => {
    fetch(`http://localhost:8080/paycommission`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: selectedId }),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();

          if (res.status !== 200) {
            console.log("error");
          } else {
            console.log(jsonRes);
          }
        } catch (err) {
          console.log(err);
        }
      })
      .then(() => window.location.reload())
      .catch((err) => {
        console.log(err);
      });
  };
  let yearOptions = [
    { value: "2020-", label: "2020" },
    { value: "2021-", label: "2021" },
    { value: "2022-", label: "2022" },
    { value: "2023-", label: "2023" },
    { value: "2024-", label: "2024" },
    { value: "2025-", label: "2025" },
    { value: "2026-", label: "2026" },
    { value: "2027-", label: "2027" },
    { value: "2028-", label: "2028" },
    { value: "2029-", label: "2029" },
    { value: "2030-", label: "2030" },
  ];

  let monthOptions = [
    { value: "01-01", label: "Jan" },
    { value: "02-01", label: "Feb" },
    { value: "03-01", label: "Mar" },
    { value: "04-01", label: "Apr" },
    { value: "05-01", label: "May" },
    { value: "06-01", label: "Jun" },
    { value: "07-01", label: "Jul" },
    { value: "08-01", label: "Aug" },
    { value: "09-01", label: "Sep" },
    { value: "10-01", label: "Oct" },
    { value: "11-01", label: "Nov" },
    { value: "12-01", label: "Dec" },
    { value: "00-01", label: "All year" },
  ];

  let monthOptions2 = [
    { value: "01-01", label: "Jan" },
    { value: "02-01", label: "Feb" },
    { value: "00-01", label: "All year" },
  ];
  function toMs(dateStr) {
    // desarmamos el string por los '-' los descartamos y lo transformamos en un array
    let parts = dateStr.split("-")
    // parts[2] es año
    // parts[1] el mes
    // parts[0] el día
    return new Date(parts[0], parts[1] - 1, parts[2]).getTime()
  }

  return (
    <CommissionManagementComponent
      Commissions={Commissions}
      CommissionsByDate={CommissionsByDate}
      setSelectedId={setSelectedId}
      selectedId={selectedId}
      onSubmit={onSubmit}
      open={open}
      Users={Users}
      onOpenModal={onOpenModal}
      onCloseModal={onCloseModal}
      modalPay={modalPay}
      setModalPay={setModalPay}
      yearOptions={yearOptions}
      monthOptions={monthOptions}
      monthOptions2={monthOptions2}
      form={form}
      setForm={setForm}
      getCommissionByDate={getCommissionByDate}
      nothing={nothing}
    />
  );
}

export default CommissionManagement;
