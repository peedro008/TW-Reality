import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddReferredComponent from "../Components/addReferred";
import { referredGet } from "../Logic/Fetch";

function AddReferred() {
  const { UserId, userName } = useSelector((state) => state);
  const stado = useSelector((state) => state);
  const us = useSelector((state) => state.Users);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [form, setForm] = useState({});
  const [error, setError] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setForm({
      ...form,
      UserRole: "Realtor",
      UserId: UserId,
      sendEmail: userMail,
      userNameEmail: userName,
    });
  }, []);

  const userRef = us.filter((e) => e.id === UserId)[0]?.ReferredId || 1;
  const userMail = us.filter((e) => e.id === userRef)[0]?.email;
  console.log(form);

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

          if (res.status === 200 || res.status === 204) {
            referredGet(dispatch);
            console.log(jsonRes);
          } else if (res.status === 409) {
            setError("Email already exist");
          } else if (res.status === 502) {
            setError("Name or Phone already exists");
          } else {
            console.log("error");
            setError("Something was wrong");
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
      error={error}
    />
  );
}

export default AddReferred;
