import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<h1>Нажат логотип</h1>} />
          <Route path="/authorization" element={<h1>Авторизация</h1>} />
          <Route path="/registration" element={<h1>Регистрация</h1>} />
        </Routes>

        <div className='app-shadow'></div>
      </div>
    </Router>
  );
}

export default App;
