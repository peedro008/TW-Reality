import React, { useEffect, useState } from "react";
import Isologo_background from "../assets/Isologo_background.png";
import { BiSearchAlt2 } from "react-icons/bi";
import spinnerr from "../assets/loaderEllipsis.gif";
import { AiOutlineSend } from "react-icons/ai";
import ReactTimeAgo from 'react-time-ago'

function Chat({ onSubmit, setForm, form, setPhone, myMessages, myLastClients, resetInput,setResetInput, loader,loaderMessages, phone, setLoaderMessages }) {

  const [clientSelected, setClientSelected] = useState([])
  const [clientCardGrow, setClientCardGrow] = useState('clientCardGrow')
  const [iconSend, setIconSend] = useState('iconSend')

  const scrollToBottom = (ChatBottom) => {
    const element = document.getElementById(ChatBottom);
    element.scrollTop = element.scrollHeight;
}
useEffect(() => {
  console.log('PElu')
  setTimeout(() => {
    setLoaderMessages(false);
    setIconSend('iconSend');
    scrollToBottom('ScrollBottom')
  }, 200);
}, [myMessages])


  return (
    <div className="genericDiv1">
      <div className="genericHeader">
        <p className="genericTitle">WhatsApp Chat</p>
      </div>
      <div className="containerChat">
          <div className="containerContacts">


      <div class="input-wrapper">
   <input type="search" class="inputContact" />
   <BiSearchAlt2
            size={"20px"}
            className="input-icon"
          />
 

</div>
        <div
          className="containerChatClients"
          style={{ justifyContent: "center" }}
        >
       
          {
            loader === false ?
            myLastClients?.map(e => {
             
              return (
            <div className={clientSelected.number === e.phone.slice(9, e.phone.length) ? 'clientCard2':'clientCard'} onMouseEnter={() => setClientCardGrow(e.phone)} onMouseLeave={() => setClientCardGrow('clientCardGrow')} onClick={() => {setPhone(e.phone); setClientSelected({number: e.phone.slice(9, e.phone.length)});  setLoaderMessages(true);}}>
            <div className={clientCardGrow === e.phone ? 'clientCardGrow2' : 'clientCardGrow'}>
            <p className="chatName">{e.phone.slice(9, e.phone.length)}</p>
           <p className="chatPhone"> Last message: <ReactTimeAgo date={e.date} locale="en-US"/></p>
          </div>
          </div>
              )
            })
           : 
           <img
           src={spinnerr}
           style={{
             width: "50px",
             margin: '20px'
             
           }}
         />}
          
        </div>
        </div>
        <div className="chatBox">
          {
            phone !== '' &&

          <div className="chatHeader">
            <div style={{width: '100%'}}>
            <p className="chatNameSelect">{clientSelected?.number || ''}</p>
            </div>
         
          </div>
          }
          <div className="chatMessages" id="ScrollBottom">
           {
            loaderMessages === false ?
            myMessages?.sort((x, y) => {
              return new Date(x.dateSent) < new Date(y.dateSent) ? 1 : -1
          }).reverse().map(e => {
            if (e.status === 'failed') {
              return(
              <div  className="chatStatusFailed" >
              <p className="messageSent">{e.body}</p>
              <p className="timeMessage">{e.status}</p>
              </div>
              )
            } else {

        
              if(e.to.slice(9, e.to.length) === clientSelected?.number) {
                return(
                  <div  className="chatStatusSelectFrom" >
                  <p className="messageSent">{e.body}</p>
                  <p className="timeMessage"><ReactTimeAgo date={e.dateSent} locale="en-US"/> - {e.status}</p>
                  {/* <p className="timeMessage">{e.status}</p> */}
                  </div>
                )

              } else {
                return(
                  <div className="chatStatusSelect">
                  <p className="messageSent">{e.body}</p>
                  <p className="timeMessage"><ReactTimeAgo date={e.dateSent} locale="en-US"/></p>
                  {/* <p className="timeMessage">{e.status}</p> */}
                  </div>
                )
              }
            }
            }) :
        
            <img
            src={spinnerr}
            style={{
              display: 'flex',
              width: "80px",
              marginLeft: '20px',
              alignSelf: 'center',
              justifySelf: 'center',
            }}
            />
           }
          </div>
          {
            phone !== '' &&

          <form onSubmit={() => onSubmit()} className="chatText">
            
            <textarea
              
              className="inputMessage"
              placeholder="Type a message..."
              value={resetInput}
              onChange={(e) => {setForm({...form, body: e.target.value}); setResetInput(e.target.value)}}
            ></textarea>
            {
              form.body &&

            <AiOutlineSend size='35px' onClick={() => {onSubmit(); setResetInput(""); setIconSend('iconSend2')}} className={iconSend} />
            }
          </form>
          }
    
        </div>
      </div>
      <img
        src={Isologo_background}
        style={{
          position: "fixed",
          pointerEvents: "none",
          right: 0,
          bottom: 0,
          width: "428px",
          opacity: "0.5",
        }}
      />
    </div>
  );
}

export default Chat;
