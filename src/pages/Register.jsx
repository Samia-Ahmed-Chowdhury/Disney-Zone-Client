import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import useTitle from '../hooks/useTitle';

function Register() {

        //dynamic title
        useTitle('Register')

    const navigate = useNavigate()

    const [showPass, setShowPass] = useState(false)
    const [passwordError, setPasswordError] = useState('')

    const { setUserName, setUserEmail,setPhotoUrl, registerWithEmail, updateUserProfile } = useContext(AuthContext)
    
    const passwordValidating = (e) => {
        const password = e.target.value;
        if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError("At least one uppercase character");
            return
        }
        else if (!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
            setPasswordError("At least one special character");
            return
        }
        else if (!/^(?=.*[0-9]).*$/.test(password)) {
            setPasswordError("At least one digit character");
            return
        }
        else if (!/^\S*$/.test(password)) {
            setPasswordError("No white space");
            return
        }
        else if (!/(?=.{6,})/.test(password)) {
            setPasswordError("Password must be at least 6 characters long")
            return
        }
        else {
            console.log('welcom')
            setPasswordError('');
            e.target.style.border = '1px solid #ced4da'
            return
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo_url = e.target.photo_url.value;

        if (passwordError) {
            e.target.password.focus();
            e.target.password.style.border = '2px solid red'
            return;
        }
        e.target.password.style.border = '1px solid #ced4da'

        registerWithEmail(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                updateUserProfile(name, photo_url)
                    .then(() => {
                        setUserName(user.displayName);
                        setUserEmail(user.email)
                        setPhotoUrl(user.photoURL)
                        navigate('/')
                    }).catch((error) => {
                        const errorMessage = error.message;
                        console.log(errorMessage)
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
  return (
    <form onSubmit={submitHandler} className=' rounded-lg text-center'>
    <h2 className='text-3xl font-semibold mb-3 text-center'>Please SignUp </h2>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" placeholder="Enter Your Name" className="bg-[#E8F0FE] input w-full  " required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text" name="photo_url" placeholder="Enter Your Photo URL" className="bg-[#E8F0FE] input w-full  " required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="Enter Your Email" className="bg-[#E8F0FE] input w-full  " required />
    </div>
    <div className="form-control relative">
      <label className="label">
        <span className="label-text">Password</span>
      </label>

      <input type={showPass ? 'text' : 'password'} name="password" onChange={passwordValidating} placeholder="Enter Your password" className="bg-[#E8F0FE]  input w-full " required />
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
  </form>
  )
}

export default Register