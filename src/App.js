import './App.css';
import Navbar from './components/Navbar';
import Categorise from './components/Categorise';
import SlideShow from './components/SlideShow';
import SubCat from './components/SubCat';
import Flipcart from './components/Flipcart';
// @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");
function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Categorise/>
      <SlideShow/>
      <SubCat title="Deals of the Day"/>
      <SubCat title="Trending Offers"/>
      <SubCat title="Top Picks On Men's Clothing "/>
      <Flipcart/>
      <SubCat title="Top Picks On Men's Clothing "/>
    </div>
  );
}

export default App;
