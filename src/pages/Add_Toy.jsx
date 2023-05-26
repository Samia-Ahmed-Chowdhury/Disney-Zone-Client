import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

function Add_Toy() {

  //dynamic title
  useTitle('Add Toy')

  const { userName, userEmail } = useContext(AuthContext)
  const navigate=useNavigate()

  const submiHandler = (e) => {
    e.preventDefault()
    const form = e.target;
    const picture_link = form.picture_link.value;
    const name = form.name.value;
    const category = form.category.value;
    const rating = +(form.rating.value);
    const price = +(form.price.value);
    const detail_description = form.detail_description.value;
    const available_quantity = form.available_quantity.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    

    console.log(seller_name,seller_email,picture_link, name, category, price, rating, detail_description, available_quantity)

    const itemInfo = {
      seller_name,seller_email,picture_link, name, category, price, rating, detail_description, available_quantity
    }


    fetch('https://disney-zone-server.vercel.app/toys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(itemInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data?.insertedId) {
          Swal.fire(
            'Good job!',
            'Added Successfully (^_^)',
            'success'
          )
          form.reset()
          navigate('/my_toys')
        }
      })
  }

  return (
    <form onSubmit={submiHandler} className="card lg:w-[60%] mx-5 shadow-2xl bg-base-100 lg:mx-auto my-16">
          <h2 className='text-center text-3xl font-medium my-8'>Add New Toy </h2>
      <div className="card-body">
        <div className='flex flex-col lg:flex-row justify-between gap-5'>
          <div className="form-control w-full">
            <input type="text" name='seller_name' defaultValue={userName} className="bg-primaryColor  text-white font-medium input input-bordered" readOnly />
          </div>
          <div className="form-control w-full">
            <input type="text" name='seller_email' defaultValue={userEmail} className="bg-primaryColor  text-white font-medium input input-bordered" readOnly />
          </div>
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URl</span>
          </label>
          <input type="url" name='picture_link' placeholder="Enter Photo url" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter Toy Name" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Detail description</span>
          </label>
          <input type="text" name='detail_description' placeholder="Enter Detail description" className="input input-bordered h-[90px]" />
        </div>

        <div className='flex flex-col lg:flex-row justify-between gap-5'>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Sub-category</span>
            </label>
            <select name='category' className="select w-full max-w-xs input input-bordered">
              <option>Pick sub_category</option>
              <option value='Disney Princess'>Disney Princess</option>
              <option value='Donald Duck'>Donald Duck</option>
              <option value='Frozen Dolls'>Frozen Dolls</option>
              <option value='Animation Characters'>Animation Characters</option>
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input type="number" name='available_quantity' placeholder="Enter Available quantity" className="input input-bordered" />
          </div>

        </div>

        <div className='flex flex-col lg:flex-row justify-between gap-5'>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" name='price' placeholder="Enter Price" className="input input-bordered" />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input type="text" name='rating' placeholder="Enter Rating" className="input input-bordered" />
          </div>
        </div>



        <div className="form-control  mt-6">
          <button className="btn bg-primaryColor border-0">Add Toy</button>
        </div>
      </div>
    </form>
  )
}

export default Add_Toy