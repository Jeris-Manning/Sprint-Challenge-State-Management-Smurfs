import React, { useState } from 'react';

const SmurfContext = React.createContext([{}, () => {}]);
const initialState = {
  name: '',
  age: '',
  height: '',
  village: []
};

const SmurfProvider = (props) => {
  const [state, setState] = useState(initialState);

  return (
    <SmurfContext.Provider value={[state, setState]}>
      {props.children}
    </SmurfContext.Provider>
  );
};

export { SmurfContext, SmurfProvider };
