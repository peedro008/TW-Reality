import React, { useEffect, useState } from "react";
import Isologo_background from "../assets/Isologo_background.png";
import Select from "react-select";
import { BsArrowRightShort, BsChevronLeft, BsReverseBackspaceReverse } from "react-icons/bs";
import CrossMark from "../assets/cross-mark.png";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AiOutlineFilter, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
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
}) => {
  console.log(allMyClientsFilter)
  const history = useHistory();
const [isClosed, setIsClosed] = useState('divFilter')
  const [checkedOne, setCheckedOne] = useState(false);
  const handleChangeOne = () => {
    setCheckedOne("Client");
  };
  const handleChangeTwo = () => {
    setCheckedOne("Lead");
  };

  const [isContact2, setIsContact2] = useState(false);
  const [isContact3, setIsContact3] = useState(false);
  const [isContact4, setIsContact4] = useState(false);
  const [isContact5, setIsContact5] = useState(false);
  const [isContact6, setIsContact6] = useState(false);
  const [isContact7, setIsContact7] = useState(false);
  const [isContact8, setIsContact8] = useState(false);
  const [isContact9, setIsContact9] = useState(false);
  const [isContact10, setIsContact10] = useState(false);

  useEffect(() => {
    if (allMyClientsFilter?.find((e) => typeof e.contactDate2 === "string")) {
      setIsContact2(true);
    } else {
      {
        setIsContact2(false);
      }
    }
    if (allMyClientsFilter?.find((e) => typeof e.contactDate3 === "string")) {
      setIsContact3(true);
    } else {
      {
        setIsContact3(false);
      }
    }
    if (allMyClientsFilter?.find((e) => typeof e.contactDate4 === "string")) {
      setIsContact4(true);
    } else {
      {
        setIsContact4(false);
      }
    }
    if (allMyClientsFilter?.find((e) => typeof e.contactDate5 === "string")) {
      setIsContact5(true);
    } else {
      {
        setIsContact5(false);
      }
    }
    if (allMyClientsFilter?.find((e) => typeof e.contactDate6 === "string")) {
      setIsContact6(true);
    } else {
      {
        setIsContact6(false);
      }
    }
    if (allMyClientsFilter?.find((e) => typeof e.contactDate7 === "string")) {
      setIsContact7(true);
    } else {
      {
        setIsContact7(false);
      }
    }
    if (allMyClientsFilter?.find((e) => typeof e.contactDate8 === "string")) {
      setIsContact8(true);
    } else {
      {
        setIsContact8(false);
      }
    }
    if (allMyClientsFilter?.find((e) => typeof e.contactDate9 === "string")) {
      setIsContact9(true);
    } else {
      {
        setIsContact9(false);
      }
    }
    if (allMyClientsFilter?.find((e) => typeof e.contactDate10 === "string")) {
      setIsContact10(true);
    } else {
      {
        setIsContact10(false);
      }
    }
  }, [allMyClientsFilter]);

  const navegator = (e) => {
    history.push({
      pathname: "/myClientHistory",
      state: {
        client: e,
      },
    });
  };
  return (
    <div className="genericDiv">
      <div className="genericHeader">
        <p className="genericTitle">My Clients</p>
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
                  <p className="REPtype2">Fecha</p>
                </th>
                <th scope="col" className="column1">
                  <p className="REPtype2">Client name</p>
                </th>
                <th scope="col" className="column1">
                  <p className="REPtype2">Phone</p>
                </th>

                <th scope="col" className="column1">
                  <p className="REPtype2">Email</p>
                </th>
                <th scope="col" className="column1">
                  <p className="REPtype2">Modify Date</p>
                </th>
                <th scope="col" className="column1">
                  <p className="REPtype2">Contact Date</p>
                </th>
                {isContact2 && (
                  <th scope="col" className="column1">
                    <p className="REPtype2">Contact Date 2</p>
                  </th>
                )}
                {isContact3 && (
                  <th scope="col" className="column1">
                    <p className="REPtype2">Contact Date 3</p>
                  </th>
                )}
                {isContact4 && (
                  <th scope="col" className="column1">
                    <p className="REPtype2">Contact Date 4</p>
                  </th>
                )}
                {isContact5 && (
                  <th scope="col" className="column1">
                    <p className="REPtype2">Contact Date 5</p>
                  </th>
                )}
                {isContact6 && (
                  <th scope="col" className="column1">
                    <p className="REPtype2">Contact Date 6</p>
                  </th>
                )}
                {isContact7 && (
                  <th scope="col" className="column1">
                    <p className="REPtype2">Contact Date 7</p>
                  </th>
                )}
                {isContact8 && (
                  <th scope="col" className="column1">
                    <p className="REPtype2">Contact Date 8</p>
                  </th>
                )}
                {isContact9 && (
                  <th scope="col" className="column1">
                    <p className="REPtype2">Contact Date 9</p>
                  </th>
                )}
                {isContact10 && (
                  <th scope="col" className="column1">
                    <p className="REPtype2">Contact Date 10</p>
                  </th>
                )}
                <th scope="col" className="column1">
                  <p className="REPtype2">Transaction Type</p>
                </th>
                <th scope="col" className="column1">
                  <p className="REPtype2">Client Type</p>
                </th>
                <th scope="col" className="column1">
                  <p className="REPtype2">Status</p>
                </th>
                <th scope="col" className="column1">
                  <p className="REPtype2">Notes</p>
                </th>
              </tr>
              {allMyClientsFilter?.map((e, i) => {
                let ClientHistory = e.ClientHistories.sort(function (a, b) {
                  return b.id - a.id
                })

                return (
                  <tr
                    key={i}
                    onClick={() => navegator(e)}
                    style={{ cursor: "pointer" }}
                  >
                    <td className="ClientName" style={{minWidth:'100px'}} scope="row">
                      {e.addedDate}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.clientName}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.phone}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.mail}
                    </td>
                    <td className="ClientName" style={{minWidth:'100px'}} scope="row">
                      {ClientHistory[0].modifyDate?.slice(0,10)}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.contactDate}
                    </td>
                    {isContact2 && (
                      <td className="ClientName" scope="row">
                        {e.contactDate2}
                      </td>
                    )}
                    {isContact3 && (
                      <td className="ClientName" scope="row">
                        {e.contactDate3}
                      </td>
                    )}
                    {isContact4 && (
                      <td className="ClientName" scope="row">
                        {e.contactDate4}
                      </td>
                    )}
                    {isContact5 && (
                      <td className="ClientName" scope="row">
                        {e.contactDate5}
                      </td>
                    )}
                    {isContact6 && (
                      <td className="ClientName" scope="row">
                        {e.contactDate6}
                      </td>
                    )}
                    {isContact7 && (
                      <td className="ClientName" scope="row">
                        {e.contactDate7}
                      </td>
                    )}
                    {isContact8 && (
                      <td className="ClientName" scope="row">
                        {e.contactDate8}
                      </td>
                    )}
                    {isContact9 && (
                      <td className="ClientName" scope="row">
                        {e.contactDate9}
                      </td>
                    )}
                    {isContact10 && (
                      <td className="ClientName" scope="row">
                        {e.contactDate10}
                      </td>
                    )}
                    <td className="ClientName" scope="row">
                      {e.reason}
                    </td>
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
                      {e.status}
                    </td>
                    <td className="ClientName" scope="row">
                      {e.Notes}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      </div>
      <div className={isClosed}>
        <div style={{marginLeft: '220px', marginTop: '10px', cursor: 'pointer'}}  onClick={() => setIsClosed('filterClose1')}>

   <BsReverseBackspaceReverse size={'25px'} />
        </div>
      <div style={{width: '300px' ,marginTop: '-10px'}}>
      <div style={{alignSelf: 'center'}}>
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
      <div style={{width: '300px' ,marginTop: '20px'}}>
        <p className="PAYtitle">Transaction Type</p>
        <Select
          onChange={(val) => setReasonClient(val.value)}
          options={optionsReason}
          name={"Realtor Name"}
          className="PAYselect2"
          placeholder="Select Transaction Type"
        />
      </div>
      <div style={{display: 'flex' ,marginTop: '20px'}}>
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
            onClick={() => {filterOn(); setIsClosed('filterClose1')}}
              className="PAYbutton"
              style={{width: '250px', marginTop: '25px', alignSelf: 'center'}}
            ><p className="PAYbuttonText">Filter</p></button>
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
            if (allMyClientsFilter?.length === 5) {
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
      <BsChevronLeft
        cursor="pointer"
        color="grey"
        style={{
          minWidth: "30px",
          minHeight: "30px",
          position: "fixed",
          zIndex: 9,
          left: "80px",
          top: "17px",
          alignSelf: "flex-start",
        }}
        onClick={() => window.history.go(-1)}
      />
       <AiOutlineFilter
       style={{
        cursor:'pointer',
        position: "fixed",
        right: "20px",
        top: "85px",
        zIndex:100,
        display: "flex",
      }}
          color="#2b4162"
          size={"40px"}
          onClick={() => setIsClosed('filterClose2')}
        />
    </div>
  );
};

export default MyClients;
