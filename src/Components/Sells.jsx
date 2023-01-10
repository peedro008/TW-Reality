import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaMoneyBillAlt } from "react-icons/fa";
import Select from "react-select";
import wbill from "../assets/wbill.png";
import Pagination from "./Pagination";

function Sells({
  allSells,
  sells,
  Users,
  paginationSize,
  paginator,
  setPaginator,
  currencyFormat,
  formatNumber
}) {
  const [Search, setSearch] = useState("");
  const [sumTotalSold, setSumTotalSold] = useState(0)
  const [sumTotalSoldSearch, setSumTotalSoldSearch] = useState(0)
  const realtorsList = Users.map((e) => ({ value: e.name, label: e.name }));

  let sumSold = 0;

  let Screen = window.screen

  useEffect(() => {
    setSumTotalSoldSearch(sumSold)
  }, [Search])
  

  useEffect(() => {
    let sumTotal = 0;
    allSells?.map((e) => {
      sumTotal = sumTotal + Math.floor(e.Value);
    })
    return setSumTotalSold(sumTotal)
  }, []);

  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{`Sells management`}</p>
      </div>
      <div
        style={{
          width: "20vw",
          minWidth: "500px",
          height: "35px",
          marginLeft: "5vw",
          marginTop: "2vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <BiSearchAlt2 size={"20px"} style={{ marginRight: "10px" }} />
        <input
          onChange={(e) => setSearch(e.target.value)}
          style={{
            height: "25px",
            borderColor: "transparent",
            borderRadius: "10px",
            paddingInline: "8px",
          }}
        ></input>
        <Select
          options={realtorsList}
          onChange={(e) => {
            setSearch(e.value);
          }}
          className="StadSelectGrafic"
          placeholder="Type"
        />
        {
          Search && <button onClick={() => setSearch('')} className="StadBoxDate" style={{height: 30}}>
          <p className="StadBoxTitle" style={{marginBottom: 0}}>Reset</p>
        </button>
        }
       
      </div>
      <div className="DashContainer">
        <div className="DashSubCont" style={{ maxWidth: "88vw" }}>
          <>
            <table className="table5" style={{ marginTop: "2vh", width: '90vw', marginLeft: '0px'  }}>
              <tbody>
                <tr>
                  <th scope="col" className="column1" >
                    <p className="REPtype2">Client name</p>
                  </th>
                  <th scope="col" className="column1" >
                    <p className="REPtype2">Sold by</p>
                  </th>
                  <th scope="col" className="column1" >
                    <p className="REPtype2">Closing date</p>
                  </th>
                  <th scope="col" className="column1" >
                    <p className="REPtype2">Address</p>
                  </th>
                  <th scope="col" className="column1" >
                    <p className="REPtype2">Price</p>
                  </th>
                </tr>
                {Search
                  ? allSells
                      .filter(
                        (e) =>
                          e.ClientName?.toLowerCase().includes(
                            Search.toLowerCase()
                          ) ||
                          e.User?.name
                            ?.toLowerCase()
                            .includes(Search.toLowerCase()) ||
                          Users?.filter((f) => f.id == e.UserId)[0]
                            ?.name?.toLowerCase()
                            .includes(Search.toLowerCase())
                      )
                      .map((e,i) => {
                        sumSold = sumSold + Math.floor(e.Value);
                        return (
                          <tr key={i}>
                          <td className="ClientName" scope="row">
                            {e.ClientName}
                          </td>
                          <td className="ClientName" scope="row">
                            {e.User?.name}
                          </td>

                          <td className="ClientName" scope="row">
                            {e.ClosingDate}
                          </td>
                          <td className="ClientName" scope="row">
                            {e.Address}
                          </td>
                          <td className="ClientName" scope="row">
                          {currencyFormat(e.Value)}
                          </td>
                        </tr>
                        );
                      })
                  : sells?.map((e,i) => {
                      sumSold = sumSold + Math.floor(e.Value);
                      return (
                        <tr key={i}>
                          <td className="ClientName" scope="row">
                            {e.ClientName}
                          </td>
                          <td className="ClientName" scope="row">
                            {e.User?.name}
                          </td>

                          <td className="ClientName" scope="row">
                            {e.ClosingDate}
                          </td>
                          <td className="ClientName" scope="row">
                            {e.Address}
                          </td>
                          <td className="ClientName" scope="row">
                          {currencyFormat(e.Value)}
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </>
        </div>
      </div>
      {
        Screen.width > 1000 ?
      <div
        className="CardsGraficsCommision"
        style={{
          marginLeft: "20px",
          top: "100px",
          backgroundColor: "rgba(0, 39, 82,0.8)",
        }}
      >
        <div
          className="dashCircle"
          style={{ backgroundColor: "#ebeff2" }}
        >
          <FaMoneyBillAlt size='28px' color='#002752'/>
        </div>
        <div className="dashText">
          <p className="dashCardTitle" style={{color: "#ebeff2"}}>{formatNumber(sumTotalSold)}</p>
          <p className="dashCardText" style={{color: "#ebeff2"}}>Total Sold</p>
        </div>
      </div>
      :
      <div
      className="CardsGraficsCommision"
      style={{
        left: "100px",
        bottom: "250px",
        backgroundColor: "rgba(0, 39, 82,0.8)",
      }}
    >
      <div
        className="dashCircle"
        style={{ backgroundColor: "#ebeff2" }}
      >
        <FaMoneyBillAlt size='28px' color='#002752'/>
      </div>
      <div className="dashText">
        <p className="dashCardTitle">{formatNumber(sumTotalSold)}</p>
        <p className="dashCardText">Total Sold</p>
      </div>
    </div>
      }

        {
          Search && Screen.width > 1000 ?
         
          <div
          className="CardsGraficsCommision"
          style={{
            right: "300px",
            top: "100px",
            backgroundColor: "#84596B",
          }}
        >
          <div
            className="dashCircle"
            style={{ backgroundColor: "#ebeff2" }}
          >
            <FaMoneyBillAlt size='28px' color="#84596B"/>
          </div>
          <div className="dashText">
            <p className="dashCardTitle" style={{color: "#ebeff2"}}>{formatNumber(sumTotalSoldSearch)}</p>
            <p className="dashCardText" style={{color: "#ebeff2"}}>Sold On Search</p>
          </div>
        </div>
        : Search &&
        <div
        className="CardsGraficsCommision"
        style={{
          left: "400px",
          bottom: "250px",
          backgroundColor: "rgba(111, 82, 237, 0.15)",
        }}
      >
        <div
          className="dashCircle"
          style={{ backgroundColor: "rgba(239, 239, 239,0.3)" }}
        >
          <img src={wbill} />
        </div>
        <div className="dashText">
          <p className="dashCardTitle">{formatNumber(sumTotalSoldSearch)}</p>
          <p className="dashCardText">Sold On Search</p>
        </div>
      </div>
        }
     
      <Pagination paginator={paginator} setPaginator={setPaginator} paginationSize={paginationSize}/>
    </div>
  );
}

export default Sells;
