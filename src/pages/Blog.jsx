import React from 'react'
import { useLoaderData } from 'react-router-dom'
import useTitle from '../hooks/useTitle'

function Blog() {
    //dynamic title
    useTitle('Blog')
  const blogData = useLoaderData()
  // console.log(blogData)

  return (
    <div className='my-8 mx-5 lg:mx-16'>
      <h2 className='text-center text-3xl font-medium mb-12'>Some FAQ!! </h2>
    <div>
    {
        blogData.map(blog =>
          <div key={blog._id} tabIndex="0" className='mb-6 collapse collapse-open collapse-arrow  bg-base-100 rounded-box'>
            <div className="collapse-title text-xl md:text-2xl font-medium bg-nuturalColor">
              {blog.ques}
            </div>
            <div className="collapse-content  pt-5">
              <div className='mt-2 text-lg md:text-xl'>
                {blog.ans}
              </div>
            </div>
          </div>
        )
      }
    </div>
    </div>
  )
}

export default Blog