import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipedetela2 from './Recipedetela2';

const Recipedetela = () => {

  const [newrecipies, setnewrecipies] = useState([])

  const { id } = useParams();
  const recipes = useLoaderData();
  useEffect(() => {
    fetch(`https://server-for-assiment-10-sibom007.vercel.app/chef/${id}`)
      .then(res => res.json())
      .then(data => setnewrecipies(data))
  }, [])


  return (
    <div>
       {
        newrecipies.map(newrecipie => <Recipedetela2 key={newrecipie.id} newrecipie={newrecipie}></Recipedetela2>)
       }
    </div>
  );
};

export default Recipedetela;