import React from 'react'
import { FaDollarSign, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from 'react-rating';
import '../App.css'
import { Link } from 'react-router-dom';

function TabDivs({ item }) {

    return (
        <>
            <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
                className="card glass text-white">
                <figure className='rounded-t-[16px]'>
                    <img className='h-64 w-[100%]' src={item.picture_link} alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {item.name}</h2>
                    <p className='font-normal'><FaDollarSign className='inline' />Price: {item.price}</p>
                    <p className='font-normal'>
                        <Rating className='text-secondaryColor'
                            placeholderRating={item.rating}
                            emptySymbol={<FaStarHalfAlt />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                            readonly
                        />4.3
                    </p>
                    <div className="card-actions justify-end">
                        <div className="card-actions justify-end">
                            <Link to={`toys/${item._id}`}>
                                <label className="btn border-0 bg-primaryColor">View Details</label>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabDivs