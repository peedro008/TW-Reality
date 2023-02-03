import React, { useEffect, useState } from "react";
import Isologo_background from "../assets/Isologo_background.png";
import Select from "react-select";
import {
  BsArrowRightShort,
  BsChevronLeft,
  BsReverseBackspaceReverse,
} from "react-icons/bs";
import CrossMark from "../assets/cross-mark.png";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AiOutlineFilter, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
const MyClients = ({
  allMyClientsFilter,
  paginator,
  setPaginator,
  optionsReason,
  optionsStatus,
  setTypeClient,
  setReasonClient,
  setStatusClient,
  filterOn,
  setSearchName,
}) => {
  console.log(allMyClientsFilter);
  const history = useHistory();
  const [isClosed, setIsClosed] = useState("divFilter");
  const [checkedOne, setCheckedOne] = useState(false);
  const handleChangeOne = () => {
    setCheckedOne("Client");
  };
  const handleChangeTwo = () => {
    setCheckedOne("Lead");
  };

  const navegator = (e) => {
    history.push({
      pathname: "/myClientHistory",
      state: {
        client: e,
      },
    });
  };

  function formatUSTelephoneNumber(num) {
    num = num.toString().replace(/\D/g, ""); // Remove non-numeric characters
    if (num.length === 10) {
      return num.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    } else if (num.length === 11) {
      return num.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1 ($2) $3-$4");
    }
    return num;
  }

  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">My Clients</p>
      </div>
      <div className="input-wrapper-mc">
        <input
          type="search"
          placeholder="Search by name..."
          className="inputContact"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <BiSearchAlt2
          size={"20px"}
          className="input-icon-mc"
          onClick={() => filterOn()}
        />
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "-20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            top: "40px",
            display: "flex",
            paddingLeft: "0px",
          }}
        >
          <button
            className={"PAYbutton"}
            style={{ backgroundColor: "#d8ae4d6e" }}
            onClick={() => {
              filterOn("Lead");
            }}
          >
            <p className="PAYbuttonText" style={{ color: "black" }}>
              Lead
            </p>
          </button>
        </div>

        <div
          style={{
            position: "relative",
            top: "40px",
            display: "flex",
            paddingLeft: "20px",
          }}
        >
          <button
            className={"PAYbutton"}
            style={{ backgroundColor: " #2ca58d82" }}
            onClick={() => {
              filterOn("Client");
            }}
          >
            <p className="PAYbuttonText" style={{ color: "black" }}>
              Client
            </p>
          </button>
        </div>
      </div>
      <div>
        <>
          <table
            className="table5"
            style={{
              width: "90vw",
              marginTop: "30px",
              maxWidth: "90vw",
              marginLeft: "0px",
            }}
          >
            <tbody>
              <tr>
                <th scope="col" className="column1">
                  <p className="REPtype2">Lead or Client</p>
                </th>
                <th scope="col" className="column1">
                  <p className="REPtype2">Name</p>
                </th>
                <th scope="col" className="column1">
                  <p className="REPtype2">Phone number</p>
                </th>

                <th scope="col" className="column1">
                  <p className="REPtype2">Email</p>
                </th>

                <th scope="col" className="column1">
                  <p className="REPtype2">Transaction Type</p>
                </th>
              </tr>
              {allMyClientsFilter?.map((e, i) => {
                let ClientHistory = e.ClientHistories?.sort(function (a, b) {
                  return b.id - a.id;
                });

                return (
                  <tr
                    key={i}
                    onClick={() => navegator(e)}
                    style={{ cursor: "pointer" }}
                  >
                    <td
                      className={
                        e.clientType === "Client"
                          ? "ClientNameC"
                          : "ClientNameL"
                      }
                      scope="row"
                    >
                      {e.clientType}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.clientName}
                    </td>
                    <td className="ClientName" scope="row">
                      {formatUSTelephoneNumber(e.phone)}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.mail}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.reason}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      </div>
      <div className={isClosed}>
        <div
          style={{ marginLeft: "220px", marginTop: "10px", cursor: "pointer" }}
          onClick={() => setIsClosed("filterClose1")}
        >
          <BsReverseBackspaceReverse size={"25px"} />
        </div>
        <div style={{ width: "300px", marginTop: "-10px" }}>
          <div style={{ alignSelf: "center" }}>
            <p className="PAYtitle">Status</p>
            <Select
              onChange={(val) => setStatusClient(val.value)}
              options={optionsStatus}
              name={"Realtor Name"}
              className="PAYselect2"
              placeholder="Select Status"
            />
          </div>
        </div>
        <div style={{ width: "300px", marginTop: "20px" }}>
          <p className="PAYtitle">Transaction Type</p>
          <Select
            onChange={(val) => setReasonClient(val.value)}
            options={optionsReason}
            name={"Realtor Name"}
            className="PAYselect2"
            placeholder="Select Transaction Type"
          />
        </div>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <div className="inputDiv">
            <p className="PAYtitle">Client</p>
            <label className="containerCheck2">
              <input
                type="checkbox"
                className="checkBoxCont"
                style={{ color: "red" }}
                checked={checkedOne === "Client"}
                onChange={(val) => {
                  handleChangeOne();
                  setTypeClient("Client");
                }}
              />
              <span class="checkmark2"></span>
            </label>
          </div>
          <div className="inputDiv">
            <p className="PAYtitle">Lead</p>
            <label className="containerCheck">
              <input
                type="checkbox"
                className="checkBoxCont"
                checked={checkedOne === "Lead"}
                onChange={(val) => {
                  handleChangeTwo();
                  setTypeClient("Lead");
                }}
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>

        <button
          onClick={() => {
            filterOn();
            setIsClosed("filterClose1");
          }}
          className="PAYbutton"
          style={{ width: "250px", marginTop: "25px", alignSelf: "center" }}
        >
          <p className="PAYbuttonText">Filter</p>
        </button>
      </div>

      <div
        className={Screen.width < 1000 ? "PaginatorBoxIpad" : "PaginatorBox"}
      >
        <div
          className="PaginatorLeft"
          onClick={() => {
            paginator !== 0 && setPaginator(paginator - 1);
          }}
        >
          <AiOutlineLeft size={"20px"} />
        </div>
        <div className="PaginatorNum">{paginator + 1}</div>
        <div
          className="PaginatorRight"
          onClick={() => {
            if (allMyClientsFilter?.length === 10) {
              setPaginator(paginator + 1);
            }
          }}
        >
          <AiOutlineRight size={"20px"} />
        </div>
      </div>
      <img
        src={Isologo_background}
        style={{
          position: "fixed",
          pointerEvents: "none",
          right: 0,
          bottom: 0,
          width: "428px",
          opacity: "0.5",
        }}
      />

      <NavLink
        style={{
          textDecoration: "none",
          color: "#000",
          position: "absolute",
          right: "100px",
          top: "85px",
        }}
        to={"/addClient"}
      >
        <button className="PAYbutton" style={{ marginLeft: "50px" }}>
          <p className="PAYbuttonText">Add Lead or Client</p>
        </button>
      </NavLink>
      <AiOutlineFilter
        style={{
          cursor: "pointer",
          position: "fixed",
          right: "20px",
          top: "85px",
          zIndex: 100,
          display: "flex",
        }}
        color="#2b4162"
        size={"40px"}
        onClick={() => setIsClosed("filterClose2")}
      />
    </div>
  );
};

export default MyClients;
