import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'
import Swal from 'sweetalert2'

function My_Toys() {
  //dynamic title
  useTitle('My Toys')

  const [myToy, setMyToy] = useState([])
  const { userEmail } = useContext(AuthContext)

  useEffect(() => {
    fetch(`https://disney-zone-server.vercel.app/my_toy?email=${userEmail}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access-token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setMyToy(data)
        }
        else {
          Swal.fire(
            'Not authorized!',
            'Login first',
            'error'
          )
          navigate('login')
        }
      })
  }, [])
  // console.log(myToy)

  const deleteHandler = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://disney-zone-server.vercel.app/toys/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            console.log(data)
            const remainingItems = myToy.filter(ele => ele._id !== _id)
            setMyToy(remainingItems)
          })
      
      }
    })

  }

  const handleSelectChange = (e) => {
    const sortValue = e.target.value; 
    console.log(sortValue)
    fetch(`https://disney-zone-server.vercel.app/sort?type=${sortValue}&email=${userEmail}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access-token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setMyToy(data)
    })
  }

  return (
    <div className='lg:px-12 px-5 '>
   <div className='my-8  flex justify-between'>
       <h2 className='text-center text-3xl font-medium  mx-auto'>My Toys Collections </h2>
         <select onChange={handleSelectChange} className="select font-medium   input input-bordered">
          <option>Sort By</option>
          <option className='my-2'  value='ascending'>Price: low to hight</option>
          <option  value='descending'>Price: hight to low</option>
        </select>
      </div>


      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Seller Email</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              myToy.map((item, index) =>
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item?.seller_email}</td>
                  <td>{item?.name}</td>
                  <td>{item?.category}</td>
                  <td>${item?.price}</td>
                  <td>{item?.available_quantity}</td>
                  <td className='space-x-3'>

                    <Link to={`/update/${item._id}`}>
                      <label className="cursor-pointer text-primaryColor mr-3">Update</label>
                    </Link>
                    ||
                    <label onClick={() => deleteHandler(item._id)} className="cursor-pointer text-red-700 ">Delete</label>

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

export default My_Toys