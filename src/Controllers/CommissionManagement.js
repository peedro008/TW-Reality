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
  const [form, setForm] = useState({
    dateFrom: "2020-01-01",
    dateTo: "2080-01-01",
  });
  const [commisions, setCommissions] = useState();
  const [nothing, setNothing] = useState();
  const [CommissionsByDate, setCommissionsByDate] = useState();
  const dispatch = useDispatch();
  const { dateFrom, dateTo } = form;
  const [paginator, setPaginator] = useState(0);
  const [paginationSize, setpaginationSize] = useState([]);
  const [commissionsPaginate, setCommissionsPaginate] = useState();
  const [size, setSize] = useState(10);
  const [reload, setReload] = useState();

  useEffect(() => {
    setCommissionsByDate(
      commisions?.slice(paginator * 10, paginator * 10 + 10)
    );
  }, [commisions, paginator]);
  
  useEffect(() => {
    if (reload === "Reload") {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [reload]);

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

  useEffect(() => {
    setCommissionsPaginate(
      Commissions?.slice(paginator * 10, paginator * 10 + 10)
    );
  }, [paginator]);

  // useEffect(() => {
  //   getCommissions((paginator) * size)
  // }, [paginator])

  // const getCommissions = (page) => {
  //   fetch(`http://localhost:8080/getCommissionPaginate?page=${page}&size=${size}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   })
  //     .then(async (res) => {
  //       try {
  //         const jsonRes = await res.json();

  //         if (res.status !== 200) {
  //           console.log("error");
  //           setNothing('Nothing Here')
  //         } else {
  //           console.log(jsonRes);
  //           // setCommissions(jsonRes.rows);
  //           setpaginationSize(tamañoPagination(jsonRes.count))
  //           setNothing()
  //         }
  //       } catch (err) {
  //         console.log(err);

  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const tamañoPagination = (totalCound) => {
    let paginita = [];
    for (let i = 0; i < totalCound / size; i++) {
      paginita.push(i + 1);
    }
    return paginita;
  };

  const getCommissionByDate = () => {
    fetch(
      `http://localhost:8080/getCommission?dateFrom=${dateFrom}&dateTo=${dateTo}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(async (res) => {
        try {
          const jsonRes = await res.json();

          if (res.status !== 200) {
            console.log("error");
            setNothing("Nothing On This Date");
          } else {
            console.log(jsonRes);
            setCommissions(jsonRes);
            setNothing();
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
            setReload("Reload");
          }
        } catch (err) {
          console.log(err);
        }
      })
      .then(() =>
        axios
          .get(`http://localhost:8080/getCommission`)
          .then(function (response) {
            response.status == 404
              ? dispatch(getCommission([]))
              : dispatch(getCommission(response.data));
          })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  const formatNumber = (q) => {
    return q?.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
   } 

  return (
    <CommissionManagementComponent
      Commissions={Commissions}
      CommissionsByDate={CommissionsByDate}
      setCommissionsByDate={setCommissionsByDate}
      commissionsPaginate={commissionsPaginate}
      setSelectedId={setSelectedId}
      selectedId={selectedId}
      onSubmit={onSubmit}
      open={open}
      Users={Users}
      onOpenModal={onOpenModal}
      onCloseModal={onCloseModal}
      modalPay={modalPay}
      setModalPay={setModalPay}
      form={form}
      setForm={setForm}
      getCommissionByDate={getCommissionByDate}
      nothing={nothing}
      paginator={paginator}
      setPaginator={setPaginator}
      paginationSize={paginationSize}
      formatNumber={formatNumber}
    />
  );
}

export default CommissionManagement;
