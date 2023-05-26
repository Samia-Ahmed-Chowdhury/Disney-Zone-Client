import React, { useContext, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '/DZ.png'
import { AuthContext } from '../provider/AuthProvider'


function Header() {
  const [showSide, setShowSide] = useState(false)

  const { userName, photoUrl, logOut } = useContext(AuthContext)

  const location = useLocation();
  const locatedPath = location.pathname
  // console.log(location.pathname)

  return (
    <div className="navbar bg-primaryColor justify-between lg:px-12 px-5 py-3">
      <div className="navbar-start w-auto ">
        <div className="dropdown">
          <label tabIndex={0} onClick={() => setShowSide(!showSide)} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

          {
            showSide &&
            <ul tabIndex={0} className="text-black py-5 menu menu-compact dropdown-content  shadow glass  w-[calc(100vw-40px)] ">
              <li className='font-bold text-lg'><NavLink to='/'>Home</NavLink></li>
              <li className='font-bold text-lg'><NavLink to='all_toys'> All Toys</NavLink></li>
              {userName &&
                <>
                  <li className='font-bold text-lg'><NavLink to='my_toys'>My Toys</NavLink></li>
                  <li className='font-bold text-lg'><NavLink to='add_toy'>Add Toy</NavLink></li>
                </>
              }
              <li className='font-bold text-lg'><NavLink to='blog'>Blogs</NavLink></li>
            </ul>
          }

        </div>
        <div>
          <Link className="flex items-center text-white font-bold text-xl">
            <img className='w-20  mr-2' src={logo} alt="logo" />
            <span className='hidden lg:inline-block'> Disney Zone</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li className='font-normal text-lg'><NavLink to='/'>Home</NavLink></li>
          <li className='font-normal text-lg'><NavLink to='all_toys'> All Toys</NavLink></li>
          {
            userName &&
            <>
              <li className='font-normal text-lg'><NavLink to='my_toys'>My Toys</NavLink></li>
              <li className='font-normal text-lg'><NavLink to='add_toy'>Add Toy</NavLink></li>
            </>
          }

          <li className='font-normal text-lg'><NavLink to='blog'>Blogs</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end w-auto gap-2">
        {
          userName &&
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-16  rounded-full">
              <img title={userName} src={photoUrl} />
            </div>
          </label>
        }

        {
          userName ?
            <Link onClick={logOut} className="btn bg-secondaryColor hover:bg-btnColor border-0 py-0 px-2 md:px-3 ">LogOut</Link>
            : locatedPath === '/signLayout' ?
              ""
              : <Link to='/signLayout' className="btn bg-secondaryColor hover:bg-btnColor border-0 py-0 px-2 md:px-3 ">Login</Link>


        }
      </div>
    </div>
  )
}

export default Header