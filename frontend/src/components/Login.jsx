import React, { useState } from 'react'
import axios from 'axios'
axios.defaults.withCredentials=true
import {useDispatch} from 'react-redux'
import { login } from '../features/authSlice'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

function Login() {

    const navigate= useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(email=="" || password=="")
            return alert("Fill all details")
        
        axios.post('http://localhost:3000/saver/api/login',{
            email,
            password
        },{
            withCredentials:true
        })
        .then((response)=>{
            console.log(response)
            if(response.data.success)
            {
                console.log(response.data)
                dispatch(login(response.data.user.name))
                localStorage.setItem('token',response.data.token)
                navigate("/contacts")
            }
            else
            {
                alert("Invalid credentials")
                setEmail("")
                setPassword("")
            }
            
           
        })
        .catch((err)=>{
            console.log(err)
            alert("Something went wrong. Please try again")
        })
        
    }

    return (
        <div className=' text-black flex justify-center bg-slate-600 m-32 p-32 rounded-lg top-0 fixed flex-col align-middle'>
            <h2 className=' m-auto text-2xl font-bold'>Login</h2>
            <form action="" type='submit' onSubmit={handleSubmit} className=' flex flex-col justify-center align-middle m-4 w-80'>
                <input type="text" name="" id="" value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder='Email'
                className='m-3'/>

                <input type="password" value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 placeholder='Password'
                className=' m-3'
                />
                <button type="submit" className=' inline-block m-3 bg-purple-500 w-20 h-8 shadow-slate-400 border-slate-200'>
                    Submit
                </button>
            </form>


        </div>
    )
}

export default Login
