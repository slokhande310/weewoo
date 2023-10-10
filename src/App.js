import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import FoodCard from './components/FoodCard';
import PopularFood from './components/PopularFood';
import Footer from './components/Footer';
import Cart from './components/Cart';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<><Main /><FoodCard /><PopularFood /></>} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Navbar />
      <Main />
      <FoodCard />
      <PopularFood />
      <Cart />
      <Footer /> */}
    </>
  );
}

export default App;
