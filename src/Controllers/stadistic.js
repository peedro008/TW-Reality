import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StadisticComponent from "../Components/stadistic";

function Stadistic() {
  const [nothing, setNothing] = useState();
  const [UsersByDate, setUsersByDate] = useState();
  const [form, setForm] = useState({});
  const [dataDate, setDataDate] = useState();
  const { dateFrom, dateTo } = form;
  const [paginationSize, setpaginationSize] = useState([]);
  const [paginator, setPaginator] = useState(1);
  const [commissionsPaginate, setCommissionsPaginate] = useState();
  const [size, setSize] = useState(5);
  const Users = useSelector((state) => state.Users);

  useEffect(() => {
    setUsersByDate(dataDate);
  }, [dataDate]);

  useEffect(() => {
    setCommissionsPaginate(
      Users.slice((paginator - 1) * 5, (paginator - 1) * 5 + 5)
    );
  }, [paginator]);

  useEffect(() => {
    onSubmitPagination((paginator - 1) * size);
    onSubmitPaginationSize();
  }, [paginator]);

  const onSubmit = () => {
    fetch(
      `https://truewayrealtorsapi.com/getRealtors?dateFrom=${
        dateFrom || "2015-01-24"
      }&dateTo=${dateTo || "2115-01-24"}`,
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
            setDataDate(jsonRes);
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

  const onSubmitPagination = (page) => {
    fetch(
      `https://truewayrealtorsapi.com/getUsersPagination?page=${page}&size=${size}`,
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
            setNothing("Nothing Here");
          } else {
            // setDataDate(jsonRes.rows)
            // setpaginationSize(tamañoPagination(jsonRes.count))
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

  const onSubmitPaginationSize = () => {
    fetch(`https://truewayrealtorsapi.com/getUsersSize`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            console.log("error");
          } else {
            setpaginationSize(tamañoPagination(jsonRes.count));
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const tamañoPagination = (totalCound) => {
    let paginita = [];
    for (let i = 0; i < totalCound / size; i++) {
      paginita.push(i + 1);
    }
    return paginita;
  };

  const getRSells = (e) => {
    let temp = 0;

    let UsersSale = Users.filter((i) => e.map((f) => f.id === i.id));
    console.log(UsersSale);
    UsersSale.map((e) => (temp = temp + e.Sells.length));
    return temp;
  };

  return (
    <StadisticComponent
      getRSells={getRSells}
      UsersByDate={UsersByDate}
      form={form}
      setForm={setForm}
      onSubmit={onSubmit}
      nothing={nothing}
      onSubmitPagination={onSubmitPagination}
      paginationSize={paginationSize}
      paginator={paginator}
      setPaginator={setPaginator}
      commissionsPaginate={commissionsPaginate}
    />
  );
}

export default Stadistic;
