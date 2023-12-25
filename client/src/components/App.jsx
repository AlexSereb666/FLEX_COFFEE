import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import './App.css'
import AppRouter from '../AppRouter';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
          <AppRouter/>
        <div className='app-shadow'></div>
      </div>
    </Router>
  );
}

export default App;
