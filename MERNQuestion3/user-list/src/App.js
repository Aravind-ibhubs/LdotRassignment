import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Details from "./components/details/details";
import Add from "./components/add/add";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Details}/>
        <Route path="/add" Component={Add}/>
      </Routes>
    </BrowserRouter>
  )  
}

export default App;
