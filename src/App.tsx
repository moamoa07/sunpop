import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import MarqueeDivider from './components/MarqueeDivider';
import Masthead from './components/Masthead';
import Product1 from './components/Product1';
import Product2 from './components/Product2';
import Product3 from './components/Product3';

function App() {
  return (
    <div
      style={{
        maxWidth: '1600px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Header />
      <Masthead />
      <Product1 />
      <Product2 />
      <Product3 />
      <MarqueeDivider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
