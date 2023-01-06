import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddPackage from "../Components/addPackage";

function AddPackageControl() {
  const userId = useSelector((state) => state.UserId);
  const UserRole = useSelector((state) => state.userRole)
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [form, setForm] = useState({});
  const [respTransactionCoord, setRespTransactionCoord] = useState([]);

  const Users = useSelector((e) => e.Users);
  let options = []
  
{UserRole === 'Admin' ?
options = 
Users?.filter(
  (f) => f.UserRole == "Realtor" || f.UserRole == "Manager"
).map((e) => ({
  value: e.id,
  label: e.name,
})) : options = 
Users?.filter(
  (f) => f.managerId === userId || f.id === userId
).map((e) => ({
  value: e.id,
  label: e.name,
}))}
  // const optionsUsers = Users.map((e) => ({
  //   value: e.id,
  //   label: e.name,
  // }));

  const onSubmitPM = () => {
    fetch(`https://truewayrealtorsapi.com/addPackageMarketing`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(async (res) => {
      try {
        const jsonRes = await res.json();

        if (res.status !== 200) {
          onOpenModal();
          console.log("1");
          setRespTransactionCoord([false, "Error adding Package Marketing"]);
        } else {
          onOpenModal();
          console.log("2");
          setRespTransactionCoord([
            true,
            "Package Marketing added successfully",
          ]);
        }
      } catch (err) {
        onOpenModal();
        console.log("3");
        setRespTransactionCoord([false, "Error adding Package Marketing"]);
      }
    });
  };

  const onSubmitTC = () => {
    fetch(`https://truewayrealtorsapi.com/addTransactionCoordinator`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(async (res) => {
      try {
        const jsonRes = await res.json();

        if (res.status !== 200) {
          onOpenModal();
          console.log("1");
          setRespTransactionCoord([
            false,
            "Error adding Transaction Coordinator",
          ]);
        } else {
          onOpenModal();
          console.log("2");
          setRespTransactionCoord([
            true,
            "Transaction Coordinator added successfully",
          ]);
        }
      } catch (err) {
        onOpenModal();
        console.log("3");
        setRespTransactionCoord([
          false,
          "Error adding Transaction Coordinator",
        ]);
      }
    });
  };

  const onSubmitOffer = () => {
    fetch(`https://truewayrealtorsapi.com/addOffer`, {
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
    fetch(`https://truewayrealtorsapi.com/addListing`, {
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
      onSubmitTC={onSubmitTC}
      onSubmitListing={onSubmitListing}
      onSubmitOffer={onSubmitOffer}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
      optionsUsers={options}
      respTransactionCoord={respTransactionCoord}
      onSubmitPM={onSubmitPM}
      validarEmail={validarEmail}
      userId={userId}
    />
  );
}

export default AddPackageControl;
