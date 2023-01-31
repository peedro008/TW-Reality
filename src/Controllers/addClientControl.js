import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../Redux/actions";
import AddClient from "../Components/addClient";

function AddClientControl() {
  const userId = useSelector((state) => state.UserId);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [form, setForm] = useState({});
  const [respTransactionCoord, setRespTransactionCoord] = useState([]);

  let New_York_Date = new Date().toLocaleDateString("en-US", {
    timeZone: "America/New_York",
    timestyle: "full",
    hourCycle: "h24",
  });

  useEffect(() => {
    setForm({ ...form, UserId: userId, addedDate: New_York_Date });
  }, []);
  const GetMyClientsAll = () => {
    axios
      .get(`https://truewayrealtorsapi.com/getAllMyClients?UserId=${userId}`)
      .then(function (response) {
        response.status == 200 || response.status == 204
          ? dispatch(getClients(response.data))
          : dispatch(getClients([]));
      })
      .catch((error) => {
        dispatch(getClients([]));
      });
  };

  let optionsReason = [
    {
      value: "Buyer",
      label: "Buyer",
    },
    {
      value: "Seller",
      label: "Seller",
    },
    {
      value: "Renter",
      label: "Renter",
    },
  ];

  let optionsLeadType = [
    {
      value: "Jose",
      label: "Jose",
    },
  ];

  let optionsStatusListing = [
    {
      value: "Active / Listed",
      label: "Active / Listed",
    },
    {
      value: "Under contract",
      label: "Under contract",
    },
    {
      value: "Closed",
      label: "Closed",
    },
  ];

  let optionsStatusSelling = [
    {
      value: "Pre-qualifying",
      label: "Pre-qualifying",
    },
    {
      value: "Showing",
      label: "Showing",
    },
    {
      value: "Under contract",
      label: "Under contract",
    },
    {
      value: "Closed",
      label: "Closed",
    },
  ];
  let optionsStatusRent = [
    {
      value: "Under contract",
      label: "Under contract",
    },
    {
      value: "Closed",
      label: "Closed",
    },
  ];

  const onSubmit = () => {
    fetch(`https://truewayrealtorsapi.com/addClient`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(async (res) => {
      try {
        if (res.status === 409) {
          onOpenModal();
          console.log(res);
          setRespTransactionCoord([
            false,
            "Error adding Client, Email already Exists",
          ]);
        } else if (res.status === 200) {
          onOpenModal();
          GetMyClientsAll();
          setRespTransactionCoord([true, "Client added successfully"]);
        } else {
          onOpenModal();
          console.log(res);
          setRespTransactionCoord([false, "Error adding Client"]);
        }
      } catch (err) {
        onOpenModal();
        console.log(err);
        setRespTransactionCoord([false, "Error adding Client 2"]);
      }
    });
  };

  function validarEmail(valor) {
    if (
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        valor
      )
    ) {
      return true;
    } else return false;
  }

  return (
    <AddClient
      form={form}
      setForm={setForm}
      open={open}
      onSubmit={onSubmit}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
      optionsReason={optionsReason}
      optionsStatusListing={optionsStatusListing}
      optionsStatusSelling={optionsStatusSelling}
      optionsStatusRent={optionsStatusRent}
      respTransactionCoord={respTransactionCoord}
      validarEmail={validarEmail}
      userId={userId}
      optionsLeadType={optionsLeadType}
    />
  );
}

export default AddClientControl;
