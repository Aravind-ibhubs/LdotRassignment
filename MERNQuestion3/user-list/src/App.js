import React,{lazy} from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import add from "./components/add";
import './App.css';

const Details = lazy(() => import("./components/details"));
const Add = lazy(() => import("./components/add"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={<Details />}/>
        <Route path="/add" Component={<Add />}/>
      </Routes>
    </BrowserRouter>
  )  
}

export default App;
