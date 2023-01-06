import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddClient from "../Components/addClient";

function AddClientControl() {
  const userId = useSelector((state) => state.UserId);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [form, setForm] = useState({});
  const [respTransactionCoord, setRespTransactionCoord] = useState([]);

useEffect(() => {
  setForm({...form, UserId: userId})
}, [])


let optionsReason = [ {
  value: "Buy",
  label: "Buy",
},
{
  value: "Sale",
  label: "Sale",
},
{
  value: "Rent",
  label: "Rent",
}]

let optionsClient= [ {
  value: "Client",
  label: "Client",
},
{
  value:"Lead",
  label: "Lead",
}
]

let optionsStatus=[ {
  value: "Need to follow up",
  label: "Need to follow up",
},
{
  value: "Not interested for now",
  label: "Not interested for now",
}
]
  const onSubmit = () => {
    fetch(`https://truewayrealtorsapi.com/addClient`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(async (res) => {
      try {
        if (res.status === 409) {
        onOpenModal();
        console.log(res);
        setRespTransactionCoord([
          false,
          "Error adding Client, Email already Exists",
        ]);
      } 
        else if (res.status !== 200) {
          onOpenModal();
          console.log(res);
          setRespTransactionCoord([
            false,
            "Error adding Client",
          ]);
        }
        else {
          onOpenModal();
          console.log("2");
          setRespTransactionCoord([
            true,
            "Client added successfully",
          ]);
        }
      } catch (err) {
        onOpenModal();
        console.log(err);
        setRespTransactionCoord([
          false,
          "Error adding Client",
        ]);
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
    <AddClient
      form={form}
      setForm={setForm}
      open={open}
      onSubmit={onSubmit}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
      optionsReason={optionsReason}
      optionsClient={optionsClient}
      optionsStatus={optionsStatus}
      respTransactionCoord={respTransactionCoord}
      validarEmail={validarEmail}
      userId={userId}
    />
  );
}

export default AddClientControl;
