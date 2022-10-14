
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Mens from './Components/Mens';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Mens" element={<Mens category={"men's clothing"} heading={"Men's Collection"}/>}/>
    <Route path="/Woman" element={<Mens category={"women's clothing"} heading={"Woman's Collection"}/>}/>
    <Route path="/Accessories" element={<Mens category={"electronics"} heading={"Accessories Collection"}/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
