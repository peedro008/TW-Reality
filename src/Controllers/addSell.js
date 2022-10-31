import React from 'react'
import AddSellComponent from '../Components/addSell'
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
function AddSell() {
    const userId = useSelector((state) => state.UserId);
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [form, setForm] = useState({});
    const date = new Date();

    const Users = useSelector(e=>e.Users)
    const options = Users.filter(f=>f.UserRole=="Realtor").map(e=>({value:e.id,label:e.name}))
    const DATE =
      date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate();
    useEffect(() => {
   

        setForm({ ...form,  ClosingDate:DATE })
      
        }, [])
        const onSubmit = () => {


            fetch(`http://localhost:8080/addSell`, {
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
              .then(()=>{
                onOpenModal();
              })
              .catch((err) => {
                console.log(err);
              });
          };      
  return (<AddSellComponent
    form={form}
    setForm={setForm}
    open={open}
    onSubmit={onSubmit}
    onCloseModal={onCloseModal}
    onOpenModal={onOpenModal}
    DATE={DATE}
    options={options}

  />)
}

export default AddSell