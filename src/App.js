import './App.css';
import { ResponsiveAppBar } from './components/navBar/NavBar'
import { HomePage } from './components/homePage/HomePage'
import { ProductContainer } from './components/productsContainer/ProductsContainer'
import { Footer } from './components/footer/Footer'

export const App = () =>  {
  return (
    <div>
      <ResponsiveAppBar/>
      <HomePage/>
      <ProductContainer/>
      <Footer/>
    </div>
  );
}

export default App;
