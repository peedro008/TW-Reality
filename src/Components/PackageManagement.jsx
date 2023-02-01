import React, { useState } from "react";
import Select from "react-select";

import Isologo_background from "../assets/Isologo_background.png";
import NewChart from "../Charts/newChart";
import NewChartMarketing from "../Charts/newChartMarketing";
import PackageMarketingTable from "./packages/PackageMarketingTable";

import TransactionCoordinatorTable from "./packages/TransactionCoordinatorTable";

function PackageManagement({
  Users,
  onCloseModal,
  onSubmitPackage,
  open,
  packages,
  setTypeOfPackage,
  typeOfPackage,
  onOpenModal,
  soldTransaction,
  userId,
  typeOfP,
}) {
  // const [Search, setSearch] = useState("");

  let optionsPackage = [
    {
      value: 1,
      label: "Marketing",
    },
    {
      value: 2,
      label: "Transaction Coordinator",
    },
  ];

  return (
    <div className="genericDiv1">
      <div className="genericHeader" style={{ paddingTop: "0px" }}>
        <p className="genericTitle">Packages</p>
      </div>
      <div
        className="inputDiv"
        style={{ marginTop: "-20px", marginBottom: "10px", marginLeft: "40px" }}
      >
        <p className="PAYtitle">Type of Package</p>
        <Select
          onChange={(val) => {
            setTypeOfPackage(val.label);
          }}
          defaultValue={typeOfP}
          options={optionsPackage}
          name={"Realtor Name"}
          className="PAYselect"
          placeholder="Select Package"
        />
      </div>
      <div
        style={{
          position: "fixed",
          right: 0,
          top: "80px",
          width: "20vw",
          minWidth: "500px",
          height: "35px",
          marginLeft: "5vw",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      ></div>
      <div className="DashContainerSells">
        <div className="DashSubCont" style={{ maxWidth: "88vw" }}>
          <>
            {typeOfPackage === "Marketing" && (
              <PackageMarketingTable
                packages={packages}
                userId={userId}
                Users={Users}
                open={open}
                onOpenModal={onOpenModal}
                onCloseModal={onCloseModal}
                onSubmitPackage={onSubmitPackage}
              />
            )}
            {typeOfPackage === "Transaction Coordinator" && (
              <TransactionCoordinatorTable
                packages={packages}
                userId={userId}
                open={open}
                Users={Users}
                onOpenModal={onOpenModal}
                onCloseModal={onCloseModal}
                soldTransaction={soldTransaction}
              />
            )}
          </>
        </div>
      </div>
      {!typeOfPackage && (
        <>
          <NewChart />
          <NewChartMarketing />
        </>
      )}

      <img
        src={Isologo_background}
        disabled
        style={{
          position: "fixed",
          pointerEvents: "none",
          right: 0,
          bottom: 0,
          zIndex: 0,
          width: "428px",
          opacity: "0.5",
        }}
      />
    </div>
  );
}

export default PackageManagement;
