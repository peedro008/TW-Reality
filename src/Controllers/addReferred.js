import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddReferredComponent from "../Components/addReferred";
import { referredGet } from "../Logic/Fetch";

function AddReferred() {
  const userId = useSelector((state) => state.UserId);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    setForm({ ...form, UserRole: "Realtor", UserId: userId });
  }, []);

  const onSubmit = () => {
    fetch(`https://truewayrealtorsapi.com/AddReferred`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();

          if (res.status !== 200 && res.status !== 204) {
            console.log("error");
          } else {
            referredGet(dispatch);
            console.log(jsonRes);
          }
        } catch (err) {
          console.log(err);
        }
        onOpenModal();
      })
      .catch((err) => {
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
    <AddReferredComponent
      form={form}
      setForm={setForm}
      open={open}
      onSubmit={onSubmit}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
      validarEmail={validarEmail}
    />
  );
}

export default AddReferred;
