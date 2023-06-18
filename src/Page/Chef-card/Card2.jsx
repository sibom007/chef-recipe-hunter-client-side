import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Card2 = (props) => {
    const { id, picture, name, likes, yearsOfExperience, numRecipes } = props.chefdetel
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-10">
                <figure className="px-10 pt-10">
                    <LazyLoad>
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                    </LazyLoad>
                    
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-3xl">{name}</h2>
                    <p className='font-bold'>Years Of Experience :{yearsOfExperience}</p>
                    <div>
                        <p>Recipes :{numRecipes}</p>
                       
                            <p>{likes.platform} : {likes.likes}</p>
                            
                        
                    </div>
                    <div className="card-actions">
                    <Link to={`${id}`}><button className="btn btn-outline btn-info">View Recipes</button></Link>   
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Card2;