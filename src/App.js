import './App.css';
import Navbar from './components/Home/Navbar';
import Product from './components/Product/Product';
import Categorise from './components/Home/Categorise';
import Home from './components/Home/Home';
import Footer from './components/Home/Footer';
import Login from './components/Auth/Login';
import ForgotPass from './components/Auth/ForgotPass';
import Register from './components/Auth/Register';
import {
  Routes,
  Route
} from "react-router-dom";
import Alert from './Context/alert/Alert';
import ProductDetails from './components/Product/ProductDetails';
import CheckOut from './components/Product/CheckOut';


function App() {

  return (
    <div className="App" >
      <Alert />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Product/:id" element={<ProductPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/ForgotPassword" element={<ForgotPass />} />
        <Route exact path="/register" element={< Register />} />
        <Route exact path="/productDetail" element={<ProductDetails />} />
        <Route exact path="/checkout" element={<CheckOut />} />

      </Routes>
    </div>
  );
}



function HomePage() {
  return (<>
    <Navbar />
    <Categorise />
    <Home />
    <Footer />
  </>)
}

function ProductPage() {
  return (<>  <Navbar /> <Product />  <Footer /> </>)
}


export default App;
