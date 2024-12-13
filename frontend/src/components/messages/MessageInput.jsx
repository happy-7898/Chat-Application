import React, { useState } from 'react'
import {BsSend} from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage.jsx';
import toast from 'react-hot-toast';

const MessageInput = () => {
  const [message,setMessages]=useState("");
  const {loading,sendMessage}=useSendMessage();

  const handleSubmit=async (e) =>{
    e.preventDefault();

    if(!message){
      toast.error("Empty Message")
      return;
    };
    await sendMessage(message);
    setMessages("");
  }

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input type='text' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white'
            placeholder='Send a message'
            value={message}
            onChange={(e)=>setMessages(e.target.value)}></input>
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                {loading?<div className='loading loading-spinner'></div>:<BsSend className='text-gray-50'></BsSend>}
            </button>
        </div>
    </form>
  )
}

export default MessageInput