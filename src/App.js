import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import FoodCard from './components/FoodCard';
import PopularFood from './components/PopularFood';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <FoodCard />
      <PopularFood />
      <Footer />
    </>
  );
}

export default App;
