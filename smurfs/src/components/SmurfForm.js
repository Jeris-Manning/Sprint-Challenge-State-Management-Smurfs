import React, { useContext } from 'react';
import axios from 'axios';
import { SmurfContext } from '../contexts/SmurfContext';
import styled from 'styled-components';

const FancyForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  width: 25vw;
  max-width: 300px;
  height: 300px;
  justify-content: flex-start;
  margin: 50px 15px;
  background-color: #3c62f1;
  border-radius: 15px;
  border: solid white 5px;
  text-shadow: 2px 2px 2px black;

  h2 {
    background-color: #b31901;
    font-size: 1.6rem;
    width: 100%;
    text-align: center;
    margin-bottom: 5px;
    padding: 9px 0;
    border-radius: 10px 10px 0 0;
    border-bottom: solid white 5px;
    color: white;
  }
  label {
    font-size: 1.2rem;
    color: white;
    align-self: flex-start;
    // margin-left: 21%;
    margin: 10px 0 5px 21%;
  }
  input {
    max-width: 90%;
    background: #b31901;
    color: white;
    height: 50px;
  }
  button {
    margin: 15px 0;
    background: #b31901;
    color: white;
    text-shadow: 1px 1px 1px black;
    width: 90px;
    height: 30px;
    font-size: 1.2rem;

  }
`;

function SmurfForm() {
  const [state, setState] = useContext(SmurfContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state);
    axios({
      method: 'post',
      url: 'http://localhost:3333/smurfs',
      data: state
    });
    setState({ name: '', age: '', height: '' });
  };

  return (
    <FancyForm onSubmit={handleSubmit}>
      <h2>ADD A SMURF!</h2>
      <label>Name:</label>
      <input
        name='name'
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
        onSubmit={handleSubmit}
      />

      <label>Age:</label>
      <input
        name='age'
        value={state.age}
        onChange={(e) => setState({ ...state, age: e.target.value })}
        onSubmit={handleSubmit}
      />

      <label>Height:</label>
      <input
        name='height'
        value={state.height}
        onChange={(e) => setState({ ...state, height: e.target.value })}
        onSubmit={handleSubmit}
      />

      <button type='submit'>Submit</button>
    </FancyForm>
  );
}

export default SmurfForm;
