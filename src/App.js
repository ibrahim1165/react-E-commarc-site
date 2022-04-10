import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componets/About/About';
import Header from './Componets/Header/Header';
import Inventory from './Componets/Inventory/Inventory';
import Login from './Componets/Login/Login';
import Order from './Componets/Orders/Order';
import RequreAuth from './Componets/RequreAuth/RequreAuth';
import Shop from './Componets/Shop/Shop';
import SingUp from './Componets/SingUp/SingUp';


function App() {
  return (
    <div>
      <Header></Header>
<Routes>  
<Route path="/" element={<Shop></Shop>}></Route>
<Route path="/shop" element={<Shop></Shop>}></Route>
<Route path="/orders" element={<Order></Order>}></Route>
<Route path="/about" element={<About></About>}></Route>
<Route path="/inventory" element={
  <RequreAuth>
    <Inventory></Inventory>
  </RequreAuth>
}></Route>
<Route path="/login" element={<Login></Login>} />
<Route path="/singup" element={<SingUp></SingUp>} />
</Routes>
    </div>
  );
}

export default App;
