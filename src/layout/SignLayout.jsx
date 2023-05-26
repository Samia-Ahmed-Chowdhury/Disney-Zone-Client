import React, {useState } from 'react'
import Login from '../pages/Login'
import Register from '../pages/Register'
import '../App.css'
import plz from "/plz-unscreen.gif";

function SignLayout() {


    const [activeBtn, setActiveBtn] = useState('Login')

    return (
        <div className="hero min-h-screen my-8">
            <div className="hero-content   flex-col lg:flex-row gap-16">
                <div className="text-center hidden lg:block lg:w-1/2 lg:text-left">
                    <img src={plz} alt="gif"/>
                </div>
         
                <div className="card lg:w-[45vw] shadow-2xl bg-base-100">
                <button className='bg-nuturalColor bg-opacity-30 rounded-3xl flex mt-8  justify-center gap-2 mx-auto'>
                    <span onClick={() => setActiveBtn('Login')} className={`${activeBtn === 'Login' ?'ActiveState':''} p-3 w-24`}>Login</span>
                    <span onClick={() => setActiveBtn('Register')} className={`${activeBtn === 'Register' ?'ActiveState':''} p-3 w-24 `}>Register</span>
                </button>
                    <div className="card-body">
                        {
                            activeBtn === 'Login' ? <Login /> : <Register />
                        }
                   </div>
                </div>

            </div>
        </div>
    )
}

export default SignLayout

