import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import ImageSearch from './components/ImageSearch';

function App() {
  return (
    <>
      <img id='logo' src={ logo } alt="" />
      <h1>Pixabay API Image Search</h1>
      <Routes>
        <Route path="/" element={<ImageSearch />} />
      </Routes>
    </>
  );
}

export default App;
