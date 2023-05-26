import React from 'react'
import { FaDollarSign, FaStar, FaStarHalfAlt, FaShoppingBasket,FaUser,FaEnvelope,FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from 'react-router-dom';

function Modal() {
    const item = useLoaderData()
    const navigate=useNavigate()

    return (
        <>
              <button onClick={() =>navigate(-1)} className=" text-black mx-5 mt-8 lg:mx-16">
                <FaArrowLeft className='text-primaryColor inline' /> back
            </button>


            <div className="  lg:w-[70%] card lg:card-side bg-base-100 shadow-xl mx-5 my-8 lg:my-16 lg:mx-auto">
                <figure className='h-96'>
                    <img className='h-96 object-fill' src={item.picture_link} alt="Album" />
                </figure>
                <div className="card-body justify-center">
                    <h2 className="card-title">{item.name}</h2>
                    <p className='font-normal flex-grow-0 my-3'>{item?.detail_description}</p>
                    <p className='font-normal flex-grow-0'><FaDollarSign className='inline' /> Price: {item?.price}</p>
                    <p className='font-normal flex-grow-0 my-3'><FaStar className='inline' /> Rating: {item?.rating}</p>
                    <p className='font-normal flex-grow-0'><FaShoppingBasket className='inline' /> Available Quantity: {item?.available_quantity}</p>
                    <p className='font-normal flex-grow-0 my-3'><FaUser className='inline' /> Seller Name: {item?.seller_name}</p>
                    <p className='font-normal flex-grow-0'><FaEnvelope className='inline' /> Seller email: {item?.seller_email}</p>

                </div>
            </div>
        </>
    )
}

export default Modal