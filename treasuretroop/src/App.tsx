import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home'

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Navigation/>

      <main>
        <Routes>
          <Route path='/' Component={Home}/>
        </Routes>
      </main>

      <Footer/>
    </div>
    </Router>
  );
}

export default App;
