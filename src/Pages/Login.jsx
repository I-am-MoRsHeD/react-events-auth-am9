// eslint-disable-next-line no-unused-vars
import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const {signUser, googlePopup} = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        const emailValue = emailRef.current.value;
        // console.log(email, emailValue)

        setSuccess('')
        setError('')
        setShowPassword('')

        if(!emailValue){
            setError("Email doesn't match")
            return;
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            setError("Email doesn't match")
            return;
        }
        else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
            setError("Password doesn't match")
        }

        // sign in user
        signUser(email, password)
        .then(result =>{
            console.log(result.user)
            Swal.fire(
                'Successfully logged in!',
                'success'
              )
            navigate(location?.state ? location.state : '/')

        })
        .catch(error =>{
            console.log(error)
        })
    }

    const handleGoogle = () => {
        googlePopup()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-1/2 mx-auto my-10'>
                <div className='border-2 rounded-md border-teal-500'>
                    <h2 className="text-4xl font-bold pl-10 mt-10">Login</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control mb-6 border-b-2">
                            <input
                                type="email"
                                ref={emailRef}
                                name="email"
                                placeholder="Email" className="input"
                                required />
                        </div>
                        <div className="form-control border-b-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input" required />
                            <span className='absolute mt-4 md:ml-80 lg:ml-[480px]' onClick={()=>setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> :
                                        <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <div>
                                <input type="checkbox" name="checkbox" id="checkbox" />
                                <label htmlFor="checkbox" className='font-bold ml-1'>Remember Me</label>
                            </div>
                        </div>
                        <div>
                            {
                                success ? <p className='text-green-500'>{success}</p> : ''
                            }
                            {
                                error ? <p className='text-red-500'>{error}</p> : ''
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Login</button>
                        </div>
                        <div className='mt-2'>
                            <p>Do not have an account? <Link className='font-semibold text-teal-500 underline' to='/register'>Create an account</Link></p>
                        </div>
                    </form>
                </div>
                {/* PopUp componenets */}
                <div className='w-3/4 mt-8 mx-auto'>
                    <p className='text-center font-bold mb-5 text-2xl'>Or</p>
                    <div className='flex justify-start mt-2 rounded-full py-1 px-2 border-2 bg-slate-600 text-white border-red-600'>
                        <button onClick={handleGoogle} className='font-semibold p-2 flex items-center'>
                         <span className='md:mr-9 lg:mr-24'><FaGoogle></FaGoogle></span> Continue With Google
                         </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;