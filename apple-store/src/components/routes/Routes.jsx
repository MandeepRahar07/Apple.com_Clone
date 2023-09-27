import { Route, Routes } from 'react-router-dom';
import Login from '../Login';
import Signup from '../Signup';
import Apple from '../Apple';
import Phone14 from '../phone/Phone14';
import Phone144 from '../phone/Phone144';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Login></Login>} />
        <Route path= "/login" element = {<Signup></Signup>}></Route>
        <Route path= "/" element = {<Apple></Apple>}></Route>
        <Route path='/iphone14' element = {<Phone14></Phone14>}></Route>
        <Route path='/iphone144' element = {<Phone144></Phone144>}></Route>
        
      </Routes>
    </div>
  );
};



export default AppRoutes;