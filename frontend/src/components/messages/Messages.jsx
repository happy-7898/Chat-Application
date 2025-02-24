import React, { useEffect, useRef } from 'react'
import Message from './Message.jsx'
import useGetMessages from '../../hooks/useGetMessages.jsx'
import MessageSkelton from '../skeltons/MessageSkelton.jsx';
import useListenMessages from '../../hooks/useListenMessages.jsx';

const Messages = () => {
  const {messages,loading}=useGetMessages();
  useListenMessages();
  const lastMessageRef=useRef();

  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"});
    },100);
  },[messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length>0 && messages.map((message)=>(
        <div key={message._id} ref={lastMessageRef}>
          <Message message={message}></Message>
        </div>

      ))}

      {loading && [...Array(3)].map((_,idx)=>
        <MessageSkelton key={idx}></MessageSkelton>
        // <div className='loading loading-spinner text-white'></div>
      )}

      {!loading && messages.length ===0 && (
        <p className='text-center text-blue-200'>Send a message to start the conversation</p>
      )}
        

    </div>
  )
}

export default Messages