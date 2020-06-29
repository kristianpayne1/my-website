import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Welcome from "./Welcome.js";
import Home from "./Home.js";
import { HashRouter, Route } from "react-router-dom";


function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Route excat path="/" component={Home} />
      </div>
    </HashRouter>
  );
}

export default App;
