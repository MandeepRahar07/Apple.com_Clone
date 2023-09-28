import { Route, Routes } from 'react-router-dom';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Apple from '../components/Apple';
import Phone14 from '../components/phone/Phone14';
import Phone15 from '../components/phone/Phone15';
import Phone15PreOrder from '../components/phone/Phone15PreOrder';
import Address from '../components/Address/Address';
import Cartpage from '../components/CartPage/Cart';
import Phone10 from '../components/phone/Phone10';
import Phone11 from '../components/phone/Phone11';
import Phone13 from '../components/phone/Phone13';
import PhoneSe from '../components/phone/PhoneSe';
import Airpods from '../components/Airpods';
import Watch from '../components/Watch';
import Payment from '../components/Payment';
import Cartpage from '../CartPage/Cart';
import PrivatRoute from '../PrivateRouting';



const AppRoutes = () => {
  return (
    <div>
      <Routes>
     
        <Route path="/signup" element={<Signup />} />
        <Route path= "/login" element = {<Login/>}></Route>
        <Route path= "/" element = {<Apple/>}></Route>
        <Route path= "/iphone14" element = {<Phone14/>}></Route>
        <Route path= "/iphone15" element = {<Phone15/>}></Route>
        <Route path= "/iphone15preorder" element = {<Phone15PreOrder/>}></Route>

    

    <Route path ="/address" element={<PrivatRoute><Address/></PrivatRoute> }></Route>


        <Route path= "/cart" element = {<Cartpage/>}></Route>
        <Route path= "/iphone10" element = {<Phone10/>}></Route>
        <Route path= "/iphone11" element = {<Phone11/>}></Route>
        <Route path= "/iphone13" element = {<Phone13/>}></Route>
        <Route path= "/iphonese" element = {<PhoneSe/>}></Route>
        <Route path= "/airpods" element = {<Airpods/>}></Route>
        <Route path= "/watch" element = {<Watch/>}></Route>
        <Route path= "/payment" element = {<Payment/>}></Route>
        
      </Routes>
    </div>
  );
};

export default AppRoutes;