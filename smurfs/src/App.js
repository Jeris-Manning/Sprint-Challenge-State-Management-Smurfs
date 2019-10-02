import React from 'react';
import SmurfForm from './components/SmurfForm';
import SmurfGrabber from './components/SmurfGrabber';
import { SmurfProvider } from './contexts/SmurfContext';

function App() {
  return (
    <SmurfProvider>
      <div className='App'>
        <SmurfForm />
        <SmurfGrabber />
      </div>
    </SmurfProvider>
  );
}

export default App;
