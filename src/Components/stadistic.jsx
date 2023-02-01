import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import Pagination from "./Pagination";
import PaginationToUsers from "./PaginationToUsers";

function StadisticComponent({
  onSubmit,
  getRSells,
  form,
  setForm,
  UsersByDate,
  nothing,
  onSubmitPagination,
  paginationSize,
  paginator,
  setPaginator,
  commissionsPaginate,
}) {
  const Screen = window.screen;
  const stateRed = useSelector((state) => state);
  const [Search, setSearch] = useState("");
  const [isPagination, setIsPagination] = useState(true);
  let sumaRef = 0;

  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">Users</p>
      </div>
      <div className="StadCalendarDiv">
        {nothing && <p className="genericTitleNothing">{nothing}</p>}
        <div style={{ display: "flex" }}>
          <div className="StadSelectCont">
            <p
              style={{
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
          <button
            onClick={() => {
              onSubmit();
              setIsPagination(false);
            }}
            className="StadBoxDate"
          >
            <p
              className={
                Screen.width < 1000 ? "StadBoxTitleIpad" : "StadBoxTitle"
              }
            >
              Search
            </p>
          </button>
        </div>

        <div
          className={
            Screen.width < 1000 ? "searchManagementIpad" : "searchManagement"
          }
        >
          <BiSearchAlt2 size={"30px"} style={{ marginRight: "10px" }} />{" "}
          <input
            onChange={(e) => {
              setSearch(e.target.value);
              onSubmit();
              setIsPagination(false);
            }}
            placeholder="User name..."
            style={{
              height: "25px",
              borderColor: "transparent",
              borderRadius: "10px",
              paddingInline: "8px",
              fontSize: "14px",
            }}
          ></input>
        </div>
      </div>
      <div
        className={
          Screen.width < 1000 ? "StadisticRowNameIpad" : "StadisticRowName"
        }
      >
        {UsersByDate?.length ? (
          Search ? (
            UsersByDate?.filter((e) =>
              e.name?.toLowerCase().includes(Search.toLowerCase())
            ).map((e, i) => {
              sumaRef = 0;
              {
                UsersByDate?.filter((f) => f.ReferredId === e.id).length
                  ? e.Referrals.map((f) => (sumaRef = sumaRef + f.Sells.length))
                  : (sumaRef = 0);
              }
              return (
                <div key={i}>
                  <p style={{ color: "black" }} className="StadisticProdName">
                    {e.name}
                  </p>

                  <NavLink
                    className="icons"
                    to={{ pathname: "/newRealtors", state: { aboutProps: e } }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p
                        className={
                          Screen.width < 1000
                            ? "StadBoxTitleIpad"
                            : "StadBoxTitle"
                        }
                      >
                        Realtors
                      </p>
                      <p className="StadBoxVal">
                        {
                          UsersByDate?.filter((f) => f.ReferredId === e.id)
                            .length
                        }
                      </p>
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
                      <p
                        className={
                          Screen.width < 1000
                            ? "StadBoxTitleIpad"
                            : "StadBoxTitle"
                        }
                      >
                        Referrals
                      </p>
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
                    to={{ pathname: "/salesByMe", state: { aboutProps: e } }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p
                        className={
                          Screen.width < 1000
                            ? "StadBoxTitleIpad"
                            : "StadBoxTitle"
                        }
                      >
                        Sales
                      </p>
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
                      <p
                        className={
                          Screen.width < 1000
                            ? "StadBoxTitleIpad"
                            : "StadBoxTitle"
                        }
                      >
                        Sales by Realtors
                      </p>
                      <p className="StadBoxVal">{sumaRef}</p>
                    </div>
                  </NavLink>

                  {/* <NavLink
                  className="icons"
                  to={{ pathname: "/packageMarketingDash", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Package Marketing</p>
                    <p className="StadBoxVal">{e.PackageMarketings.length}</p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{ pathname: "/transactionCoordSold", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Transaction Coord. Sold</p>
                    <p className="StadBoxVal">{e.TransactionCoordinators.filter(e => e.isSold === true).length}</p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{ pathname: "/transactionCoordUnsold", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Transaction Coord. Unsold</p>
                    <p className="StadBoxVal">{e.TransactionCoordinators.filter(e => e.isSold === false).length}</p>
                  </div>
                </NavLink> */}

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
                      <p
                        className={
                          Screen.width < 1000
                            ? "StadBoxTitleIpad"
                            : "StadBoxTitle"
                        }
                      >
                        Total commission paid
                      </p>
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
                      <p
                        className={
                          Screen.width < 1000
                            ? "StadBoxTitleIpad"
                            : "StadBoxTitle"
                        }
                      >
                        Total commission unpaid
                      </p>
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
            UsersByDate?.map((e, i) => {
              sumaRef = 0;
              {
                e.Referrals?.length
                  ? e.Referrals.map((f) => (sumaRef = sumaRef + f.Sells.length))
                  : (sumaRef = 0);
              }
              return (
                <div key={i}>
                  <p
                    // style={{ color: i % 2 ? "#6F52ED" : "#FF7A00" }}

                    className="StadisticProdName"
                  >
                    {e.name}
                  </p>

                  <NavLink
                    className="icons"
                    to={{ pathname: "/newRealtors", state: { aboutProps: e } }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p
                        className={
                          Screen.width < 1000
                            ? "StadBoxTitleIpad"
                            : "StadBoxTitle"
                        }
                      >
                        Realtors
                      </p>
                      <p className="StadBoxVal">
                        {
                          UsersByDate?.filter((f) => f.ReferredId === e.id)
                            .length
                        }
                      </p>
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
                      <p
                        className={
                          Screen.width < 1000
                            ? "StadBoxTitleIpad"
                            : "StadBoxTitle"
                        }
                      >
                        Referrals
                      </p>
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
                    to={{ pathname: "/salesByMe", state: { aboutProps: e } }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="StadBox">
                      <p
                        className={
                          Screen.width < 1000
                            ? "StadBoxTitleIpad"
                            : "StadBoxTitle"
                        }
                      >
                        Sales
                      </p>
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
                      <p
                        className={
                          Screen.width < 1000
                            ? "StadBoxTitleIpad"
                            : "StadBoxTitle"
                        }
                      >
                        Sales by Realtors
                      </p>
                      <p className="StadBoxVal">{sumaRef}</p>
                    </div>
                  </NavLink>

                  {/* <NavLink
                  className="icons"
                  to={{ pathname: "/packageMarketingDash", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Package Marketing</p>
                    <p className="StadBoxVal">{e.PackageMarketings.length}</p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{ pathname: "/transactionCoordSold", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Transaction Coord. Sold</p>
                    <p className="StadBoxVal">{e.TransactionCoordinators.filter(e => e.isSold === true).length}</p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{ pathname: "/transactionCoordUnsold", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Transaction Coord. Unsold</p>
                    <p className="StadBoxVal">{e.TransactionCoordinators.filter(e => e.isSold === false).length}</p>
                  </div>
                </NavLink> */}

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
                    <div
                      className={
                        Screen.width < 1000 ? "StadBoxIpad" : "StadBox"
                      }
                    >
                      <p
                        className={
                          Screen.width < 1000
                            ? "StadBoxTitleIpad"
                            : "StadBoxTitle"
                        }
                      >
                        Total commission paid
                      </p>
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
                    <div
                      className={
                        Screen.width < 1000 ? "StadBoxIpad" : "StadBox"
                      }
                    >
                      <p
                        className={
                          Screen.width < 1000
                            ? "StadBoxTitleIpad"
                            : "StadBoxTitle"
                        }
                      >
                        Total commission unpaid
                      </p>
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
        ) : commissionsPaginate?.length ? (
          commissionsPaginate?.map((e, i) => {
            sumaRef = 0;
            {
              e.Referrals?.length
                ? e.Referrals.map((f) => (sumaRef = sumaRef + f.Sells.length))
                : (sumaRef = 0);
            }
            return (
              <div key={i}>
                <p
                  // style={{ color: i % 2 ? "#6F52ED" : "#FF7A00" }}

                  className="StadisticProdName"
                >
                  {e.name}
                </p>

                <NavLink
                  className="icons"
                  to={{ pathname: "/newRealtors", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p
                      className={
                        Screen.width < 1000
                          ? "StadBoxTitleIpad"
                          : "StadBoxTitle"
                      }
                    >
                      Realtors
                    </p>
                    <p className="StadBoxVal">
                      {
                        commissionsPaginate?.filter(
                          (f) => f.ReferredId === e.id
                        ).length
                      }
                    </p>
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
                    <p
                      className={
                        Screen.width < 1000
                          ? "StadBoxTitleIpad"
                          : "StadBoxTitle"
                      }
                    >
                      Referrals
                    </p>
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
                  to={{ pathname: "/salesByMe", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p
                      className={
                        Screen.width < 1000
                          ? "StadBoxTitleIpad"
                          : "StadBoxTitle"
                      }
                    >
                      Sales
                    </p>
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
                    <p
                      className={
                        Screen.width < 1000
                          ? "StadBoxTitleIpad"
                          : "StadBoxTitle"
                      }
                    >
                      Sales by Realtors
                    </p>
                    <p className="StadBoxVal">{sumaRef}</p>
                  </div>
                </NavLink>

                {/* <NavLink
                  className="icons"
                  to={{ pathname: "/packageMarketingDash", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Package Marketing</p>
                    <p className="StadBoxVal">{e.PackageMarketings?.length}</p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{ pathname: "/transactionCoordSold", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Transaction Coord. Sold</p>
                    <p className="StadBoxVal">{e.TransactionCoordinators?.filter(e => e.isSold === true).length}</p>
                  </div>
                </NavLink>

                <NavLink
                  className="icons"
                  to={{ pathname: "/transactionCoordUnsold", state: { aboutProps: e } }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="StadBox">
                    <p className="StadBoxTitle">Transaction Coord. Unsold</p>
                    <p className="StadBoxVal">{e.TransactionCoordinators?.filter(e => e.isSold === false).length}</p>
                  </div>
                </NavLink> */}

                <NavLink
                  className="icons"
                  to={{
                    pathname: "/totalCommissionPaid",
                    state: {
                      aboutProps: stateRed.Commissions.filter(
                        (us) => (us.commisionTo === e.id) & (us.payded === true)
                      ),
                      name: e.name,
                    },
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className={Screen.width < 1000 ? "StadBoxIpad" : "StadBox"}
                  >
                    <p
                      className={
                        Screen.width < 1000
                          ? "StadBoxTitleIpad"
                          : "StadBoxTitle"
                      }
                    >
                      Total commission paid
                    </p>
                    <p className="StadBoxVal">
                      {stateRed.Commissions.filter(
                        (us) => (us.commisionTo === e.id) & (us.payded === true)
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
                  <div
                    className={Screen.width < 1000 ? "StadBoxIpad" : "StadBox"}
                  >
                    <p
                      className={
                        Screen.width < 1000
                          ? "StadBoxTitleIpad"
                          : "StadBoxTitle"
                      }
                    >
                      Total commission unpaid
                    </p>
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
      {isPagination && (
        <PaginationToUsers
          paginator={paginator}
          setPaginator={setPaginator}
          paginationSize={paginationSize}
          commissionsPaginate={commissionsPaginate}
        />
      )}
    </div>
  );
}

export default StadisticComponent;
