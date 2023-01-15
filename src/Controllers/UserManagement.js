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
  const [error, setError] = useState()
  const dispatch = useDispatch();
  const [Err, setErr] = useState(false);
  const [Users, setUsers] = useState([])
  const usersMan = useSelector((e) => e.UsersManager)
  const usersAdm = useSelector((e) => e.Users)

  useEffect(() => {
    setForm({ ...form, UserId: UserId, managerId: UserId });

    if (userRole === 'Admin') {
      setUsers(usersAdm)
    } else {
      setUsers(usersMan)
    }
  }, []);

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
          if (res.status === 200) {
            onOpenModal();
            RealtorsGet(dispatch);
          } else if (res.status === 409) {
            setError('Email already exists');
            onOpenModal();
          } else {
            setError('Something was wrong');
            onOpenModal();
          }
        } catch (err) {
          console.log(err);
        }
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
          if (res.status === 200) {
            RealtorsGet(dispatch);
            onOpenModal();
            console.log('200')
          } else if (res.status === 409) {
            setError('Email already exists');
            onOpenModal();
          } else {
            setError('Something was wrong');
            onOpenModal();
            console.log(res)
          }
        } catch (err) {
          console.log(err);
        }
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
      error={error}
      setErr={setErr}
      userRole={userRole}
      optionsRealtor= {optionsRealtor}
      optionsManager={optionsManager}
    />
  );
}

export default UserManagement;
