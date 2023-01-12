import React from "react";
import { useState } from "react";
import {  useSelector } from "react-redux";
import useGoogleCharts from "../Charts/useGoogleCharts";
import ManagerGrafics from "../Components/ManagerGrafics";


function ManagerGraficsControl() {
  const google = useGoogleCharts();
  const Referred = useSelector((e) => e.Referred);
  const Users = useSelector((e) => e.UsersManager);
  const Name = useSelector((state) => state.userName);
  const UserId = useSelector((state) => state.UserId);
  const [selected, setSelected] = useState(false);
  

  return (
    <ManagerGrafics
      Users={Users}
      Name={Name}
      UserId={UserId}
      Referred={Referred}
      google={google}
      selected={selected}
      setSelected={setSelected}
    />
  );
}

export default ManagerGraficsControl;
