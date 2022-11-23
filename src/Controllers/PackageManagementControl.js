import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import PackageManagement from "../Components/PackageManagement";

function PackageManagementControl() {
  const Commissions = useSelector((e) => e.Commissions);
  const Users = useSelector((e) => e.Users);
  const [modalPay, setModalPay] = useState("");
  const [isMonthly, setIsMonthly] = useState()
  const [selectedId, setSelectedId] = useState(null);
  const [open, setOpen] = useState(false);
  const [packages, setPackages] = useState([])
  const [typeOfPackage, setTypeOfPackage] = useState()
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    if (typeOfPackage === 'Marketing') {
      axios
      .get(`http://localhost:8080/getPackages`)
      .then(function (response) {
        response.status == 404
          ? setPackages([])
          : setPackages((response.data));
      })
      .catch((error) => {
        setPackages([]);
      });
    } else if (typeOfPackage === 'Offer') {
      axios
      .get(`http://localhost:8080/getOffers`)
      .then(function (response) {
        response.status == 404
          ? setPackages([])
          : setPackages((response.data));
      })
      .catch((error) => {
        setPackages([]);
      });
    } else if (typeOfPackage === 'Selling') {
      axios
      .get(`http://localhost:8080/getSellings`)
      .then(function (response) {
        response.status == 404
          ? setPackages([])
          : setPackages((response.data));
      })
      .catch((error) => {
        setPackages([]);
      });
    } else if (typeOfPackage === 'Listing') {
      axios
      .get(`http://localhost:8080/getListings`)
      .then(function (response) {
        response.status == 404
          ? setPackages([])
          : setPackages((response.data));
      })
      .catch((error) => {
        setPackages([]);
      });
    }
  }, [typeOfPackage]);
  
  const onSubmit = (form) => {
    fetch(`http://localhost:8080/editPackage`, {
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
      .then(() => window.location.reload())
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PackageManagement
      Commissions={Commissions}
      setSelectedId={setSelectedId}
      selectedId={selectedId}
      onSubmit={onSubmit}
      open={open}
      Users={Users}
      onOpenModal={onOpenModal}
      onCloseModal={onCloseModal}
      modalPay={modalPay}
      setModalPay={setModalPay}
      setTypeOfPackage={setTypeOfPackage}
      packages={packages}
      setIsMonthly={setIsMonthly}
      typeOfPackage={typeOfPackage}
    />
  );
}

export default PackageManagementControl;
