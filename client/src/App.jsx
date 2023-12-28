import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './App.css'
import AppRouter from './AppRouter';
import { observer } from 'mobx-react-lite'
import { Context } from './index';
import { check } from './http/userAPI';
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner'

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <LoadingSpinner />;
  }

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
})

export default App;
