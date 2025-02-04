import { Navigate, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Applayout from "./ui/Applayout";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import Speakers from "./pages/Speakers";

function App() {
  return (
    <Routes>
      <Route element={<Applayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/speakers" element={<Speakers />} />
      </Route>
      <Route path="*" element={<p>path not found</p>} />
    </Routes>
  );
}

export default App;
