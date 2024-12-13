import React from 'react'
import Conversation from './Conversation.jsx'
import useGetConversation from '../../hooks/useGetConversation.jsx'

const Conversations = () => {
  const {loading,conversations}=useGetConversation();

  console.log("Conversations: ",conversations)
  return (
    <div className='py-2 flex flex-col overflow-auto'>
        {conversations.map((conversation,idx)=>{
          return <Conversation 
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx === conversations.length-1}></Conversation>

        })}

        {loading?<span className='loading loading-spinner mx-auto'></span>:null}
    </div>
  )
}

export default Conversations