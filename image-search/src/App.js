import './App.css';
import Navbar from './component/navbar';
import ImageSearch from './component/imageSearch';
import { InputContex } from './context/inputContex';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [photos,setPhotos] =useState([]);
  return (
  <BrowserRouter>
  
    <div className="App">
      <InputContex.Provider value={{setPhotos}}>
      <Navbar />
      <Routes>
      <Route path='/' element={<ImageSearch photos={photos} />}/>
      </Routes>
      </InputContex.Provider>

    </div> 
    
    </BrowserRouter>
  )
 
}

export default App;
