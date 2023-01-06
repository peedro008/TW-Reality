import React from "react";
import AddSellComponent from "../Components/addSell";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSell } from "../Logic/Fetch";

function AddSell() {
  const userId = useSelector((state) => state.UserId);
  const UserRole = useSelector((state) => state.userRole)
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const [soldForm, setSoldForm] = useState({});
  const [myTransactionCoord, setMyTransactionCoord] = useState([])
  const [transactionCoordOptions, setTransactionCoordOptions] = useState([]);
  const [coordinatorResp, setCoordinatorResp] = useState('')
  const [sellResp, setSellResp] = useState('')
  const date = new Date();
  const Users = useSelector((e) => e.Users);
  let options = [];
  console.log(options)
  console.log(UserRole)
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
  ;
  let cero = date.getDate() < 10 ? "0" : "";

  const DATE =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    `-${cero}` +
    date.getDate();
  useEffect(() => {
    setForm({ ...form, ClosingDate: DATE });
  }, []);

  const getTransactionsCoord = (UserId) => {
    fetch(`https://truewayrealtorsapi.com/getMyTransactionCoordinatorAvailable?id=${UserId}`)
      .then((res) => res.json())
      .then((json) => setMyTransactionCoord(json))
      .catch((err) => console.log("No Transactions"));
  };

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
            setSellResp('Error adding sell')
          } else {
            console.log(jsonRes);
            getSell(dispatch)
            setSellResp('Sell added successfully')
          }
        } catch (err) {
          console.log(err);
          setSellResp('Error adding sell')
        }
      })
      .then(() => {
        onOpenModal();
      })
      .catch((err) => {
        setSellResp('Error adding sell')
        console.log(err);
      });
  };

  const onSubmitTrans = () => {
    {soldForm.id &&
    fetch('https://truewayrealtorsapi.com/soldTransactionCoordinator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(soldForm)
    })
    .then(async (res) => {
      try {
        const jsonRes = await res.json()
        if (res.status !== 200) {
          console.log("error");
          setCoordinatorResp('Error Selling Transaction Coordinator')
        } else {
          console.log(jsonRes);
          setCoordinatorResp('Transaction Coordinator sold')
        }
      } catch (err) {
        console.log(err);
        setCoordinatorResp('Error Selling Transaction Coordinator')
      }})
    }}
  useEffect(() => {
    let transactions = [];
    myTransactionCoord?.map(e => transactions = [...transactions, {value: e.id, label: `${e.clientName} - ${e.openDate}`}])
    setTransactionCoordOptions(transactions)
  }, [myTransactionCoord])
  
  return (
    <AddSellComponent
      form={form}
      setForm={setForm}
      open={open}
      onSubmit={onSubmit}
      onSubmitTrans={onSubmitTrans}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
      DATE={DATE}
      options={options}
      Users={Users}
      setSoldForm={setSoldForm}
      getTransactionsCoord={getTransactionsCoord}
      transactionCoordOptions={transactionCoordOptions}
      coordinatorResp={coordinatorResp}
      sellResp={sellResp}
      soldForm={soldForm}
      UserRole={UserRole}
    />
  );
}

export default AddSell;
