import './App.css';
import Navbar from './components/HomePanel/Navbar';
import Categorise from './components/HomePanel/Categorise';
import SlideShow from './components/HomePanel/SlideShow';
import HomeCat from './components/HomePanel/Homecat';
import Footer from './components/HomePanel/Footer';
import Product__page from './components/ProductPanel/Product__page';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App" >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Product" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}



function HomePage() {
  return (<><Categorise /><SlideShow /><HomeCat /></>)
}

function ProductPage() {
  return (<><Product__page /> </>)
}










export default App;
