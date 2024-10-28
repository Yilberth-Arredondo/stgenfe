import { CartProvider } from './context/cartContext';
import Home from './pages/Home';
import Cart from './pages/Cart';
import News from './pages/News';
import Error404 from './pages/Errors/Error404';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
