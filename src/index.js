import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ThemeContext from './GlobalState/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeContext.Provider value={ThemeContext._currentValue}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='*' element={<div className='text-center mt-56 font-[600] text-[3rem] text-red-600'>Wrong Turn</div>} />
      </Routes>
    </ThemeContext.Provider>
  </BrowserRouter>
);