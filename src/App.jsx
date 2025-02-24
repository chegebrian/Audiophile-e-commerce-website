import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Applayout from "./ui/Applayout";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";
import Product from "./ui/Product";
import Checkout from "./pages/Checkout";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/:slug" element={<Product />} />
        </Route>
        <Route path="*" element={<p>path not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
