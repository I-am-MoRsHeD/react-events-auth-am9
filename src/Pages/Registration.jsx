// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
    const { createUser, googlePopup } = useContext(AuthContext);
    const [succes, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const first = form.get('first');
        const last = form.get('last');
        // console.log(email, password, first, last)

        setSuccess('')
        setError('')

        if (password.length < 6) {
            setError('must be 6 character or above')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError("password must have a uppercase")
            return;
        }
        else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            setError('password needs a special character')
            return;
        }

        // user create
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('User set successfully')

                // updating profile
                updateProfile(result.user, {
                    displayName: first + last,
                    photoURL: "https://i.ibb.co/NsvjBvg/profile.jpg"
                })
                    .then(() => {
                        setSuccess('profile updated')
                    })
                    .catch(error => {
                        console.log(error)
                    })

            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogle = () => {
        googlePopup()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-1/2 mx-auto my-10'>
                <div className='border-2 rounded-md border-teal-500'>
                    <h2 className="text-4xl font-bold pl-10 mt-10">Create an account</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control mb-6 border-b-2">
                            <input type="text" name="first" placeholder="First Name" className="input" />
                        </div>
                        <div className="form-control mb-6 border-b-2">
                            <input type="text" name="last" placeholder="Last Name" className="input" />
                        </div>
                        <div className="form-control mb-6 border-b-2">
                            <input type="email" name="email" placeholder="Email" className="input" required />
                        </div>
                        <div className="form-control border-b-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input" required />
                            <span className='absolute mt-4 md:ml-64 lg:ml-[430px]' onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> :
                                        <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <div>
                            {
                                succes ? <p className='text-green-600'>{succes}</p> :
                                    ''
                            }
                            {
                                error ? <p className='text-red-600'>{error}</p> :
                                    ""
                            }
                        </div>
                        <div className="form-control">
                            <button className="btn btn-accent">Create</button>
                        </div>
                        <div className='mt-2 font-semibold'>
                            <p>Already have an account? <Link className='font-semibold text-teal-500 underline' to='/login'>Login</Link></p>
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

export default Registration;