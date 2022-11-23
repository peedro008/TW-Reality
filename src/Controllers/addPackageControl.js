import React from "react";
import AddSellComponent from "../Components/addSell";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddPackage from "../Components/addPackage";
function AddPackageControl() {
  const userId = useSelector((state) => state.UserId);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [form, setForm] = useState({});
 

  const Users = useSelector((e) => e.Users);
  const optionsUsers = Users.map((e) => ({
    value: e.id,
    label: e.name,
  }));
  
  const onSubmit = () => {
    fetch(`http://localhost:8080/addPackage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();

          if (res.status !== 200) {
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
  };

  const onSubmitSelling = () => {
    fetch(`http://localhost:8080/addSelling`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();

          if (res.status !== 200) {
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
  };

  const onSubmitOffer = () => {
    fetch(`http://localhost:8080/addOffer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();

          if (res.status !== 200) {
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
  };

  const onSubmitListing = () => {
    fetch(`http://localhost:8080/addListing`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();

          if (res.status !== 200) {
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
    <AddPackage
      form={form}
      setForm={setForm}
      open={open}
      onSubmit={onSubmit}
      onSubmitListing={onSubmitListing}
      onSubmitOffer={onSubmitOffer}
      onSubmitSelling={onSubmitSelling}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
      optionsUsers={optionsUsers}
    />
  );
}

export default AddPackageControl;
