import './App.css';
import BottomNavbar from './components/BottomNavbar';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <BottomNavbar/>
    </>
  );
}

export default App;
