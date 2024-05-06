import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import ExploreMenu from './Components/ExploreMenu/ExploreMenu';
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/place-order' element={<PlaceOrder/>}></Route>
        <Route path='/explore-menu' element={<ExploreMenu/>}></Route>
      </Routes>
    </div>
  )
}

export default App
