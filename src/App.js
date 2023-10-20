import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import FoodCard from './components/FoodCard';
import PopularFood from './components/PopularFood';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ScrollToTop from "./components/ScrollToTop";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Explore from './components/Explore';
import Login from './components/Login';
import Signup from './components/Signup';
import Blog from './components/Blog';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<><Main /><FoodCard /><PopularFood /></>} />
          <Route exact path='/explore' element={<><Explore /></>} />
          <Route exact path='/blog' element={<><Blog /></>} />
          <Route exact path='/login' element={<><Login /></>} />
          <Route exact path='/signup' element={<><Signup /></>} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
