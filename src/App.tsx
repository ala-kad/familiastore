import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import SupplierManager from "./SupplierManager";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/suppliers">Supplier Manager</Link>
        </nav>
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/suppliers" element={<SupplierManager/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
