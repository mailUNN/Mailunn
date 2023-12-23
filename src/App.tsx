import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Display, HeaderOne } from './shared/text';
import { Homepage } from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
