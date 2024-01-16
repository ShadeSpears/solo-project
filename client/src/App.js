import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';

import Main from './views/Main';
import AddJob from './components/AddJob'
import ViewJob from './components/ViewJob'
import EditJob from './components/EditJob';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<Main/>}/>
        <Route path="/addJob" element={<AddJob/>}/>
        <Route path="/view/:id" element={<ViewJob/>}/>
        <Route path="/edit/:id" element={<EditJob/>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
