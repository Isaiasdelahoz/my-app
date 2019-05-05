import React from 'react';
import logo from './logo.svg';
import Welcome from './Welcome.js';
import './App.css';



function App() {
	const names = ["Pedro", "Juan", "German"];
  return (
  	<div>
  		{names.map(name =>
  			<Welcome name={name} />
  		)}
  	</div>
  );
}

export default App;
