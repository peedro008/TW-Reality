import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sells from "../Components/Sells";
import SellsManager from "../Components/SellsManager";
import { getSells } from "../Redux/actions";
function SellsControlManager() {
  const allSells = useSelector((e) => e.Sells);
  const [sells, setSells] = useState([])
  const Users = useSelector((e) => e.Users);
  const [myUsersSell, setMyUsersSell] = useState([])
  const [myUsersSellPag, setMyUsersSellPag] = useState()
  const dispatch = useDispatch();
  const [paginationSize, setpaginationSize] = useState([])
  const [paginator, setPaginator] = useState(0);
  const [size, setSize] = useState(10)
  
  const myUsersID = Users.map((f) => {
    return f.id;
  })
  console.log(myUsersSellPag)
  useEffect(() => {
    const mySells = allSells?.filter(
      (e) => myUsersID?.includes(e.UserId)
    );
    setMyUsersSell(mySells)
  }, [allSells])
  


  useEffect(() => {
    setMyUsersSellPag(myUsersSell?.slice(paginator  * 10, paginator * 10 + 10))
  }, [paginator, myUsersSell])


  // const onSubmitPagination = (page) => {
  //   fetch(`https://truewayrealtorsapi.com/getSellsPaginate?page=${page}&size=${size}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   })
  //     .then(async (res) => {
  //       try {
  //         const jsonRes = await res.json();
  //         if (res.status !== 200) {
  //           console.log(res.status);
  //         } else {
  //           setSells(jsonRes.rows)
  //           setpaginationSize(tamañoPagination(jsonRes.count))
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
    <SellsManager
      allSells={myUsersSell}
      sells={sells}
      Users={Users}
      paginationSize={paginationSize}
      paginator={paginator}
      setPaginator={setPaginator}
      currencyFormat={currencyFormat}
      formatNumber={formatNumber}
      myUsersSellPag={myUsersSellPag}
    />
  );
}

export default SellsControlManager;
