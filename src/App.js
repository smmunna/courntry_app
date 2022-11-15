import React from 'react';
import Country from './Country/Country';
import './App.css';
function App() {

  return (
    < div className="App">
      <h2>Country App</h2>
      <hr />
      <div className="row">
        <Country />
      </div>
    </div>
  );
}

export default App;
