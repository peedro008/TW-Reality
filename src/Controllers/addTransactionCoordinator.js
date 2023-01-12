import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TransactionCoordinatorComp from "../Components/packages/TransactionCoordinator";


function AddTransactionCoordinator() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [form, setForm] = useState({});
  const Users = useSelector((e) => e.Users);

  const options = Users.filter((f) => f.UserRole == "Realtor" ||  f.UserRole == "Manager" ).map((e) => ({
    value: e.id,
    label: e.name,
  }));


    
    let New_York_Time = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      timestyle: "full",
      hourCycle: "h24",
    });
  
    let New_York_Date = new Date().toLocaleDateString("en-US", {
      timeZone: "America/New_York",
      timestyle: "full",
      hourCycle: "h24",
    });

    useEffect(() => {
      console.log(form)
    }, [form])
    
  const onSubmit = () => {
    fetch(`http://localhost:8080/addTransactionCoordinator`, {
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
  return (
    <TransactionCoordinatorComp
      form={form}
      setForm={setForm}
      open={open}
      onSubmit={onSubmit}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
      DATE={New_York_Date}
      options={options}
      Users={Users}
      
    />
  );
}

export default AddTransactionCoordinator;
