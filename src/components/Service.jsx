import React from 'react'
import '../App.css'

function Service() {
    return (
        <div className='flex flex-col lg:flex-row gap-5 lg:px-12 px-5 lg:my-48'>
            <div className='mb-24 lg:mb-0 lg:w-[60%] text-center text-[30px] font-semibold'>
                <h3 className='lg:w-[90%] mx-auto text-secondaryColor'>Provide Best Service With Our Tools</h3>
                <button className="myButtonHover btn rounded-none bg-primaryColor border-0 hover:bg-hoverBtnColor">Discover More</button>
            </div>
            <div className='grid lg:grid-cols-3 gap-8 flex-grow-1 '>
                <div   
                  data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="3500" className=" h-96 downTop py-8 card rounded-none  bg-base-100 shadow-xl">
                    <figure><img className=' w-[40%]' src="https://img.freepik.com/free-vector/cute-girl-pink-bow-blue-dress_1450-106.jpg?size=626&ext=jpg&ga=GA1.2.1701026079.1680284948&semt=sph" alt="car!" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto text-center">Unique Collections</h2>
                        <p>Better manage your child happy &amp; reduce costs.Seamlessly link busyness &amp; payroll.Ensure dolls &amp; make child stay postive</p>
                    </div>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="3500"

                    className="mb-24 lg:mb-0 py-8 card rounded-none h-96 e  bg-base-100 shadow-xl">
                    <figure><img className='mt-10 w-[40%]' src="data:image/jpeg;base64,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" alt="car!" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto text-center">Editing Option</h2>
                        <p>Better manage your child happy &amp; reduce costs.Seamlessly link busyness &amp; payroll.Ensure dolls &amp; make child stay postive</p>
                    </div>
                </div>
                <div

                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="3500"
                    className=" downTop py-8 card rounded-none h-96 nded-none  bg-base-100 shadow-xl">
                    <figure><img className=' w-[40%]' src="https://img.freepik.com/free-vector/magic-fairy_1450-101.jpg?size=626&ext=jpg&ga=GA1.1.1701026079.1680284948&semt=sph" alt="car!" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto text-center">Delete Option</h2>
                        <p>Better manage your child happy &amp; reduce costs.Seamlessly link busyness &amp; payroll.Ensure dolls &amp; make child stay postive</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service