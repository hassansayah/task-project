import "./App.css";
import HomePage from "./pages/HomePage";
import Testimonials from "./pages/Testimonials"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <Routes>
         <Route path="/" element={<HomePage/>} /> 
        <Route path="/testimonials" element={<Testimonials/>} />


      </Routes>
    </div>
  );
}

export default App;
