import React from "react";
import { Route, Routes } from 'react-router-dom';
import Auth from './components/authorization/Authorization';
import Regist from './components/registration/Registration';
import MainPage from './pages/main/Main';
import ContactsPage from './pages/contacts/Contacts';
import CoffeeHouses from './pages/coffeeHouses/CoffeeHouses';
import CoffeeHousesCard from './pages/coffeeHouseCard/CoffeeHouseCard';

const AppRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/login" element={<Auth/>} />
        <Route path="/contacts" element={<ContactsPage/>} />
        <Route path='/coffeehouses' element={<CoffeeHouses/>} />
        <Route path="/coffeehouse/:id" element={<CoffeeHousesCard/>} />
        <Route path="/registration" element={<Regist/>} />
      </Routes>
    )
}

export default AppRouter;