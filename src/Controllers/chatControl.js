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
  const [messaggePlusFile, setMessaggePlusFile] = useState([]);
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
              setMessaggePlusFile([]);
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

  useEffect(() => {
    setLoaderMessages(true);
    let obj = [{ hola: "hola" }, { hola: "hola" }, { hola: "hola" }];
    let cantidadConFiles = myMessages.filter((e) => e.numMedia !== "0");
    let cantidadConFiles2 = [...cantidadConFiles, ...obj];
    console.log(cantidadConFiles2);
    let images = [];
    let contador = 0;
    cantidadConFiles2?.map((e) => {
      let thisJson = "";
      fetch(`https://truewayrealtorsapi.com/getImages?message_Sid=${e.sid}`)
        .then((res) => res.json())
        .then(async (json) => {
          thisJson = json;
          await json.media_list?.map((f) =>
            images.push({
              url: f.uri,
              dateCreated: new Date(f.date_created).toISOString(),
              content_type: f.content_type,
            })
          );
        })
        .then(() => (contador = contador + 1))
        .then(() => {
          // console.log(contador);
          if (contador === cantidadConFiles2.length - 1) {
            setMynuevochatconimagenes(images);
          }
        })
        .catch((err) => console.log(err));
    });
  }, [myMessages]);

  useEffect(() => {
    let images = [];
    let contador = 0;
    if (mynuevochatconimagenes.length > 0) {
      fetch(
        `https://truewayrealtorsapi.com/yourImage?uriImage=${mynuevochatconimagenes[
          mynuevochatconimagenes.length - 1
        ].url?.slice(
          0,
          mynuevochatconimagenes[mynuevochatconimagenes.length - 1].url.length -
            5
        )}`
      )
        .then(async (res) => {
          const jsonRes = await res.json();
          if (mynuevochatconimagenes.length < 2) {
            setMyImages([
              {
                img: jsonRes,
                dateCreated:
                  mynuevochatconimagenes[mynuevochatconimagenes.length - 1]
                    .dateCreated,
                contentType:
                  mynuevochatconimagenes[mynuevochatconimagenes.length - 1]
                    .content_type,
              },
            ]);
            console.log("Set el 208 o mas con el array de 1");
          }
          images.push({
            img: jsonRes,
            dateCreated:
              mynuevochatconimagenes[mynuevochatconimagenes.length - 1]
                .dateCreated,
            contentType:
              mynuevochatconimagenes[mynuevochatconimagenes.length - 1]
                .content_type,
          });
        })
        .catch((err) => console.log(err));
    }
    if (mynuevochatconimagenes.length > 1) {
      mynuevochatconimagenes.map((e) =>
        fetch(
          `https://truewayrealtorsapi.com/yourImage?uriImage=${e.url?.slice(
            0,
            e.url.length - 5
          )}`
        )
          .then(async (res) => {
            const jsonRes = await res.json();
            images.push({
              img: jsonRes,
              dateCreated: e.dateCreated,
              contentType: e.content_type,
            });
          })
          .then(() => (contador = contador + 1))
          .then(() => {
            console.log(contador);
            // console.log(images);
            if (contador === mynuevochatconimagenes.length - 1) {
              setMyImages(images);
            }
          })
          .catch((err) => console.log(err))
      );
    }
  }, [mynuevochatconimagenes]);

  useEffect(() => {
    if (myImages.length > 0) {
      console.log(myImages);
      setMessaggePlusFile([...myMessages, ...myImages]);
    }
  }, [myImages]);

  console.log(messaggePlusFile);
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
      myMessages={messaggePlusFile.length > 0 ? messaggePlusFile : myMessages}
      myLastClients={myLastClients}
      resetInput={resetInput}
      reset={reset}
      setResetInput={setResetInput}
      loader={loader}
      loaderMessages={loaderMessages}
      setLoaderMessages={setLoaderMessages}
      setMessaggePlusFile={setMessaggePlusFile}
    />
  );
}

export default ChatControl;
