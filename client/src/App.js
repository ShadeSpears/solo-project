import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';

import Main from './views/Main';
import AddJob from './components/AddJob'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/add" element={<AddJob/>}/>
        {/* <Route path="/edit/:id" element={<Edit/>}/> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
