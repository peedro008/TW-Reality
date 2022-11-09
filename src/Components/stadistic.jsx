import React from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Select from "react-select";

function StadisticComponent({
  yearLabel,
  yearOptions,
  monthOptions,
  setDateSelected,
  setYearLabel,
  dateSelected,
  getRSells,
  search,
  Users,
}) {
  const stateRed = useSelector((state) => state);
  console.log(stateRed.Users)
  return (
    <div className="genericDiv1">
      <div className="StadCalendarDiv">
        <p className="StadCalendarTitle">{yearLabel}</p>

        <div className="StadSelectCont">
          <Select
            options={yearOptions.map((e) => {
              return { value: e, label: e };
            })}
            onChange={(e) => {
              setYearLabel(yearLabel.substring(0, 4) + e.value);
              setDateSelected(dateSelected.substring(0, 6) + e.value);
            }}
            className="StadSelect"
            // defaultInputValue={yearOptions[0]}
            placeholder="Year"
          />

          <Select
            options={monthOptions}
            className="StadSelect"
            placeholder="Month"
            onChange={(e) => {
              setYearLabel(e.label + yearLabel.substring(3, yearLabel.length));
              setDateSelected(
                e.value + dateSelected.substring(2, dateSelected.length)
              );
            }}
          />
        </div>
        <button
          onClick={search}
          style={{
            height: "30px",
            width: "40%",
            alignSelf: "center",
            marginBlock: "7px",
            marginTop: "15px",
            fontFamily: "Gilroy-Regular",
            color: "white",
            boxShadow: "4px 4px 4px rgb(199, 199, 199)",
            backgroundColor: "#2b4162",
            borderWidth: 0,
            borderRadius: "8px",
          }}
        >
          Search
        </button>
      </div>
      <div className="StadisticRowName">
        {Users.length ? (
          Users.map((e, i) => {
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
                      name: e.name},
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
                    pathname: "/totalCommissionPaid",
                    state: { aboutProps: stateRed.Commissions.filter(
                      (us) =>
                        (us.commisionTo === e.id) & (us.payded === true)
                    ), name: e.name },
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
                    state: { aboutProps: stateRed.Commissions.filter(
                      (us) =>
                        (us.commisionTo === e.id) & (us.payded === false)
                    ), name: e.name },
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
