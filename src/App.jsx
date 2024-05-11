import { useState } from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experiance from "./components/Experiance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster }from "react-hot-toast";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header/>
      <Home />
      <About />
      <Portfolio />
      <Experiance />
      <Contact />
      <Footer />
      </div>
      <Toaster/>
      
    </>
  )
}

export default App;
