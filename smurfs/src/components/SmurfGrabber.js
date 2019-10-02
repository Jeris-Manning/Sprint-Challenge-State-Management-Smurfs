import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SmurfBox = styled.div`

  display: flex;
  justify-content: space-around;
  max-width: 800px;
  flex-wrap: wrap;
  margin: 30px 10px;
  background: rgb(255,255,255, .5);
  border-radius: 20px;
  border: solid white 5px;
  

`

const Smurf = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
  height: 150px;
  justify-content: flex-start;
  align-items: center;
  color: white;
  background-color: #3c62f1;
  margin: 15px;
  border-radius: 10px;
  border: solid white 5px;
  text-shadow: 2px 2px 2px black;
  h2 {
    background-color: #b31901;
    font-size: 2rem;
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
    padding: 5px 0;
    border-radius: 5px 5px 0 0;
    border-bottom: solid white 5px;
    

    
  }
  h3 {
    font-size: 1.3rem;
    margin-bottom:10px;
  }
`;

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
    <SmurfBox>
      {smurf.map((aSmurf) => (
        <SmurfProfile key={aSmurf.id} aSmurf={aSmurf} />
      ))}
    </SmurfBox>
  );
};

function SmurfProfile({ aSmurf }) {
  const { name, age, height, id } = aSmurf;
  return (
    
      <Smurf>
        <h2>{name}</h2>
        <h3>Age: {age}</h3>
        <h3>Height: {height}</h3>
      </Smurf>
    
  );
}

export default SmurfGrabber;
