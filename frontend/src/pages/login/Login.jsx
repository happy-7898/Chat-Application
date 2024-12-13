import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin.jsx';

const Login = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const {loading,login}=useLogin();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    await login(username,password)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-[28rem]  mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 h-[450px]'>
      <h1 className='text-blue-700 text-center text-4xl font-bold pb-4 mt-6'> ChatAPP</h1>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
          
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text font-semibold'>Username</span>
            </label>
            <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}></input>
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text font-semibold'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}></input>
          </div>

          <Link to='/signup' className='text-sm hover:underline hover:text-blue-700 mt-4 inline-block'>
            {"Don't"} have a account?
          </Link>

          <div  className='text-center'>
            <button className='btn btn-block btn-sm mt-2 font-bold text-lg '
            disabled={loading}>
              {loading?<span className='loading loading-spinner'></span>:"Login"}
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login