import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddAdmin from "../Components/addAdmin";
import AddRealtorComponent from "../Components/addRealtor";

function AddAdminControl() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [form, setForm] = useState({});
  const [error, setError] = useState()

  console.log(form)

  const onSubmit = () => {
    fetch(`http://localhost:8080/addAdmin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();

          if (res.status === 200) {
            onOpenModal();
          } else if (res.status === 409){
            setError('Email Already Exists')
            onOpenModal();
          } else {
            console.log(jsonRes);
            setError('Something was wrong')
            onOpenModal();
          }
        } catch (err) {
          setError('Email Already Exists')
          console.log(err);
        }
      })
      .catch((err) => {
        setError('Email Already Exists')
        console.log(err);
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
    <AddAdmin
      form={form}
      setForm={setForm}
      open={open}
      onSubmit={onSubmit}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
      validarEmail={validarEmail}
      error={error}
    />
  );
}

export default AddAdminControl;
