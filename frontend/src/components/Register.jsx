import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email == "" || password == "" || name=="")
            return alert("Fill all details")

        axios.post('http://localhost:3000/saver/api/register', {
            email,
            password,
            name
        })
            .then((response) => {
                console.log(response)
                if (response.data.success) {
                    console.log(response.data)
                    alert("Successfully Registered. Now please login")
                    navigate("/login")
                }
                else {
                    alert(`${response.data.message}`)
                    setName("")
                    setEmail("")
                    setPassword("")
                }


            })
            .catch((err) => {
                console.log(err)
                alert("Something went wrong. Please try again")
            })

    }

    return (
        <div className=' text-black flex justify-center bg-slate-600 m-32 p-32 rounded-lg top-0 fixed flex-col align-middle'>
            <h2 className=' m-auto font-bold'>Register</h2>
            <form action="" type='submit' onSubmit={handleSubmit} className=' flex flex-col justify-center align-middle m-4 w-80'>
                <input type="text" name="" id="" value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name'
                    className='m-3' />

                <input type="text" name="" id="" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    className='m-3' />

                <input type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

export default Register
