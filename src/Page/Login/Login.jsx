import React, { useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Firebase/Authprovider/Authprovider';


const Login = () => {

    const navigate = useNavigate();

    const { handlergoogle, handelergithub } = useContext(Authcontext)


    const { loginuser } = useContext(Authcontext)
    const handelerlogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        loginuser(email, password)
        .then(result =>{
            navigate("/") 
        })
        .catch()
        
       
                 
    }
    return (
        <div>
            <div>

                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left text-rose-200">
                            <h1 className="text-5xl font-bold text-center">Login now!</h1>
                           
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                            <form onSubmit={handelerlogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                                    </label>
                                    <h1>You have no account.<Link className='text-blue-700' to={"/Registration"}>Registration</Link></h1>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>

                                </div>
                            </form>
                        </div>

                        <div>
                            <button onClick={handlergoogle} className='btn btn-outline btn-info flex items-center p-4 rounded'><span className='mr-2 '><FaGoogle /></span> Sign in with Google</button>
                            <br />
                            <button onClick={handelergithub} className='btn btn-outline btn-success'><span className='mr-2 '><FaGithub /></span> Sign in with Github</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Login;