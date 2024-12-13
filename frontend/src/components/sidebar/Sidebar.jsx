import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput></SearchInput>
        <div className='divider px-3 border-t border-blue-50'></div>
        <Conversations></Conversations>
        <LogoutButton></LogoutButton>
    </div>
  )
}

export default Sidebar