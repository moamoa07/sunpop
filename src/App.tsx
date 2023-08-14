import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import Masthead from './components/Masthead';
import Product1 from './components/Product1';
import Product2 from './components/Product2';
import Product3 from './components/Product3';

function App() {
  return (
    <div>
      <Header />
      <Masthead />
      <Product1 />
      <Product2 />
      <Product3 />
      <Contact />
    </div>
  );
}

export default App;
