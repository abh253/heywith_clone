import './App.css';
import BottomNavbar from './components/BottomNavbar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
function App() {
  return (
    <>
      <Router>

      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      <BottomNavbar />
      </Router>

    </>
  );
}

export default App;
