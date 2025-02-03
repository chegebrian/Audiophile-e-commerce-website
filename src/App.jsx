
import { Navigate, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Applayout from "./ui/Applayout";


function App() {
  return (
    <Routes>
      <Route element={<Applayout />}>
        {/* <Route index element={<Navigate replace to="/" />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route />
        <Route />
        <Route />
      </Route>
      <Route path="*" element={<p>path not found</p>} />
    </Routes>
  );
}

export default App;
