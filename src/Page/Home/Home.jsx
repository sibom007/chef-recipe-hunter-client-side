import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import Card from '../Chef-card/Card';
import Newslider from '../section 2/newslider';
import Feedback from '../section 2/feedback/Feedback';





const Home = () => {
    return (
        <div>
            <div>
                <img className='opacity-70 md:w-full' src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 top-36 mt-2">

                    <h1 className='text-slate-200 hover:mt-4 duration-300 hover:opacity-100 opacity-75 md:text-6xl hover:text-white font-bold first-letter'>Welcome to the <span className='text-pink-300'>Satkhira</span><br /> Food House</h1>

                </div>
            </div>
            <div className='m-8 mb-10'>
                <div className="carousel w-full h-screen">
                    <div id="slide1" className="carousel-item relative w-full">
                        
                        <img src="https://media.istockphoto.com/id/868408746/photo/assorted-indian-dish.jpg?s=1024x1024&w=is&k=20&c=FJaE4fYBh5aOXfym_JUkUYKBA8s01-ogbGRi_mqrLa0=" className="w-full rounded" />
                       
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                            <a href="#slide4" className="btn btn-circle"><FaAngleDoubleLeft /></a>
                            <h1 className='text-slate-200 hover:mt-4 duration-300 hover:opacity-100 opacity-75 text-6xl hover:text-white font-bold first-letter'>Indian Food</h1>
                            <a href="#slide2" className="btn btn-circle"><FaAngleDoubleRight /></a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80" className="w-full rounded" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle"><FaAngleDoubleLeft /></a>
                            <h1 className='text-slate-200 hover:mt-4 duration-300 hover:opacity-100 opacity-75 text-6xl hover:text-white font-bold first-letter'>Pick your plate</h1>
                            <a href="#slide3" className="btn btn-circle"><FaAngleDoubleRight /></a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://images.unsplash.com/photo-1596522869169-95231d2b6864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1537&q=80" className="w-full rounded" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle"><FaAngleDoubleLeft /></a>
                            <h1 className='text-slate-200 hover:mt-4 duration-300 hover:opacity-100 opacity-75 text-6xl hover:text-white font-bold first-letter'>Top Food StarTups In India</h1>
                            <a href="#slide4" className="btn btn-circle"><FaAngleDoubleRight /></a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://images.unsplash.com/photo-1654863404432-cac67587e25d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full rounded" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle"><FaAngleDoubleLeft /></a>
                            <h1 className='text-slate-200 hover:mt-4 duration-300 hover:opacity-100 opacity-75 text-6xl hover:text-white font-bold first-letter'>Eat calcutta সরষে ইলিশ</h1>
                            <a href="#slide1" className="btn btn-circle"><FaAngleDoubleRight /></a>
                        </div>
                    </div>
                </div>

            </div>
            <Card></Card>
            <h1 className='text-center text-4xl mb-10 font-bold'>Different Food Items</h1>
            <Newslider></Newslider>
            <Feedback />


        </div>


    );
};

export default Home;