import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';

import Main from './views/Main';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        {/* <Route path="/edit/:id" element={<Edit/>}/> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
