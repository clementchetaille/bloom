import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import Product from './pages/Product'
import Cart from './pages/Cart'
import { CartProvider } from './components/CartContext'

export default function App() {
  return (
    <BrowserRouter basename="/bloom">
      <CartProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/"            element={<Home />} />
            <Route path="/catalogue"   element={<Catalogue />} />
            <Route path="/produit/:id" element={<Product />} />
            <Route path="/panier"      element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}
