import './App.css';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import ForgotPass from './components/Auth/ForgotPass';
import Register from './components/Auth/Register';
import {
  Routes,
  Route
} from "react-router-dom";
import Alert from './Context/alert/Alert';

import CheckOut from './components/Product/CheckOut';


function App() {


  

  return (
    <div className="App" >
      <Alert />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/ForgotPassword" element={<ForgotPass />} />
        <Route exact path="/register" element={< Register />} />
        
        <Route exact path="/checkout" element={<CheckOut />} />

      </Routes>
    </div>
  );
}



export default App;
