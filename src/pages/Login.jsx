import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRef } from 'react';
import '../App.css'
import { AuthContext } from '../provider/AuthProvider';
import useTitle from '../hooks/useTitle';

function Login() {
      //dynamic title
      useTitle('Login')
      
  const navigate = useNavigate()
  const emailRef = useRef();
  const location = useLocation();
  console.log('logonn ', location)
  const from = location.state?.from?.pathname || '/';

  const [showPass, setShowPass] = useState(false)
  const [passwordError, setPasswordError] = useState('')

  const { setUserName,setUserEmail, setPhotoUrl, googleHandler, logInUser ,updateUserProfile,updateUserPassWord} = useContext(AuthContext)

  
  const googleBtnClicked = () => {
    googleHandler()
      .then((result) => {
        // The signed-in user info.
        const user = result.user.displayName;
        setPhotoUrl(result.user?.photoURL)
        setUserEmail(result.user?.email)
        setUserName(user)
        navigate(from);

      }).catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }

  const resetPass = (e) => {
    const email = emailRef.current.value;
    console.log(email)
    updateUserPassWord(email)
      .then(() => {
        console.log(`Password reset email sent!`)

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setPasswordError('')
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)

    logInUser(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        updateUserProfile(user.displayName)
          .then(() => {
            setUserName(user.displayName);
            setUserEmail(user.email)
            setPhotoUrl(user.photoURL)
            navigate(from)
          }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });
      })
      .catch((error) => {
        setPasswordError('')
        const errorMessage = error.message;
        console.log(errorMessage)
        setPasswordError(errorMessage)
      });

  }

  return (
    <>
      <form onSubmit={submitHandler} className=' rounded-lg text-center'>
        <h2 className='text-3xl font-semibold mb-3 text-center'>Please Login </h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" ref={emailRef} placeholder="Enter Your Email" className="bg-[#E8F0FE] input w-full  " required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input type={showPass ? 'text' : 'password'} name="password" placeholder="Enter Your password" className="bg-[#E8F0FE]  input w-full " required />
          {
            showPass ?
              <FaEye onClick={() => setShowPass(!showPass)} className="absolute  top-[60%] right-1/4" />
              : <FaEyeSlash onClick={() => setShowPass(!showPass)} className="absolute top-[60%] right-1/4" />
          }
          {
            passwordError &&
            <p style={{ color: 'red' }} className="error">{passwordError}</p>
          }
        </div>
        <div className="form-control  my-5">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
        <button onClick={resetPass} className='mb-8 text-sm font-medium text-center text-red-600'>Forget Password??</button>
      </form>
      <hr className='hr_design' />

      <div className='my-8  mx-auto'>
        <button onClick={googleBtnClicked} className='btn btn-outline btn-success hover:bg-success'><FaGoogle className='text-lg me-1' />Login With Google</button>
      </div>
    </>
  )
}

export default Login