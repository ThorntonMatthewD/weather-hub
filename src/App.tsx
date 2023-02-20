import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './app/pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Weather Hub</h1>
      <div className="container mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
