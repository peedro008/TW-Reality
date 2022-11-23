import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Select from "react-select";

function StadisticComponent({
  yearLabel,
  onSubmit,
  getRSells,
  Users,
  form,
  setForm,
  UsersByDate,
  nothing
}) {
  const stateRed = useSelector((state) => state);
  const [Search, setSearch] = useState("");
  const [dating, setDating] = useState(true);
  const [año, setAño] = useState("2015-");
  const [mes, setMes] = useState("01-01");
  const [fechaInicial, setFechaInicial] = useState("2022-02-28");
  const [añoFinal, setAñoFinal] = useState("2080-");
  const [mesFinal, setMesFinal] = useState("01-01");
  const [fechaFinal, setFechaFinal] = useState("2022-02-30");

  useEffect(() => {
    setFechaInicial(toMsDate(año + mes));
  }, [año, mes]);
  useEffect(() => {
    setFechaFinal(toMsDate(añoFinal + mesFinal));
  }, [añoFinal, mesFinal]);

  function toMsDate(dateStr) {
    // desarmamos el string por los '-' los descartamos y lo transformamos en un array
    let parts = dateStr.split("-");
    // parts[2] es año
    // parts[1] el mes
    // parts[0] el día
    return new Date(parts[0], parts[1] - 1, parts[2]).getTime();
  }

  return (
    <div className="genericDiv1">
      <div className="StadCalendarDiv">
        <p className="StadCalendarTitle" style={{marginBottom: '20px'}}>Users Management</p>
        { nothing && <p className="genericTitleNothing">{nothing}</p>}
        <div style={{display: 'flex'}}>

        
        <div className="StadSelectCont">
          <p
            style={{
              color: "#2b4162",
              alignSelf: "center",
              justifySelf: "center",
              paddingRight: "10px",
            }}
            className="StadisticProdName"
          >
            From:
          </p>
          <input
            type={"date"}
            onChange={(e) => {
              setForm({ ...form, dateFrom: e.target.value });
            }}
            placeholder="ClosingDate"
            className="AQinputDate"
          ></input>
        </div>
        <div className="StadSelectCont">
          <p
            style={{
              color: "#2b4162",
              alignSelf: "center",
              justifySelf: "center",
              paddingRight: "10px",
              marginLeft: "10px",
            }}
            className="StadisticProdName"
          >
            To:
          </p>
          <input
            type={"date"}
            onChange={(e) => {
              setForm({ ...form, dateTo: e.target.value });
            }}
            placeholder="ClosingDate"
            className="AQinputDate"
          ></input>
        </div>
        <button onClick={() => onSubmit()} className="StadBoxDate">
          <p className="StadBoxTitle">Search</p>
        </button>
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            right: "20px",
            top: "80px",
          }}
        >
          <BiSearchAlt2 size={"30px"} style={{ marginRight: "10px" }} />{" "}
          <input
            onChange={(e) => setSearch(e.target.value)}
            style={{
              height: "25px",
              borderColor: "transparent",
              borderRadius: "10px",
              paddingInline: "8px",
            }}
          ></input>
        </div>
      </div>
      <div className="StadisticRowName">
        {UsersByDate?.length ? (
          Search ? (
            UsersByDate?.filter((e) =>
              e.name?.toLowerCase().includes(Search.toLowerCase())
            ).map((e, i) => {
              return (
                <div key={i}>
                  <p style={{ color: "#2b4162" }} className="StadisticProdName">
                    {e.name}
                  </p>

                  <NavLink
                    className="icons"
                    to={{ pathname: "/salesByMe", state: { aboutProps: e } }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p className="StadBoxTitle">Sales by me</p>
                      <p className="StadBoxVal">{e.Sells.length}</p>
                    </div>
                  </NavLink>

                  <NavLink
                    className="icons"
                    to={{
                      pathname: "/salesByRealtors",
                      state: { aboutProps: e },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p className="StadBoxTitle">Sales by my realtors</p>
                      <p className="StadBoxVal">
                        {e.Referrals.length ? getRSells(e.Referrals) : 0}
                      </p>
                    </div>
                  </NavLink>

                  <NavLink
                    className="icons"
                    to={{ pathname: "/newRealtors", state: { aboutProps: e } }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p className="StadBoxTitle">New Realtors</p>
                      <p className="StadBoxVal">{e.Referrals.length}</p>
                    </div>
                  </NavLink>

                  <NavLink
                    className="icons"
                    to={{
                      pathname: "/myReferrals",
                      state: {
                        aboutProps: stateRed.Referred?.filter(
                          (i) => e.id === i.User?.id
                        ),
                        name: e.name,
                      },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p className="StadBoxTitle">My Referrals</p>
                      <p className="StadBoxVal">
                        {
                          stateRed.Referred?.filter((i) => e.id === i.User?.id)
                            .length
                        }
                      </p>
                    </div>
                  </NavLink>
                  <NavLink
                    className="icons"
                    to={{
                      pathname: "/sells",
                      state: {
                        aboutProps: stateRed.Referred?.filter(
                          (i) => e.id === i.UserId
                        ),
                        name: e.name,
                      },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p className="StadBoxTitle">Total Sol</p>
                      <p className="StadBoxVal">
                        {
                          stateRed.Referred?.filter((i) => e.id === i.UserId)
                            .length
                        }
                      </p>
                    </div>
                  </NavLink>

                  <NavLink
                    className="icons"
                    to={{
                      pathname: "/totalCommissionPaid",
                      state: {
                        aboutProps: stateRed.Commissions.filter(
                          (us) =>
                            (us.commisionTo === e.id) & (us.payded === true)
                        ),
                        name: e.name,
                      },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p className="StadBoxTitle">Total commission paid</p>
                      <p className="StadBoxVal">
                        {stateRed.Commissions.filter(
                          (us) =>
                            (us.commisionTo === e.id) & (us.payded === true)
                        ).length * Number(e.ComissionValue)}
                      </p>
                    </div>
                  </NavLink>

                  <NavLink
                    className="icons"
                    to={{
                      pathname: "/totalCommissionUnpaid",
                      state: {
                        aboutProps: stateRed.Commissions.filter(
                          (us) =>
                            (us.commisionTo === e.id) & (us.payded === false)
                        ),
                        name: e.name,
                      },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p className="StadBoxTitle">Total commission unpaid</p>
                      <p className="StadBoxVal">
                        {stateRed.Commissions.filter(
                          (us) =>
                            (us.commisionTo === e.id) & (us.payded === false)
                        ).length * Number(e.ComissionValue)}
                      </p>
                    </div>
                  </NavLink>
                </div>
              );
            })
          ) : (
            UsersByDate.map((e, i) => {
              return (
                <div key={i}>
                  <p
                    // style={{ color: i % 2 ? "#6F52ED" : "#FF7A00" }}
                    style={{ color: "#2b4162" }}
                    className="StadisticProdName"
                  >
                    {e.name}
                  </p>

                  <NavLink
                    className="icons"
                    to={{ pathname: "/salesByMe", state: { aboutProps: e } }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p className="StadBoxTitle">Sales by me</p>
                      <p className="StadBoxVal">{e.Sells.length}</p>
                    </div>
                  </NavLink>

                  <NavLink
                    className="icons"
                    to={{
                      pathname: "/salesByRealtors",
                      state: { aboutProps: e },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p className="StadBoxTitle">Sales by my realtors</p>
                      <p className="StadBoxVal">
                        {e.Referrals.length ? getRSells(e.Referrals) : 0}
                      </p>
                    </div>
                  </NavLink>

                  <NavLink
                    className="icons"
                    to={{ pathname: "/newRealtors", state: { aboutProps: e } }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p className="StadBoxTitle">New Realtors</p>
                      <p className="StadBoxVal">{e.Referrals.length}</p>
                    </div>
                  </NavLink>

                  <NavLink
                    className="icons"
                    to={{
                      pathname: "/myReferrals",
                      state: {
                        aboutProps: stateRed.Referred?.filter(
                          (i) => e.id === i.User?.id
                        ),
                        name: e.name,
                      },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p className="StadBoxTitle">My Referrals</p>
                      <p className="StadBoxVal">
                        {
                          stateRed.Referred?.filter((i) => e.id === i.User?.id)
                            .length
                        }
                      </p>
                    </div>
                  </NavLink>
                  <NavLink
                    className="icons"
                    to={{
                      pathname: "/sells",
                      state: {
                        aboutProps: stateRed.Sells?.filter(
                          (i) => e.id === i.UserId
                        ),
                        name: e.name,
                      },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p className="StadBoxTitle">Total Sold</p>
                      <p className="StadBoxVal">
                        {
                          stateRed.Sells?.filter((i) => e.id === i.UserId)
                            .length
                        }
                      </p>
                    </div>
                  </NavLink>

                  <NavLink
                    className="icons"
                    to={{
                      pathname: "/totalCommissionPaid",
                      state: {
                        aboutProps: stateRed.Commissions.filter(
                          (us) =>
                            (us.commisionTo === e.id) & (us.payded === true)
                        ),
                        name: e.name,
                      },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p className="StadBoxTitle">Total commission paid</p>
                      <p className="StadBoxVal">
                        {stateRed.Commissions.filter(
                          (us) =>
                            (us.commisionTo === e.id) & (us.payded === true)
                        ).length * Number(e.ComissionValue)}
                      </p>
                    </div>
                  </NavLink>

                  <NavLink
                    className="icons"
                    to={{
                      pathname: "/totalCommissionUnpaid",
                      state: {
                        aboutProps: stateRed.Commissions.filter(
                          (us) =>
                            (us.commisionTo === e.id) & (us.payded === false)
                        ),
                        name: e.name,
                      },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p className="StadBoxTitle">Total commission unpaid</p>
                      <p className="StadBoxVal">
                        {stateRed.Commissions.filter(
                          (us) =>
                            (us.commisionTo === e.id) & (us.payded === false)
                        ).length * Number(e.ComissionValue)}
                      </p>
                    </div>
                  </NavLink>
                </div>
              );
            })
          )
        ) : (
          <NavLink
            className="icons"
            to="/UsersManagement"
            style={{ textDecoration: "none" }}
          >
            <p
              className="REPtype"
              style={{ fontSize: "17px", cursor: "pointer" }}
            >
              Add a realtor to start viewing statistics
            </p>
          </NavLink>
        )}
      </div>
      {/* <div style={{flexDirection:"row", display:"flex", justifyContent:"space-between"}}>
              {(google && quotes.length)? <StatsSold google={google} quotes={quotes} producers={Producers}/>:<></>}
          
              {(google && quotes.length)? <StatsQuoted google={google} quotes={quotes} producers={Producers}/>:<></>}
            </div> */}
    </div>
  );
}

export default StadisticComponent;
