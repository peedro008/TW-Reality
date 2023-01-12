import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import PackageManagement from "../Components/PackageManagement";

function PackageManagementControl(props) {
  const typeOfP = props.location.state?.aboutProps;
  const Commissions = useSelector((e) => e.Commissions);
  const userId = useSelector((state) => state.UserId);
  const Users = useSelector((e) => e.Users);
  const [packageMarketing, setPackageMarketing] = useState();
  const [modalPay, setModalPay] = useState("");
  const [isMonthly, setIsMonthly] = useState();
  const [isSolded, setIsSolded] = useState()
  const [selectedId, setSelectedId] = useState(null);
  const [open, setOpen] = useState(false);
  const [packages, setPackages] = useState([]);
  const [typeOfPackage, setTypeOfPackage] = useState();
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);



  const soldTC = () => {
    axios
    .get(`http://localhost:8080/getTransactionCoordinator`)
    .then(function (response) {
      response.status === 404 ? setPackages([]) : setPackages(response.data);
    }).then(onCloseModal())
    .catch((error) => {
      setPackages([]);
    });
  }

  const soldPM = () => {
    axios
    .get(`http://localhost:8080/getPackagesMarketing`)
    .then(function (response) {
      response.status === 404 ? setPackages([]) : setPackages(response.data);
    }).then(onCloseModal())
    .catch((error) => {
      setPackages([]);
    });
  }

  useEffect(() => {
    setTypeOfPackage(typeOfP)
  }, [typeOfP])
  
  useEffect(() => {
    if (typeOfPackage === "Marketing") {
      axios
        .get(`http://localhost:8080/getPackagesMarketing`)
        .then(function (response) {
          response.status == 404 ? setPackages([]) : setPackages(response.data);
        })
        .catch((error) => {
          setPackages([]);
        });
    } else {
      axios
        .get(`http://localhost:8080/getTransactionCoordinator`)
        .then(function (response) {
          response.status == 404 ? setPackages([]) : setPackages(response.data);
        })
        .catch((error) => {
          setPackages([]);
        });
      }
  }, [typeOfPackage]);

  useEffect(() => {
    fetch("http://localhost:8080/getPackagesMarketing")
      .then((res) => res.json())
      .then((json) => setPackageMarketing(json));
  }, []);

  const soldTransaction = (formTransaction) => {
    fetch('http://localhost:8080/soldTransactionCoordinator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formTransaction)
    })
    .then(async (res) => {
      try {
        const jsonRes = await res.json()
        if (res.status !== 200) {
          console.log("error");
          
        } else {
          console.log(jsonRes);
          setIsSolded('Transaction Sold')
          soldTC();
        }
      } catch (err) {
        console.log(err);
      } 
  })}

  const onSubmitPackage = (form) => {
    fetch(`http://localhost:8080/editPackageMarketing`, {
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
            soldPM();
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PackageManagement
    typeOfP={typeOfP}
      Commissions={Commissions}
      setSelectedId={setSelectedId}
      selectedId={selectedId}
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
      packageMarketing={packageMarketing}
      soldTransaction={soldTransaction}
      onSubmitPackage={onSubmitPackage}
      userId={userId}
    />
  );
}

export default PackageManagementControl;
