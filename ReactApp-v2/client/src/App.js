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
import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import EditUser from "./components/EditUser/EditUser";
import StudentInfo from "./components/StudentInfo/StudentInfo";
function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setLoginUser={setLoginUser} />}></Route>
          <Route path="/land"
            element={user && user._id ? <Land /> : <Login setLoginUser={setLoginUser} />}>
          </Route>
          <Route path="/roll-list"
            element={user && user._id ? <Roll /> : <Login setLoginUser={setLoginUser} />}>

          </Route>
          <Route path="/cos"
            element={user && user._id ? <COs /> : <Login setLoginUser={setLoginUser} />}>

          </Route>
          <Route path="/settings"
            element={user && user._id ? <Settings /> : <Login setLoginUser={setLoginUser} />}>

          </Route>
          <Route path="/pos"
            element={user && user._id ? <POs /> : <Login setLoginUser={setLoginUser} />}>

          </Route>
          <Route path="/data"
            element={user && user._id ? <Data /> : <Login setLoginUser={setLoginUser} />}>

          </Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="/add" element={<AddUser />}></Route>
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/student-info" element={<StudentInfo/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}
export default App;
