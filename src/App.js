
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import HomePage from './containers/HomePage';
import Navbar from './components/Navbar';

import FormNewProductPage from './containers/FormNewProductPage'
import OrdersPage from './containers/OrdersPage'
import FormOrdersPage from './containers/FormOrdersPage'
import StockPage from './containers/StockPage'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/newproduct' element={<FormNewProductPage />} />
          <Route path='/orders' element={<OrdersPage />} />
          <Route path='/neworder' element={<FormOrdersPage />} />
          <Route path='/stock' element={<StockPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
