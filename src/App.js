import './App.css';
import { useRef, useEffect } from 'react'
import { ResponsiveAppBar } from './components/navBar/NavBar'
import { HomePage } from './components/homePage/HomePage'
import { ProductContainer } from './components/productsContainer/ProductsContainer'
import { Footer } from './components/footer/Footer'
import { Nosotros } from './components/nosotros/Nosotros'

export const App = () =>  {

  const homePageRef = useRef(null);
  const productContainerRef = useRef(null);
  const nosotrosRef = useRef(null);
  const footerRef = useRef(null)

  useEffect(() => {
    console.log('Refs', homePageRef.current, productContainerRef.current, nosotrosRef.current, footerRef.current);
  }, []);

  const handleScrollTo = (id) => {
    let ref;
    switch (id) {
      case 'HomePage':
        ref = homePageRef;
        break;
      case 'Productos':
        ref = productContainerRef;
        break;
      case 'Nosotros':
        ref = nosotrosRef;
        break;
      case 'Contacto':
        ref = footerRef;
        break;
      default:
        break;
    }
    if (ref && ref.current) {
      console.log(ref)
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <ResponsiveAppBar handleScrollTo={handleScrollTo}/>
      <HomePage ref={homePageRef}/>
      <ProductContainer ref={productContainerRef}/>
      <Nosotros ref={nosotrosRef}/>
      <Footer ref={footerRef}/>
    </div>
  );
}

export default App;
