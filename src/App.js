
import Header from "./components/Header";
import Productos from './components/Productos'
import NuevoProducto from "./components/NuevoProducto";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
        <Header/>
        <div className="container">
          <Routes>
              <Route path="/" Component={Productos}/>
              <Route path="/productos/nuevo" Component={NuevoProducto}/>
              
          </Routes>

        </div>
    </Router>
    
  );
}

export default App;
