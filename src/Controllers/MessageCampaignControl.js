import React, { useState, useEffect } from "react";
import Contacts from "../Components/Contacts";
import MessageCampaign from "../Components/MessageCampaign";

const MessageCampaignControl = () => {
  const [form, setForm] = useState([]);
  const [respAdd, setRespAdd] = useState("");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState([]);
  const [resetInput, setResetInput] = useState("");
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  console.log(form);
  useEffect(() => {
    let numbers = [];
    contacts.map((e) => numbers.push(e.number));
    setForm({ ...form, numbers });
  }, [contacts]);

  useEffect(() => {
    fetch("https://truewayrealtorsapi.com/getContacts").then(async (res) => {
      const jsonRes = await res.json();
      if (res.status === 200) {
        setContacts(jsonRes);
      } else {
        console.log("Error, no contacts");
      }
    });
  }, []);

  const onSubmit = () => {
    fetch(`https://truewayrealtorsapi.com/sendMultiMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(async (res) => {
      try {
        const jsonRes = await res.json();
        if (res.status === 200) {
          setRespAdd(jsonRes);
          onOpenModal();
          console.log(jsonRes);
        } else {
          console.log("Message cannot be sended");
        }
      } catch (err) {
        console.log("Message cannot be sended");
      }
    });
  };

  return (
    <MessageCampaign
      setForm={setForm}
      form={form}
      respAdd={respAdd}
      onCloseModal={onCloseModal}
      open={open}
      setSearch={setSearch}
      setResetInput={setResetInput}
      onSubmit={onSubmit}
    />
  );
};

export default MessageCampaignControl;
