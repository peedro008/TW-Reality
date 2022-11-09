import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RealtorsListManager from "../Components/RealtorsListManager";
import { getUsers } from "../Redux/actions";

function RealtorsListManagerControl() {
  const Referred = useSelector((state) => state.Referred);
  const Users = useSelector((state) => state.Users);
  const UserId = useSelector((state) => state.UserId);
  const Name = useSelector((state) => state.userName);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`https://truewayrealtorsapi.com/getRealtors`)
      .then(function (response) {
        dispatch(getUsers(response.data));
      })
      .catch((error) => {
        dispatch(getUsers([]));
      });
  }, []);

  return (
    <div>
      <RealtorsListManager Users={Users} Name={Name} Referred={Referred} UserId={UserId} />
    </div>
  );
}

export default RealtorsListManagerControl;
