import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../Firebase/Authprovider/Authprovider';

const Privatroutes = ({ children }) => {


    const { User,loading } = useContext(Authcontext)
    const location =useLocation();

    if (loading) {
        // return <h1 className='text-5xl'>Loading...</h1>
        return <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":90}}>99%</div>
    }

    if (User) {
        return children;
    }

    return <Navigate state={{from:location}} to={"/Login"} replace></Navigate>
};

export default Privatroutes;