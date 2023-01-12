import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReferredEditAdmin from "../Components/ReferredEditAdmin";
import { FetchAll, RealtorsGet, referredGet } from "../Logic/Fetch";
function ReferredEditControl(props) {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  let data = props.location.aboutProps;
  const manId = data?.managerId;
  const refBy = useSelector((e) => e.Users.filter(e => e.id === data?.ReferredId));

  const Users = useSelector((e) => e.Users);
  const optionsRealtor = Users.map((e) => ({
    value: e.id,
    label: e.name,
  }));
  useEffect(() => {
    if (data === undefined) {window.history.go(-1); console.log('hola')}
  }, [])
  
  
  console.log(data);
  const optionsManager = Users.filter((f) => f.UserRole == "Manager").map((e) => ({
    value: e.id,
    label: e.name,
  }));

  useEffect(() => {
    setForm({...data, password: null});
  }, [data]);

  const onSubmit = () => {
    if (form) {
      fetch(`http://localhost:8080/editReferred`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then(async (res) => {
          try {
            const jsonRes = await res.json();

            if (res.status !== 200 && res.status !== 200) {
              dispatch(RealtorsGet);
              dispatch(referredGet);
              console.log("error");
            } else {
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
    <ReferredEditAdmin
      FetchAll={FetchAll}
      dispatch={dispatch}
      validarEmail={validarEmail}
      form={form}
      open={open}
      onSubmit={onSubmit}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
      setForm={setForm}
      manId={manId}
      refBy={refBy}
      show={show}
      setShow={setShow}
      optionsRealtor={optionsRealtor}
      optionsManager={optionsManager}
    />
  );
}

export default ReferredEditControl;
