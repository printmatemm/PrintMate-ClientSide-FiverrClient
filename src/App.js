import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import States from "./Context/States";
import LandingPage from './Pages/LandingPage/LandingPage'
import AFrame from "./Pages/A-Frame/A-Frame";
import AFrameProduct from "./Pages/A-Frame/Product";

function App() {
  return (
  <States>
    <div className="App">
        <BrowserRouter>
          <Routes>      
            <Route path="/" element={<LandingPage/>} />
            <Route path="/Product/:ServiceName" element={<AFrame/>} />
            <Route path="/A-Frame/Product" element={<AFrameProduct/>} />
          </Routes>
        </BrowserRouter>
    </div>
  </States>
  );
}

export default App;
