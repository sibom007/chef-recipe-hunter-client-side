import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Firebase/Authprovider/Authprovider';





const Registration = () => {
    const { regesteruser } = useContext(Authcontext)
    const navigate =useNavigate();

    const [newerror, setnewerror] = useState("")

    const handlerregester = (event) => {
        event.preventDefault();
        setnewerror('')
       
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photo = event.target.photo.value;


        if (!/(?=.*?[A-Z])/.test(password)) {
            setnewerror('Please add at least one Uppercase')
            return;
        }
       else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setnewerror('At least one special character')
            return;
         }
         else if (password.length < 6) {
            setnewerror('At least give 6 character')
            return
         }
       
        if ((name,email, password)) {
            regesteruser(email, password)
                .then((result) => { 
                    console.log(result.user);
                    navigate("/")
                })
                .catch((err) => {
                    setnewerror(err.message)
                })
        }

    }


    return (
        <div>
            <div>

                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left text-rose-200 hover:text-rose-400 duration-300">
                            <h1 className="text-6xl font-bold text-center mb-7">Regester please!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                            <form onSubmit={handlerregester} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                                    </label>
                                    <h1 className='text-red-700 font-bold'>{newerror}</h1>
                                    <h1>You have no account.<Link className='text-blue-700' to={"/Login"}>Login</Link></h1>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Registration;