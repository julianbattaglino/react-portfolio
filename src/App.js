import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Error404 from './components/Error404/Error404';


// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ChakraProvider>
  )
}

export default App;
