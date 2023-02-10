import React, { useState, useEffect } from "react";
import Contacts from "../Components/Contacts";

const ContactsControl = () => {
  const [form, setForm] = useState({});
  const [respAdd, setRespAdd] = useState("");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [reloadContact, setReloadContact] = useState(1);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [contacts, setContacts] = useState([]);
  const [contactsSearch, setContactsSearch] = useState([]);

  const addContact = () => {
    fetch("http://localhost:8080/addContact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(async (res) => {
      if (res.status === 200) {
        console.log("Contact added");
        setRespAdd("Contact added succesfully");
        onOpenModal();
        setReloadContact(reloadContact + 1);
      } else {
        setRespAdd("Error adding contact");
      }
    });
  };

  const getContact = () => {
    fetch("http://localhost:8080/getContacts").then(async (res) => {
      const jsonRes = await res.json();
      if (res.status === 200) {
        setContacts(jsonRes);
        setContactsSearch(jsonRes);
      } else {
        console.log("Error, no contacts");
      }
    });
  };

  useEffect(() => {
    getContact();
  }, [reloadContact]);

  useEffect(() => {
    if (search.length > 2) {
      setContactsSearch([
        ...contacts.filter((e) =>
          e.name.toLowerCase().includes(search.toLowerCase())
        ),
        ...contacts?.filter((e) =>
          e.number.toLowerCase().includes(search.toLowerCase())
        ),
      ]);
    } else if (search.length < 3) {
      setContactsSearch(contacts);
    }
  }, [search]);

  return (
    <Contacts
      addContact={addContact}
      setForm={setForm}
      form={form}
      respAdd={respAdd}
      onCloseModal={onCloseModal}
      contacts={contactsSearch}
      open={open}
      setSearch={setSearch}
    />
  );
};

export default ContactsControl;
