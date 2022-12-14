
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Collections from './Components/Collections';
import Footer from './Components/Footer';
import Cart from './Components/Cart';

function App() {
  return (
    <>
    
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/Mens" element={<Collections category={"men's clothing"} heading={"Men's Collection"}/>}/>
    <Route path="/Woman" element={<Collections category={"women's clothing"} heading={"Woman's Collection"}/>}/>
    <Route path="/Accessories" element={<Collections category={"electronics"} heading={"Accessories Collection"}/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
