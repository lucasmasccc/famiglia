import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import dahyun from './dahyun.jpg';
import jihyo from './jihyo.jpg';

function App() {
  const[count, setCount] = useState<number>(0)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((info) => {
        const latitude = info.coords.latitude.toString();
        const longitude = info.coords.longitude.toString();
        console.log(info);
    });
}, []);

  return (
		<div className="main-container">
			<div className="center-box">
				<h1>Quando será o próximo feriado da sua Cidade?</h1>
        <img className="aids" src={jihyo}></img>
				<h3>Data do feriado</h3>
			</div>
		</div>
	);
}

export default App;
