import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className=' mx-auto text-center h-full flex flex-col align-middle'>
            <h1 className=' text-lg'>Contact Saver</h1>
            <img  className=' w-80 mx-auto' src="https://m.media-amazon.com/images/I/71E-Pam0CtL.png" alt="" />
            <br />
            <div className=' flex align-middle justify-evenly'>
                <Link to='/login' className=' rounded p-5 bg-purple-800'><button>Login</button></Link>
                <Link to='/register'  className=' p-5 rounded- bg-purple-800'><button to='/register'>Register</button></Link>
            </div>
        </div>
    )
}

export default Hero
