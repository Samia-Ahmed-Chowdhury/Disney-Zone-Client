import React from 'react'
import errorGif from "/oh.gif";
import { useNavigate, useRouteError } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';


function ErrorPage() {
    const navigate = useNavigate()
    const { error, status } = useRouteError()

    return (
        <div className='text-center flex flex-col items-center'>
           <div className='flex'>
            <img src={errorGif} alt="gif" />
           </div>

            <p className='text-2xl font-semibold md:text-3xl mb-8 myDecoration '>
                {error?.message}
            </p>
                <button onClick={() => navigate('/')} className='btn bg-primaryColor border-0  flex items-center gap-3'>
                    <FaArrowLeft className="h-6 w-6 text-white bg-primaryColor border-0" />
                    Back To Home</button>
        </div>
    )
}

export default ErrorPage