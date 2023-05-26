import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2'
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

function Update() {

  //dynamic title
  useTitle('Update Toy')

    const { userName, userEmail } = useContext(AuthContext)
    const navigate = useNavigate()
    const loadedItem = useLoaderData()
    console.log(loadedItem)

    const submiHandler = (e) => {
        e.preventDefault()
        const form = e.target;
        const picture_link =loadedItem.picture_link ;
        const name =loadedItem.name ;
        const category =loadedItem.category ;
        const price = +(form.price.value);
        const rating = loadedItem.rating;
        const detail_description = form.detail_description.value;
        const available_quantity = form.available_quantity.value;
        const seller_name = loadedItem.seller_name;
        const seller_email =loadedItem.seller_email;
        // console.log(picture_link, name, category, price, rating, detail_description, available_quantity)
    
        const itemInfo = {
          seller_name,seller_email, picture_link, name, category, price, rating, detail_description, available_quantity
        }
    
        fetch(`https://disney-zone-server.vercel.app/toys/${loadedItem._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(itemInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.modifiedCount>0) {
                    Swal.fire(
                        'Good job!',
                        'Updated Successfully (^_^)',
                        'success'
                      )
                    navigate(-1)
                    // form.reset()
                }
            })
      }

  return (
    <form onSubmit={submiHandler} className="card lg:w-[60%] shadow-2xl bg-base-100 mx-5 lg:mx-auto my-16">
      <div className="card-body">
       
          <div className="form-control w-full">
            <input type="text" name='seller_name' defaultValue={`Update info of ${loadedItem.name}`} className="bg-primaryColor  text-white font-medium input input-bordered" readOnly />
          </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Detail description</span>
          </label>
          <input type="text" name='detail_description' defaultValue={loadedItem?.detail_description}  className="input input-bordered h-[90px]" />
        </div>

        <div className='flex flex-col lg:flex-row  justify-between gap-5'>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input type="number" name='available_quantity' defaultValue={loadedItem?.available_quantity}  className="input input-bordered" />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="number" name='price' defaultValue={loadedItem?.price}  className="input input-bordered" />
          </div>
        </div>

        <div className="form-control  mt-6">
          <button className="btn bg-primaryColor border-0">Update</button>
        </div>
      </div>
    </form>
  )
}

export default Update