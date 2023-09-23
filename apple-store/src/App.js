import logo from './logo.svg';
import './App.css';
// import Signup from './components/Signup';
// import Login from './components/Login';
import Apple from './components/Apple';
// import { Routes } from 'react-router-dom';
import AppRoutes from './components/routes/Routes';
import Signup from './components/Signup';
import PhoneNavbar from './components/PhoneNavbar/PhoneNavbar';
import Phone14 from './components/Iphone/Phone14';
import Phone144 from './components/Iphone/Phone144';



function App() {
  return (
    <div className="App">
    {/* <Signup></Signup> */}
     {/* <Login/> */}
     {/* <Apple/> */}
    {/* <AppRoutes></AppRoutes> */}
   {/* <PhoneNavbar></PhoneNavbar> */}
{/* <Phone14></Phone14> */}
<Phone144></Phone144>

         
    </div>
  );
}

export default App;