import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sells from "../Components/Sells";
import { getCommission, getSells } from "../Redux/actions";
function SellsControl(props) {
  const allSells = useSelector((e) => e.Sells);
  const Users = useSelector((e) => e.Users);
  const [modalPay, setModalPay] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const dispatch = useDispatch();
  const nameFrom = props.location.state?.name;
  
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getSells`)
      .then(function (response) {
        response.status == 404
          ? dispatch(getSells([]))
          : dispatch(getSells(response.data));
      })
      .catch((error) => {
        dispatch(getSells([]));
      });
  }, []);

  return (
    <Sells
      setSelectedId={setSelectedId}
      selectedId={selectedId}
      open={open}
      allSells={allSells}
      Users={Users}
      onOpenModal={onOpenModal}
      onCloseModal={onCloseModal}
      modalPay={modalPay}
      setModalPay={setModalPay}
      nameFrom={nameFrom}
    />
  );
}

export default SellsControl;
