import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ManagerRecruitComponent from "../Components/ManagerRecruit";
import { FetchAll, RealtorsGet, referredGet } from "../Logic/Fetch";
import { getReferred, getUsers, getUsersManager } from "../Redux/actions";
function ManagerRecruit(props) {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  let data = props.location.aboutProps;
  const RUser = data?.User;

  const UserId = useSelector((s) => s.UserId);

  const [Users, setUsers] = useState([])
  const userRole = useSelector((e) => e.userRole);
  const usersMan = useSelector((e) => e.UsersManager)
  const usersAdm = useSelector((e) => e.Users)

  useEffect(() => {

    if (userRole === 'Admin') {
      setUsers(usersAdm)
    } else {
      setUsers(usersMan)
    }
  }, []);

  const optionsRealtor = Users?.filter(
    (f) => f.UserRole == "Realtor" || f.UserRole == "Manager"
  ).map((e) => ({
    value: e.id,
    label: e.name,
  }));

  const optionsManager = Users?.filter((f) => f.UserRole == "Manager").map(
    (e) => ({
      value: e.id,
      label: e.name,
    })
  );

  useEffect(() => {
    setForm({
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      UserId: data?.UserId,
    });
  }, [data]);

  const getRefRec = () => {
    axios
      .get(`https://truewayrealtorsapi.com/getReferred`)
      .then(function (response) {
        dispatch(getReferred(response.data));
      })
      .catch((error) => {
        dispatch(getReferred([]));
      });

    axios
      .get(`https://truewayrealtorsapi.com/getMyUsers?UserId=${UserId}`)
      .then(function (response) {
        dispatch(getUsersManager(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

      axios
      .get(`https://truewayrealtorsapi.com/getRealtors`)
      .then(function (response) {
        response.status == 200 || response.status == 204
          ? dispatch(getUsers(response.data))
          : console.log(response.status)
      })
      .catch((error) => {
        console.log(error)
      });
  };

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
              getRefRec();
              console.log(jsonRes);
              setMessage("Realtor added succesfully");
            } else if (res.status === 409 && res.status === 409) {
              setMessage("Email already exist");
              console.log("email already exist");
            } else {
              setMessage("Something was wrong");
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
