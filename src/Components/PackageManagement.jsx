import React, { useState } from "react";
import Select from "react-select";
import { BiSearchAlt2 } from "react-icons/bi";
import ListingTable from "./packages/ListingTable";
import OfferTable from "./packages/OfferTable";
import PackageMarketingTable from "./packages/PackageMarketingTable";
import SellingTable from "./packages/SellingTable";

function PackageManagement({
  Users,
  onCloseModal,
  onSubmit,
  open,
  packages,
  setTypeOfPackage,
  typeOfPackage,
  onOpenModal
}) {

  const [Search, setSearch] = useState("");

  let optionsPackage = [
    {
      value: 1,
      label: "Marketing",
    },
    {
      value: 2,
      label: "Offer",
    },
    {
      value: 3,
      label: "Listing",
    },
    {
      value: 4,
      label: "Selling",
    },
  ];

  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">{`Package management`}</p>
        <div className="inputDiv" >
          <p className="PAYtitle">Type of Package</p>
          <Select
            onChange={(val) => {
              setTypeOfPackage(val.label);
              
            }}
            options={optionsPackage}
            name={"Realtor Name"}
            className="PAYselect"
            placeholder="Select Package"
          />
        </div>
      </div>
      <div
        style={{
          position: 'fixed',
          right: 0,
          top: '80px',
          width: "20vw",
          minWidth: "500px",
          height: "35px",
          marginLeft: "5vw",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <BiSearchAlt2 size={"20px"} style={{ marginLeft: "200px", marginRight: "10px" }} />
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
      <div className="DashContainer">
        <div className="DashSubCont" style={{ maxWidth: "88vw" }}>
          <>
          {
            typeOfPackage === 'Listing' && <ListingTable packages={packages} Users={Users}/>
          }
          {
            typeOfPackage === 'Offer' && <OfferTable packages={packages} Users={Users}/>
          }
           {
            typeOfPackage === 'Selling' && <SellingTable packages={packages} Users={Users}/>
          }
          {
            typeOfPackage === 'Marketing' && <PackageMarketingTable packages={packages} Users={Users} open={open} onOpenModal={onOpenModal} onCloseModal={onCloseModal} onSubmit={onSubmit}/>
          }
          
          </>
        </div>
      </div>
    </div>
  );
}

export default PackageManagement;
