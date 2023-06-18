import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {

  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { Authcontext } from '../../Firebase/Authprovider/Authprovider';


const Navber = () => {
  const { User, logout } = useContext(Authcontext)
  console.log(User);
  const handellogout = () => {
    logout()
      .then()
      .catch(err => {
        console.log(err.message);
      })
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='bg-gray-100 px-4 py-5  md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        {/* Logo Section */}
        <Link className='inline-flex items-center'>
          <h1 className='text-4xl animate-text bg-gradient-to-r from-pink-400 via-indigo-600-400 to-blue-400 bg-clip-text text-transparent font-black'>Satkhira</h1>
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <img src={User?.photo} alt="" />
          {/* <p>{User?.photo}</p> */}
          {
            User?.email ? <li><button onClick={handellogout}>Logout</button></li> : <li>
              <NavLink
                to='/Login'
                className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
              >
                Login
              </NavLink>
            </li>
          }


          <li>
            <NavLink
              to='/blog'
              className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <h1 className='text-4xl animate-text bg-gradient-to-r from-pink-400 via-indigo-600-400 to-blue-400 bg-clip-text text-transparent font-black'>Satkhira</h1>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    {
                      User?.email ? <li><button onClick={handellogout}>Logout</button></li> : <li>
                        <NavLink
                          to='/Login'
                          className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                        >
                          Login
                        </NavLink>
                      </li>
                    }
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    // <div className="navbar bg-base-300">
    //     <div className="navbar-start">
    //         <div className="dropdown">
    //             <label tabIndex={0} className="btn btn-ghost btn-circle">
    //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
    //             </label>
    //             <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

    //                 <Link to={"/"}><li>Homepage</li></Link>    
    //                 <Link to={"/Login"}><li>Login</li></Link>    
    //                 <Link to={"/sign"}><li>Sign up</li></Link>    

    //             </ul>
    //         </div>
    //     </div>
    //     <div>
    //         <h1>home</h1>
    //     </div>
    //     <div className="navbar-center">
    //         <h1 className='text-6xl animate-text bg-gradient-to-r from-pink-400 via-indigo-600-400 to-blue-400 bg-clip-text text-transparent font-black'>Satkhira</h1>
    //     </div>
    //     <div className="navbar-end">
    //         <button className="btn btn-ghost btn-circle">
    //             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    //         </button>
    //         <button className="btn btn-ghost btn-circle">
    //             <div className="indicator">
    //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
    //                 <span className="badge badge-xs badge-primary indicator-item"></span>
    //             </div>
    //         </button>
    //     </div>
    // </div>
  );
};

export default Navber;