import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminManagement from "../Components/AdminManagement";
import { getUsers } from "../Redux/actions";

function AdminManagementControl(props) {
  const Referred = useSelector((state) => state.Referred);
  const Users = useSelector((state) => state.Users);
  const UserId = useSelector((state) => state.UserId);
  const Name = useSelector((state) => state.userName);
  const [selectedId, setSelectedId] = useState(null);
  const [modalPay, setModalPay] = useState("");
  const [open, setOpen] = useState(false);
  const [openRef, setOpenRef] = useState(false);
  const [openMan, setOpenMan] = useState(false);
  const [typeList, setTypeList] = useState();
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const onOpenModalRef = () => setOpenRef(true);
  const onCloseModalRef = () => setOpenRef(false);
  const onOpenModalMan = () => setOpenMan(true);
  const onCloseModalMan = () => setOpenMan(false);
  const dispatch = useDispatch();

  let data = props?.location.aboutProps;
  useEffect(() => {
    setTypeList(data?.referrals);
  }, []);

  const deleteUser = () => {
    fetch(`https://truewayrealtorsapi.com/deleteUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: selectedId }),
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

  const deleteManager = () => {
    fetch(`https://truewayrealtorsapi.com/deleteManager`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: selectedId }),
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

  const deleteReferred = () => {
    fetch(`https://truewayrealtorsapi.com/deleteReferred`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: selectedId }),
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
    <div>
      <AdminManagement
        Users={Users}
        Name={Name}
        Referred={Referred}
        UserId={UserId}
        modalPay={modalPay}
        setModalPay={setModalPay}
        open={open}
        deleteUser={deleteUser}
        deleteReferred={deleteReferred}
        deleteManager={deleteManager}
        setSelectedId={setSelectedId}
        onCloseModal={onCloseModal}
        onOpenModal={onOpenModal}
        onCloseModalRef={onCloseModalRef}
        onOpenModalRef={onOpenModalRef}
        openRef={openRef}
        onCloseModalMan={onCloseModalMan}
        onOpenModalMan={onOpenModalMan}
        openMan={openMan}
        typeList={typeList}
        setTypeList={setTypeList}
      />
    </div>
  );
}

export default AdminManagementControl;
