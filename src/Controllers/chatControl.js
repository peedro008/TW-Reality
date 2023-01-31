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
  const [myImages, setMyImages] = useState([]);
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
              // setMynuevochatconimagenes(jsonRes);
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
              // setMynuevochatconimagenes(jsonRes);
            }
          } catch (error) {
            console.log(error);
          }
        }
      );
    }
  };

  // Get my multimedia files

  useEffect(() => {
    let images = [];
    setLoaderMessages(true);
    myMessages.map(
      (e) =>
        e.numMedia !== "0" &&
        fetch(`https://truewayrealtorsapi.com/getImages?message_Sid=${e.sid}`)
          .then((res) => res.json())
          .then((json) => {
            json.media_list?.map((f) =>
              images.push({
                url: f.uri,
                dateCreated: new Date(f.date_created).toISOString(),
                content_type: f.content_type,
              })
            );
          })
          .then(() => {
            setMynuevochatconimagenes(images);
          })
          .catch((err) => console.log(err))
    );
    // .then(console.log('Se cargaron todas las imagenes'));
  }, [myMessages]);

  // console.log(mynuevochatconimagenes);
  // useEffect(() => {
  //   mynuevochatconimagenes.map((e) =>
  //     fetch(
  //       `https://truewayrealtorsapi.com/yourImage?uriImage=${e.url?.slice(
  //         0,
  //         e.url.length - 5
  //       )}`
  //     ).then(async (res) => {
  //       try {
  //         const jsonRes = await res.json();
  //         if (res.status !== 200) {
  //           console.log("error");
  //         } else {
  //           setMyImages([...myImages, jsonRes]);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })
  //   );
  // }, [mynuevochatconimagenes]);

  console.log(myImages);
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
