import React from 'react'
import { useAuthContext } from '../../context/AuthContext.jsx'
import useConversation from '../../store/useConversation.jsx';
import { extractTime } from '../../utils/extractTime.jsx';

const Message = ({message}) => {
  const {authUser}=useAuthContext();
  const {selectedConversation}=useConversation();
  const fromMe=message.senderId===authUser._id;
  const messageTime=extractTime(message.createdAt);
  const chatClassName=fromMe?"chat-end":"chat-start";
  const profilePic=fromMe?authUser.profilePic:selectedConversation?.profilePic;
  const bubbleBgColor=fromMe?"bg-blue-500":"";
  const shakeClass=message.shouldShake?"shake":""

  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt='Tailwind CSS chat bubble component'
                src={profilePic}></img>
            </div>
        </div>

        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-200'>{messageTime}</div>

    </div>
  )
}

export default Message