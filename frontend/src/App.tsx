import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { sampleProducts } from './data/products';

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home products={sampleProducts} />} />
            <Route path="/product/:id" element={<ProductPage products={sampleProducts} />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
