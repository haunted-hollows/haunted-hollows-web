import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import './app.css';


function App() {

    // Get the current route location
    const location = useLocation();
  
    return (
      <div>
        <Navbar></Navbar>
        <Outlet/> 
        <Footer></Footer>
      </div>
    );
  }
  
  export default App;