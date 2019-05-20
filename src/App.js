import React from 'react';
import logo from './assets/imgs/logo.svg';
import Home from "./conponents/Home";
import Event from "./conponents/Event";
import Todolist from "./conponents/Todolist";
import Todolist02 from "./conponents/Todolist02";
import News from "./conponents/News";
import Axios from "./conponents/Axios";
import FetchJsonp from "./conponents/FetchJsonp";
// import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <FetchJsonp/>
    </div>
  );
}

export default App;
