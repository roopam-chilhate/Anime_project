import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Anime from './components/Anime';
import Navbar from './components/Navbar';
import Home from './components/Home';
import{BrowserRouter,Routes,Route, Router} from 'react-router-dom'

function App() {
  const [searchvalue,setSearchvalue]=useState(null);
  const Search=(value)=>{
    setSearchvalue(value)
  }
  const searched=(item)=>{
    if(item==="searched"){
      setSearchvalue(null)
    }}
  return (
    <div>
      
      <BrowserRouter>
      <Navbar Search={Search} searched={searched} />
      
   
    <Routes>
      
    <Route exact path="/" element={<Home />} />
    <Route exact path="/anime" element={<Anime searchvalue={searchvalue} searched={searched} />} />


    </Routes>
    
    
    </BrowserRouter>
    </div>
   
  );
}

export default App;
