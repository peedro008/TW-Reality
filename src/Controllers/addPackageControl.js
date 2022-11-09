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
  const date = new Date();

  const Users = useSelector((e) => e.Users);
  const options = Users.map((e) => ({
    value: e.id,
    label: e.name,
  }));
  let cero = date.getDate() < 10 ? "0" : "";

  console.log(form);

  const DATE =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    `-${cero}` +
    date.getDate();
  useEffect(() => {
    setForm({ ...form, ClosingDate: DATE });
  }, []);
  
  const onSubmit = () => {
    fetch(`https://truewayrealtorsapi.com/addSell`, {
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
    <AddPackage
      form={form}
      setForm={setForm}
      open={open}
      onSubmit={onSubmit}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
      DATE={DATE}
      options={options}
      Users={Users}
    />
  );
}

export default AddPackageControl;
