import React from "react";
import { useSelector } from "react-redux";
import RealtorsListManager from "../Components/RealtorsListManager";


function RealtorsListManagerControl() {
  const Referred = useSelector((state) => state.Referred);
  const Users = useSelector((state) => state.Users);
  const UserId = useSelector((state) => state.UserId);
  const Name = useSelector((state) => state.userName);

  return (
    <div>
      <RealtorsListManager Users={Users} Name={Name} Referred={Referred} UserId={UserId} />
    </div>
  );
}

export default RealtorsListManagerControl;
