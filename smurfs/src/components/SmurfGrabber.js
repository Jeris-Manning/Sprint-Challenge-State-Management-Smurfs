import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { SmurfContext } from '../contexts/SmurfContext';

const SmurfGrabber = () => {

  let allSmurfs = [];
  // const [state, setState] = useContext(SmurfContext);

return (

  axios.get(`http://localhost:3333/smurfs`)
  .then((res) => {
     res.data.map((smurf)=>
    {
<h1>{smurf.name}</h1>
    }
     )})
)
  
}

export default SmurfGrabber

 