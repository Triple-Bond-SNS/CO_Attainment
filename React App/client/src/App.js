import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roll from "./pages/roll-list/Roll";
import COs from "./pages/cos/COs";
import Login from "./pages/login/Login";
import Land from "./pages/landing-page/Land";
import Settings from "./pages/settings/Settings"
import POs from "./pages/pos/POs";
import Data from "./pages/data/Data";
import React from "react";
import Register from "./pages/register/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/land" element={<Land />}></Route>
          <Route path="/roll-list" element={<Roll />}></Route>
          <Route path="/cos" element={<COs />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/pos" element={<POs />}></Route>
          <Route path="/data" element={<Data />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
