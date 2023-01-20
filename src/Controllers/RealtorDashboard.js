import React, { useEffect, useState } from "react";
import useGoogleCharts from "../Charts/useGoogleCharts";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import RealtorDashboardComponent from "../Components/RealtorDashboard";

const RealtorDashboard = () => {
  const [sellsMonth, setSellsMonth] = useState(null);
  const [sellsYear, setSellsYear] = useState(null);
  const Referred = useSelector((state) => state.Referred);
  const [comm, setComm] = useState([]);
  const CommissionValue = useSelector((state) => state.CommissionValue);
  const realtors = useSelector((e) => e.Realtors);
  const UserId = useSelector((s) => s.UserId);
  const thisUser = useSelector((s) => s);
  const sells = useSelector((e) => e.Sells);
  const date = new Date();
  const DATE =
    date.getFullYear() +
    (date.getMonth() + 1 > 9 ? "-" : "-0") +
    (date.getMonth() + 1) +
    "-" +
    date.getDate();
  let ownRealtors = realtors.filter((e) => e.ReferredId === UserId);
  useEffect(() => {
    let temp1 = 0;
    let temp2 = 0;

    axios
      .get(`https://truewayrealtorsapi.com/getIdCommission?id=${UserId}`)
      .then(function (response) {
        setComm([
          response.data.filter(
            (e) => e.Sell.ClosingDate.substring(0, 4) == DATE.substring(0, 4)
          ).length * Number(CommissionValue),
          response.data.filter(
            (e) => e.Sell.ClosingDate.substring(5, 7) == DATE.substring(5, 7)
          ).length * CommissionValue,
        ]);
      })
      .catch((error) => {
        console.log(error);
      });

    ownRealtors?.map((e) => {
      e.Sells?.map((f) => {
        if (f.ClosingDate.substring(5, 7) == DATE.substring(5, 7)) {
          temp1 = temp1 + 1;
        }
      });
    });

    ownRealtors?.map((e) => {
      e.Sells?.map((f) => {
        if (f.ClosingDate.substring(0, 4) == DATE.substring(0, 4)) {
          temp2 = temp2 + 1;
        }
      });
    });

    setSellsMonth(temp1);
    setSellsYear(temp2);
  }, []);

  const google = useGoogleCharts();

  return (
    <RealtorDashboardComponent
      realtors={ownRealtors}
      google={google}
      sells={sells}
      DATE={DATE}
      UserId={UserId}
      comm={comm}
      Referred={Referred}
      thisUser={thisUser}
    />
  );
};

export default RealtorDashboard;
