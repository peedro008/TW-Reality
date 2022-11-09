import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserManagementComponent from "../Components/UserManagement";
import { RealtorsGet } from "../Logic/Fetch";

function UserManagement() {
  const [type, setType] = useState(null);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [form, setForm] = useState({});
  const UserId = useSelector((e) => e.UserId);
  const Managers = useSelector((e) => e.Users.filter(e => e.UserRole === 'Manager'));
  const userRole = useSelector((e) => e.userRole);
  const [Message, setMessage] = useState("");
  const dispatch = useDispatch();
  const [Err, setErr] = useState(false);

  useEffect(() => {
    setForm({ ...form, UserId: UserId, managerId: UserId });
  }, []);

  const Users = useSelector((e) => e.Users);
  const optionsRealtor = Users.map((e) => ({
    value: e.id,
    label: e.name,
  }));

  const optionsManager = Users.filter((f) => f.UserRole == "Manager").map((e) => ({
    value: e.id,
    label: e.name,
  }));

  

  const onSubmitR = () => {
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
          setMessage(jsonRes.message);
          if (res.status !== 200 && res.status !== 200) {
            RealtorsGet(dispatch);
          } else {
            onOpenModal();
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
  };
  const onSubmitM = () => {
    fetch(`https://truewayrealtorsapi.com/addManager`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          setMessage(jsonRes.message);
          if (res.status !== 200 && res.status !== 200) {
            RealtorsGet(dispatch);
          } else {
            onOpenModal();
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
    <UserManagementComponent
      type={type}
      setType={setType}
      form={form}
      setForm={setForm}
      open={open}
      onSubmitM={onSubmitM}
      onSubmitR={onSubmitR}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
      validarEmail={validarEmail}
      Message={Message}
      setMessage={setMessage}
      Err={Err}
      setErr={setErr}
      userRole={userRole}
      optionsRealtor= {optionsRealtor}
      optionsManager={optionsManager}
    />
  );
}

export default UserManagement;
