import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import useTitle from '../hooks/useTitle'

function All_Toys() {
    //dynamic title
    useTitle('All Toys')

  const data = useLoaderData()
  const[itemData,setItemData]=useState(data)

  const searchHandler = (e) => {

    const seachValue = e.target.value;
    fetch(`https://disney-zone-server.vercel.app/search?name=${seachValue}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setItemData(data)
      })
  }

  return (
    <div className='lg:px-12 px-5'>
      <div className='my-8  flex justify-between'>
       <h2 className='text-center text-3xl font-medium  mx-auto'>ALl Toys Collections </h2>
        <input type="text" onChange={searchHandler} placeholder="Search" className="input input-bordered" />
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              itemData.map((item, index) =>
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item?.seller_name}</td>
                  <td>{item?.name}</td>
                  <td>{item?.category}</td>
                  <td>${item?.price}</td>
                  <td>{item?.available_quantity}</td>
                  <td>
                    <Link to={`/toys/${item._id}`}>
                      <label className="btn border-0 bg-primaryColor">View Details</label>
                    </Link>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default All_Toys