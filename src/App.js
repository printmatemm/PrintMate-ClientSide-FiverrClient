import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage'
import AFrame from "./Pages/A-Frame/A-Frame";
import AFrameProduct from "./Pages/A-Frame/Product";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>      
            <Route path="/" element={<LandingPage/>} />
            <Route path="/a-frame" element={<AFrame/>} />
            <Route path="/A-Frame/Product" element={<AFrameProduct/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
