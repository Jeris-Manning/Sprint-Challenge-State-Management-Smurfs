import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SmurfGrabber = () => {
  const [smurf, setSmurf] = useState([]);

  useEffect(() => {
    const grabSmurfs = () => {
      axios.get(`http://localhost:3333/smurfs`).then((respo) => {
        setTimeout(setSmurf(respo.data), 5000);
      });
    };
    grabSmurfs();
  }, [smurf]);

  return (
    <div>
      {smurf.map((aSmurf) => (
        <SmurfProfile key={aSmurf.id} aSmurf={aSmurf} />
      ))}
    </div>
  );
};

function SmurfProfile({ aSmurf }) {
  const { name, age, height, id } = aSmurf;
  return (
    <>
      <div className='smurf-card'>
        <h2>{name}</h2>
        <h3>Age: {age}</h3>
        <h3>Height: {height}</h3>
      </div>
    </>
  );
}

export default SmurfGrabber;
