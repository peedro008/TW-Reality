import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ManagerEditAdmin from "../Components/ManagerEditAdmin";
import { FetchAll, RealtorsGet, referredGet } from "../Logic/Fetch";
function ManagerEditController(props) {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  let data = props.location.aboutProps;
  const manId = data?.managerId;
  const refBy = useSelector((e) => e.Users.filter(e => e.id === data?.ReferredId));

  useEffect(() => {
    if (data === undefined) {window.history.go(-1); console.log('hola')}
  }, [])
  
  const Users = useSelector((e) => e.Users);
  const optionsRealtor = Users.map((e) => ({
    value: e.id,
    label: e.name,
  }));

  const optionsManager = Users.filter((f) => f.UserRole == "Manager").map((e) => ({
    value: e.id,
    label: e.name,
  }));

  useEffect(() => {
    setForm({...data, password: null});
  }, [data]);

  const onSubmit = () => {
    if (form) {
      fetch(`https://truewayrealtorsapi.com/editManager`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then(async (res) => {
          try {
            const jsonRes = await res.json();

            if (res.status !== 200 && res.status !== 204) {
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
    <ManagerEditAdmin
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

export default ManagerEditController;
