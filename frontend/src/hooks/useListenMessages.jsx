import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext.jsx'
import useConversation from '../store/useConversation.jsx';
import sound1 from "../assets/sounds/sound1.wav"

const useListenMessages = () => {
    const {socket}=useSocketContext();
    const {messages,setMessages}=useConversation();

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            newMessage.shouldShake=true;
            const sound=new Audio(sound1)
            sound.play();
            setMessages([...messages,newMessage])
        })

        return ()=> socket?.off("newMessage")
    },[socket,setMessages,messages])
}

export default useListenMessages