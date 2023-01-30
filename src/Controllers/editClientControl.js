import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import EditClient from "../Components/editClient";
import { getClients } from "../Redux/actions";

function EditClientControl({ clientData, setReloadInfo, setNewHistory }) {
  const userId = useSelector((state) => state.UserId);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [form, setForm] = useState({});
  const [respTransactionCoord, setRespTransactionCoord] = useState([]);
  // let clientData = props?.location.state.client;
  console.log(form);

  useEffect(() => {
    setForm({
      ...form,
      ...clientData,
    });
  }, []);

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
    {
      value: "Active / Listed",
      label: "Active / Listed",
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

  const dispatchClient = () => {
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

  const onSubmit = () => {
    fetch(`https://truewayrealtorsapi.com/editClient`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(async (res) => {
      try {
        if (res.status !== 200) {
          onOpenModal();
          setRespTransactionCoord([false, "Error editing Client"]);
        } else {
          onOpenModal();
          dispatchClient();
          setRespTransactionCoord([true, "Client edited successfully"]);
        }
      } catch (err) {
        onOpenModal();
        console.log(err);
        setRespTransactionCoord([false, "Error editing Client"]);
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
    <EditClient
      form={form}
      setForm={setForm}
      open={open}
      onSubmit={onSubmit}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
      optionsReason={optionsReason}
      optionsStatus={optionsStatus}
      respTransactionCoord={respTransactionCoord}
      validarEmail={validarEmail}
      userId={userId}
      clientData={clientData}
      setReloadInfo={setReloadInfo}
      setNewHistory={setNewHistory}
      optionsStatusListing={optionsStatusListing}
      optionsStatusSelling={optionsStatusSelling}
      optionsStatusRent={optionsStatusRent}
    />
  );
}

export default EditClientControl;
