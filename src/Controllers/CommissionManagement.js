import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommissionManagementComponent from "../Components/CommissionManagement";
import { getCommission } from "../Redux/actions";
function CommissionManagement() {
  const Commissions = useSelector((e) => e.Commissions);
  const Users = useSelector((e) => e.Users);
  const [modalPay, setModalPay] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`https://truewayrealtorsapi.com/getCommission`)
      .then(function (response) {
        response.status == 404
          ? dispatch(getCommission([]))
          : dispatch(getCommission(response.data));
      })
      .catch((error) => {
        dispatch(getCommission([]));
      });
  }, []);
  const onSubmit = () => {
    fetch(`https://truewayrealtorsapi.com/paycommission`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: selectedId }),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();

          if (res.status !== 200) {
            console.log("error");
          } else {
            console.log(jsonRes);
          }
        } catch (err) {
          console.log(err);
        }
      })
      .then(() => window.location.reload())
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CommissionManagementComponent
      Commissions={Commissions}
      setSelectedId={setSelectedId}
      selectedId={selectedId}
      onSubmit={onSubmit}
      open={open}
      Users={Users}
      onOpenModal={onOpenModal}
      onCloseModal={onCloseModal}
      modalPay={modalPay}
      setModalPay={setModalPay}
    />
  );
}

export default CommissionManagement;
