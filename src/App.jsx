import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from './pages/Home'
import Shop from './pages/Shop'
import Footer from "./components/Footer"
import ProductDetails from "./pages/ProductDetails"

function App() {

  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/shop" element={<Shop />}  />
      <Route path="/product/:id" element={<ProductDetails />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
