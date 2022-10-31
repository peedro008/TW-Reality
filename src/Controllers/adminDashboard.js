import React, { useEffect, useState } from "react";

import useGoogleCharts from "../Charts/useGoogleCharts";
import axios from "axios";

import { useSelector } from "react-redux";
import AdminDashboardComponent from "../Components/adminDashboard";

const AdminDashboard = () => {
  const date = new Date();
  const DATE =
    date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate();
    const [mModify, setMModify]=useState([])
 


  return (
    <AdminDashboardComponent
      
    />
  );
};

export default AdminDashboard;
