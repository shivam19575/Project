import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App (){
  

  return (
    
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
