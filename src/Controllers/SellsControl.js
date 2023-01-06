import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sells from "../Components/Sells";
import { getSells } from "../Redux/actions";
function SellsControl() {
  const allSells = useSelector((e) => e.Sells);
  const [sells, setSells] = useState([])
  const Users = useSelector((e) => e.Users);
  const dispatch = useDispatch();
  const [paginationSize, setpaginationSize] = useState([])
  const [paginator, setPaginator] = useState(1);
  const [size, setSize] = useState(10)
  
  useEffect(() => {
    axios
      .get(`https://truewayrealtorsapi.com/getSells`)
      .then(function (response) {
        response.status == 404
          ? dispatch(getSells([]))
          : dispatch(getSells(response.data));
      })
      .catch((error) => {
        dispatch(getSells([]));
      });
  }, []);


  useEffect(() => {
    onSubmitPagination((paginator -1) * size)
  }, [paginator])


  const onSubmitPagination = (page) => {
    fetch(`https://truewayrealtorsapi.com/getSellsPaginate?page=${page}&size=${size}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            console.log(res.status);
          } else {
            setSells(jsonRes.rows)
            setpaginationSize(tamañoPagination(jsonRes.count))
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
    let paginita = []
    for (let i = 0; i < totalCound/size; i++) {
       paginita.push(i + 1);
    }
    return paginita
  }



  function currencyFormat(num) {
    return '$' + num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }
 const formatNumber = (q) => {
  return q.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
  })
 } 

  return (
    <Sells
      allSells={allSells}
      sells={sells}
      Users={Users}
      paginationSize={paginationSize}
      paginator={paginator}
      setPaginator={setPaginator}
      currencyFormat={currencyFormat}
      formatNumber={formatNumber}
    />
  );
}

export default SellsControl;
