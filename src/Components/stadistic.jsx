import React from "react";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import StatsQuoted from "../Charts/stadisticChartQuoted";
import StatsSold from "../Charts/stadisticsChartSold";
function StadisticComponent({

  yearLabel,
  yearOptions,
  monthOptions,
  setDateSelected,
  setYearLabel,
  dateSelected,
  getRSells,
  search,
  getComission,
Users,
  google
}) {
  return (
    <div className="genericDiv">
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
                setYearLabel(e.label + yearLabel.substring(3, yearLabel.length)
                );
                setDateSelected(e.value + dateSelected.substring(2, dateSelected.length)
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
        {
        
        Users.length?
        Users.map((e, i) => {
          return (
            <div>
              <p
                style={{ color: i % 2 ? "#6F52ED" : "#FF7A00" }}
                className="StadisticProdName"
              >
                {e.name}
              </p>
            
                <div className="StadBox">
                  <p className="StadBoxTitle">Sales by me</p>
                  <p className="StadBoxVal">
                    {e.Sells.length}
                  </p>
                </div>
             
                <div className="StadBox">
                  <p className="StadBoxTitle">Sales by my realtors</p>
                  <p className="StadBoxVal">
                      {
                        e.Referrals.length?
                        getRSells(e.Referrals):0
                      }
                  </p>
                </div>
             
                <div className="StadBox">
                  <p className="StadBoxTitle">New Realtors</p>
                  <p className="StadBoxVal">
                    {e.Referrals.length}
                  </p>
                </div>
             
                <div className="StadBox">
                  <p className="StadBoxTitle">Total commission</p>
                  <p className="StadBoxVal">
                  {
                       ( (e.Referrals.length?
                        getRSells(e.Referrals):0))*Number(e.ComissionValue)
                      }
                  </p>
                </div>
           
               
            </div>
          );
        }):
        <NavLink
        className="icons"
        to="/UsersManagement"
       style={{textDecoration:"none"}}
      >
        <p className="REPtype" style={{fontSize:"17px", cursor:"pointer"}}>Add a realtor to start viewing statistics</p></NavLink>
      
      }
      </div>
      {/* <div style={{flexDirection:"row", display:"flex", justifyContent:"space-between"}}>
              {(google && quotes.length)? <StatsSold google={google} quotes={quotes} producers={Producers}/>:<></>}
          
              {(google && quotes.length)? <StatsQuoted google={google} quotes={quotes} producers={Producers}/>:<></>}
            </div> */}
    </div>
  );
}

export default StadisticComponent;
