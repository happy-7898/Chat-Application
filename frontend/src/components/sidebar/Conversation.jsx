import React from 'react'
import useConversation from '../../store/useConversation.jsx'
import { useSocketContext } from '../../context/SocketContext.jsx';

const Conversation = ({conversation,lastIdx}) => {
    const {selectedConversation,setSelectedConversation}=useConversation();

    const isSelected=selectedConversation?._id===conversation._id;

    const {onlineUsers}=useSocketContext();
    const isOnline=onlineUsers.includes(conversation._id);
    console.log(isOnline);
    
  return (
    <>
        <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
            ${isSelected?"bg-sky-500":""}`
            } onClick={()=>{setSelectedConversation(conversation)}}>
            <div className={`avatar ${isOnline?"online":""}`}>
                <div className='w-12 rounded-full'>
                    <img src={conversation.profilePic} alt='user avatar'></img>
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                </div>
            </div>
        </div>

        {!lastIdx && <div className='divider my-0 py-0 h-1 border-t border-blue-50'></div>}
    </>
  )
}

export default Conversation