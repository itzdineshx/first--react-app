import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductItem from './components/ProductItem';
import './App.css';

function App() {
  return (
    <>
      <h1>This is My First Project</h1>

      <BrowserRouter>
        {/* Navigation Links */}
        <nav>
          <ol>
            <li>
              <Link to="/home">Home Page</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/productItem">Product Item</Link>
            </li>
          </ol>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productItem" element={<ProductItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
