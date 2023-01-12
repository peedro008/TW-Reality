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

  useEffect(() => {
    setForm({ ...form, UserId: userId, clientType: "Client" });
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

  let optionsStatus = [
    {
      value: "Showing",
      label: "Showing",
    },
    {
      value: "Pre-Qualifying",
      label: "Pre-Qualifying",
    },
    {
      value: "Under Contract",
      label: "Under Contract",
    },
    {
      value: "Closed",
      label: "Closed",
    },
    {
      value: "Archive",
      label: "Archive",
    },
    {
      value: "Listed",
      label: "Listed",
    },
  ];

  let optionsStatusLead = [
    {
      value: "Entry Level",
      label: "Entry Level",
    },
    {
      value: "Hot Lead",
      label: "Hot Lead",
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
      optionsStatus={optionsStatus}
      optionsStatusLead={optionsStatusLead}
      respTransactionCoord={respTransactionCoord}
      validarEmail={validarEmail}
      userId={userId}
    />
  );
}

export default AddClientControl;
