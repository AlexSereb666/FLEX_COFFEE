import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar'
import Auth from './authorization/Authorization'
import MainPage from '../components/pages/main/Main';
import ContactsPage from '../components/pages/contacts/Contacts';
import CoffeeHouses from '../components/pages/coffeeHouses/CoffeeHouses';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/login" element={<Auth/>} />
          <Route path="/contacts" element={<ContactsPage/>} />
          <Route path='/coffeehouses' element={<CoffeeHouses/>} />
          <Route path="/registration" element={<h1>Регистрация</h1>} />
        </Routes>

        <div className='app-shadow'></div>
      </div>
    </Router>
  );
}

export default App;
