import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Recipedetela2 = ({ newrecipie }) => {
    console.log(newrecipie);
    const { id, name, picture, bio,recipi1,recipi2,recipi3 } = newrecipie;
    const [buttonclick,setbuttonclick]=useState(false)
    const handlerlove =()=>{
        setbuttonclick(true)
        toast("Bookmark done")
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className='rounded' src={picture} />
                        <div>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <p className='mt-5'>{bio}</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 ml-32 mt-32 mb-32'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                       
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl">{recipi1.name} <button onClick={handlerlove} disabled={buttonclick} className={`${buttonclick
                            ? "text-red-300":"text-red-700"
                            }`}><FaHeart ></FaHeart></button></h2>
                            <p><span className='font-bold'>ingredients</span>{recipi1.ingredients}</p>
                            <p><span className='font-bold'>cooking_method</span>: {recipi1.cooking_method}</p>
                            <div className="card-actions">
                               
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                       
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl">{recipi2.name} <button onClick={handlerlove} disabled={buttonclick} className={`${buttonclick
                            ? "text-red-300":"text-red-700"
                            }`}><FaHeart ></FaHeart></button></h2>
                            <p><span className='font-bold'>ingredients</span>{recipi2.ingredients}</p>
                            <p><span className='font-bold'>cooking_method</span>: {recipi2.cooking_method}</p>
                            <div className="card-actions">
                                
                               
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                       
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl">{recipi3.name} <button onClick={handlerlove} disabled={buttonclick} className={`${buttonclick
                            ? "text-red-300":"text-red-700"
                            }`}><FaHeart ></FaHeart></button></h2>
                            <p><span className='font-bold'>ingredients</span>{recipi3.ingredients}</p>
                            <p><span className='font-bold'>cooking_method</span>: {recipi3.cooking_method}</p>
                            <div className="card-actions">
                               
                            </div>
                        </div>
                    </div>
                   
                   
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Recipedetela2;