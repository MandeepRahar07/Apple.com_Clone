import { Route, Routes } from 'react-router-dom';
import Login from '../Login';
import Signup from '../Signup';
import Apple from '../Apple';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Login></Login>} />
        <Route path= "/login" element = {<Signup></Signup>}></Route>
        <Route path= "/" element = {<Apple></Apple>}></Route>
      </Routes>
    </div>
  );
};



export default AppRoutes;