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
import HomeComponent from './components/HomeComponent/HomeComponent';
import Error404 from './components/Error404/Error404';


// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
