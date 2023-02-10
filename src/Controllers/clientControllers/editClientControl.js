import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import EditClient from "../../Components/clientComponents/editClient";
import { getClients } from "../../Redux/actions";

function EditClientControl({ clientData, setReloadInfo, setNewHistory }) {
  const userId = useSelector((state) => state.UserId);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [form, setForm] = useState({});
  const [resp, setResp] = useState([]);

  let New_York_Time = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    timestyle: "full",
    hourCycle: "h24",
  });

  useEffect(() => {
    setForm({
      ...form,
      ...clientData,
    });
  }, []);
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
          setResp([false, "Error editing Client"]);
        } else {
          onOpenModal();
          dispatchClient();
          setReloadInfo(New_York_Time);

          setResp([true, "Client edited successfully"]);
          setTimeout(() => {
            onCloseModal();
            setNewHistory("noteTable");
          }, 1500);
        }
      } catch (err) {
        onOpenModal();
        console.log(err);
        setResp([false, "Error editing Client"]);
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
      resp={resp}
      validarEmail={validarEmail}
      clientData={clientData}
    />
  );
}

export default EditClientControl;
