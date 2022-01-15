import './App.css';
import Navbar from './components/Home/Navbar';
import Product__page from './components/Product/Product__page';
import Categorise from './components/Home/Categorise';
import SlideShow from './components/Home/SlideShow';
import HomeCat from './components/Home/Homecat';
import Footer from './components/Home/Footer';
import Login from './components/Auth/Login';
import ForgotPass from './components/Auth/ForgotPass';
import Register from './components/Auth/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App" >
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Product" element={<ProductPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/ForgotPassword" element={<ForgotPasswordPage />} />

          <Route exact path="/register" element={<RegisterPage />} />

        </Routes>
      </div>
    </Router>
  );
}



function HomePage() {
  return (<>  <Navbar /> <Categorise /><SlideShow /><HomeCat /> <Footer /></>)
}

function ProductPage() {
  return (<>  <Navbar /> <Product__page />  <Footer /> </>)
}

function LoginPage() {
  return (<>  <Navbar /> <Login /> </>)
}

function ForgotPasswordPage() {
  return (<>  <Navbar /> <ForgotPass />  </>)
}

function RegisterPage() {

  return (<>  <Navbar /> < Register />  </>)
}

export default App;
