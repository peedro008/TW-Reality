import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ManagerRecruitComponent from "../Components/ManagerRecruit";
import { FetchAll, RealtorsGet, referredGet } from "../Logic/Fetch";
function ManagerRecruit(props) {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('')
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  let data = props.location.aboutProps;
  const RUser = data?.User;

  const Users = useSelector((e) => e.Users);
  const optionsRealtor = Users.filter((f) => f.UserRole == "Realtor" || f.UserRole == "Manager").map((e) => ({
    value: e.id,
    label: e.name,
  }));

  const optionsManager = Users.filter((f) => f.UserRole == "Manager").map((e) => ({
    value: e.id,
    label: e.name,
  }));


  useEffect(() => {
    setForm({
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      UserId: data?.UserId,
    });
  }, [data]);

  const onSubmit = () => {
    if (form.password) {
      fetch(`https://truewayrealtorsapi.com/addRealtor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then(async (res) => {
          try {
            const jsonRes = await res.json();
            if (res.status === 200 && res.status === 200) {
              console.log(jsonRes);
              setMessage('Realtor added succesfully')
            } else if (res.status === 409 && res.status === 409) {
              dispatch(RealtorsGet);
              dispatch(referredGet);
              setMessage('Email already exist')
              console.log('email already exist');
            } else {
              dispatch(RealtorsGet);
              dispatch(referredGet);
              setMessage('Something was wrong')
              console.log(jsonRes);
            }
          } catch (err) {
            console.log(err);
          }
        })
        .then(() => {
          onOpenModal();
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
    <ManagerRecruitComponent
      FetchAll={FetchAll}
      dispatch={dispatch}
      validarEmail={validarEmail}
      form={form}
      open={open}
      onSubmit={onSubmit}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
      setForm={setForm}
      RUser={RUser}
      show={show}
      setShow={setShow}
      optionsRealtor={optionsRealtor}
      optionsManager={optionsManager}
      message={message}
    />
  );
}

export default ManagerRecruit;
