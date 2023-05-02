import './App.css';
import { ResponsiveAppBar } from './components/navBar/NavBar'
import { HomePage } from './components/homePage/HomePage'

export const App = () =>  {
  return (
    <div>
      <ResponsiveAppBar/>
      <HomePage/>
    </div>
  );
}

export default App;
