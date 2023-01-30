import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chat from "../Components/Chat";
import io from "socket.io-client";

function ChatControl() {
  const userId = useSelector((state) => state.UserId);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [form, setForm] = useState([]);
  const [myMessages, setMyMessages] = useState([]);
  const [myLastClients, setMyLastClients] = useState([]);
  const [loader, setLoader] = useState(true);
  const [loaderMessages, setLoaderMessages] = useState(false);
  const [phone, setPhone] = useState("");
  const [resetInput, setResetInput] = useState("");
  const [getMyLast, setGetMyLast] = useState("");
  const [mynuevochatconimagenes, setMynuevochatconimagenes] = useState([]);
  const socket = io("https://truewayrealtorsapi.com");

  // Get Numbers

  useEffect(() => {
    fetch(`https://truewayrealtorsapi.com/getClientsNumber`).then(
      async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status === 200) {
            setMyLastClients(jsonRes);
            setLoader(false);
          }
        } catch (error) {
          console.log(error);
        }
      }
    );
  }, [getMyLast]);

  // Send Message

  const onSubmit = () => {
    fetch(`https://truewayrealtorsapi.com/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(async (res) => {
      try {
        const jsonRes = await res.json();
        if (res.status === 200) {
          socket.emit("getMess", jsonRes);
          setForm({ to: phone });
          // setResetInput("");
        } else {
          console.log("Message cannot be sended");
        }
      } catch (err) {
        console.log("Message cannot be sended");
      }
    });
  };

  const reset = () => {
    setResetInput("");
  };

  // Get my Messages

  useEffect(() => {
    if (phone !== "") {
      setForm({ ...form, to: phone });
      setLoaderMessages(true);
      fetch(`https://truewayrealtorsapi.com/getMyMessages?phone=${phone}`).then(
        async (res) => {
          try {
            const jsonRes = await res.json();
            if (res.status === 200) {
              setMyMessages(jsonRes);
            }
          } catch (error) {
            console.log(error);
          }
        }
      );
    }
  }, [phone]);

  const getMyMessag = (numb) => {
    if (numb === phone) {
      fetch(`https://truewayrealtorsapi.com/getMyMessages?phone=${numb}`).then(
        async (res) => {
          try {
            const jsonRes = await res.json();
            if (res.status === 200) {
              console.log(jsonRes);
              setMyMessages(jsonRes);
            }
          } catch (error) {
            console.log(error);
          }
        }
      );
    }
  };

  // Get my multimedia files

  console.log(mynuevochatconimagenes);

  // Socket IO

  useEffect(() => {
    socket.on("newMessageSend", (message) => {
      setGetMyLast(message.dateCreated);
      getMyMessag(message.to);
    });
    return () => {
      socket.off("newMessageSend", (message) => {
        setGetMyLast(message.dateCreated);
        getMyMessag(message.to);
      });
    };
  }, [phone]);

  useEffect(() => {
    socket.on("messageReceived", (message) => {
      setGetMyLast(message.dateCreated);
      console.log(message);
    });
    return () => {
      socket.on("messageReceived", (message) => {
        setGetMyLast(message.dateCreated);
      });
    };
  }, []);

  return (
    <Chat
      onSubmit={onSubmit}
      form={form}
      setForm={setForm}
      phone={phone}
      setPhone={setPhone}
      myMessages={myMessages}
      myLastClients={myLastClients}
      resetInput={resetInput}
      reset={reset}
      setResetInput={setResetInput}
      loader={loader}
      loaderMessages={loaderMessages}
      setLoaderMessages={setLoaderMessages}
    />
  );
}

export default ChatControl;
