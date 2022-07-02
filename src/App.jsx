import logo from './logo.svg';
import './App.css';
import React from 'react';


import { Routes, Route } from 'react-router-dom';

import ImageSearch from './components/ImageSearch';
import ImageDetails from './pages/ImageDetails';

function App() {
  return (
    <>
      <img id='logo' src={ logo } alt="" />
      <h1>Pixabay API Image Search</h1>
      <Routes>
        <Route path="/" element={<ImageSearch />} />
        <Route path="/image/:id" element={<ImageDetails />} />
      </Routes>
    </>
  );
}

export default React.memo(App);
