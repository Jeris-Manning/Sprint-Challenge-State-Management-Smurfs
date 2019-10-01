import React, { useContext } from 'react';
import axios from 'axios';
import { SmurfContext } from '../contexts/SmurfContext';

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
    <form onSubmit={handleSubmit}>
      <input
        name='name'
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
        onSubmit={handleSubmit}
      />
      <input
        name='age'
        value={state.age}
        onChange={(e) => setState({ ...state, age: e.target.value })}
        onSubmit={handleSubmit}
      />
      <input
        name='height'
        value={state.height}
        onChange={(e) => setState({ ...state, height: e.target.value })}
        onSubmit={handleSubmit}
      />

      <button type='submit'>Submit</button>
    </form>
  );
}

export default SmurfForm;
