import logo from './logo.svg';
import './App.css';
// import Signup from './components/Signup';
// import Login from './components/Login';
import Apple from './components/Apple';
// import { Routes } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import Signup from './components/Signup';
import PhoneNavbar from './components/Navbar/PhoneNavbar';
import Phone14 from './components/phone/Phone14';
import Phone144 from './components/phone/Phone144';
import MainNavbar from './components/Navbar/MainNavbar'
import Cart from './components/CartPage/Cart';
import Cartpage from './components/CartPage/Cart';
import Address from './components/Address/Address';



function App() {
  return (
    <div className="App">
   <MainNavbar></MainNavbar>
   <AppRoutes></AppRoutes>
    {/* <Signup></Signup> */}
     {/* <Login/> */}
     {/* <Apple/> */}
    {/* <AppRoutes></AppRoutes> */}
   {/* <PhoneNavbar></PhoneNavbar> */}
{/* <Phone14></Phone14> */}
{/* <Phone144></Phone144> */}
{/* <MainNavbar></MainNavbar>
<Address></Address> 
{/* <Cartpage></Cartpage>  */}
       {/* <Address></Address>    */}
    </div>
  );
}

export default App;