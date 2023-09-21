import logo from './logo.svg';
import './App.css';
// import Signup from './components/Signup';
// import Login from './components/Login';
import Apple from './components/Apple';
// import { Routes } from 'react-router-dom';
import AppRoutes from './components/routes/Routes';
import Signup from './components/Signup';

import Applehome from './components/Applehome'

function App() {
  return (
    <div className="App">
    {/* <Signup></Signup> */}
     {/* <Login/> */}
     <Apple/>
    {/* <AppRoutes></AppRoutes> */}
    {/* <Applehome></Applehome> */}
    </div>
  );
}

export default App;