import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from './pages/Home'
import Shop from './pages/Shop'
import Footer from "./components/Footer"

function App() {

  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/shop" element={<Shop />}  />
     </Routes>
     <Footer />
    </>
  )
}

export default App
