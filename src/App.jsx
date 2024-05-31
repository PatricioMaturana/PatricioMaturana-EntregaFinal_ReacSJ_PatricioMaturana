import { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import Checkout from './components/Checkkout';
import Cart from './components/Cart';
import CartContextProvider from "./components/CartContext";
function App() {
  const [count, setCount] = useState(0)

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"*"} element={<Error404 />} />
          <Route path={"/category/*"} element={<Error404 />} />
        </Routes>
        <Footer />
        </BrowserRouter>
      </CartContextProvider>
  )
}

export default App
