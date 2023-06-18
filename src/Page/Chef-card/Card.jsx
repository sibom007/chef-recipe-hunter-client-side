import React, { useEffect, useState } from 'react';
import Card2 from './Card2';

const Card = () => {


    const [chefdetels, setchefdetels] = useState([]);

    useEffect(() => {
        fetch("https://server-for-assiment-10-sibom007.vercel.app/chef")
            .then(res => res.json())
            .then(data => setchefdetels(data))
    }, [])

    return (
        <div>
            <div className='text-center text-5xl font-bold'>
                <h1>Indian Top Six Chef</h1>
            </div>
            <div className='lg:grid lg:grid-cols-3 items-center lg:ml-36 lg:mt-20'>
                {
                    chefdetels.map(chefdetel => <Card2 key={chefdetel.id} chefdetel={chefdetel}></Card2>)
                }
            </div>

        </div>
    );
};

export default Card;