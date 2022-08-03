import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/index'
import Content from './components/content/index'
import Cardcontent from './components/cardContent/index'
import Input from './components/input/index'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar/>
     <Content/>
     <Cardcontent/>
     <Input/>     
    </div>
    </Router>

  );
}
export default App;
