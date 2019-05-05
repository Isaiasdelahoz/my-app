import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const names = ["Pedro", "Juan", "Isaías"];
  return (
	<div>
      <h1>Hola mundo</h1>
      <p>paragrahp</p>
      <ul>
      {names.map(name => 
      	<li>{name}</li>
      	)}
      </ul>
    </div>
  );
}

export default App;
