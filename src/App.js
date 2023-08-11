import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import States from "./Context/States";
import LandingPage from './Pages/LandingPage/LandingPage'
import AFrame from "./Pages/A-Frame/A-Frame";
import AFrameProduct from "./Pages/A-Frame/Product";
import Login from './Pages/Admin/Login'
import Dashboard from './Pages/Admin/Dashboard'
import AllProducts from "./Pages/Extras/AllProducts";
import BestSellers from './Pages/Extras/BestSellers'
import Featured from './Pages/Extras/FeaturedProducts'
import ContactUs from './Pages/Extras/ContactUs'

function App() {
  return (
  <States>
    <div className="App">
        <BrowserRouter>
          <Routes>      
            <Route path="/" element={<LandingPage/>} />
            <Route path="/Product/:ServiceName" element={<AFrame/>} />
            <Route path="/Product" element={<AFrameProduct/>} />
            <Route path="/admin/login" element={<Login/>} />
            <Route path="/admin/dashboard" element={<Dashboard/>} />
            <Route path="/all-products" element={<AllProducts/>} />
            <Route path="/best-sellers" element={<BestSellers/>} />
            <Route path="/featured-products" element={<Featured/>} />
            <Route path="/aboutus" element={<ContactUs/>} />
          </Routes>
        </BrowserRouter>
    </div>
  </States>
  );
}

export default App;
