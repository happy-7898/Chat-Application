import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox.jsx'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.jsx'

const Signup = () => {
  const [inputs,setInputs]=useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })

  const {loading,signup}=useSignup();

  const handleCheckboxChange=(gender)=>{
    setInputs({...inputs,gender})
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-[28rem] mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80'>
      <h1 className='text-blue-700 text-4xl font-bold text-center pb-2'> ChatAPP</h1>
        <h1 className='text-2xl font-semibold text-center text-gray-300'>
          Sign Up 
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text font-semibold'>Full Name</span>
            </label>
            <input type='text' placeholder='FullName' className='w-full input input-bordered h-10'
            value={inputs.fullName}
            onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}></input>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text font-semibold'>Username</span>
            </label>
            <input type='text' placeholder='Username' className='w-full input input-bordered h-10'
            value={inputs.username}
            onChange={(e)=>setInputs({...inputs,username:e.target.value})}></input>
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text font-semibold'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'
            value={inputs.password}
            onChange={(e)=>setInputs({...inputs,password:e.target.value})}></input>
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text font-semibold'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'
            value={inputs.confirmPassword}
            onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}></input>
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}></GenderCheckbox>

          <Link to='/login' className='text-sm hover:underline hover:text-blue-700 mt-2 inline-block font-semibold' >
            Already have an account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700 font-bold text-lg'
            disabled={loading}>
            {loading?<span className='loading loading-spinner'></span>:"Sign Up"}</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Signup