import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './ProductListing';
import CustomHooks from './CustomHooks/CustomHooks'
import ProductDetail from './ProductDetail';



function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/customHooks" element={<CustomHooks />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
