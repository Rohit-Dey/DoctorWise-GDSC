import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Finddoctor from "./components/Finddoctor";
import Contact from "./components/Contact";
import Login from "./components/login_signup/Login";
import Contextprovider from "./components/ContextProvider";
import Register from "./components/login_signup/Register";
function App() {
  return (
    <>
    <Router>
      <Contextprovider>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/finddoctor" element={<Finddoctor/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    </Contextprovider>
    </Router>
    
    <Footer/>
    </>
    
    
    
    
    
  );
}

export default App;
