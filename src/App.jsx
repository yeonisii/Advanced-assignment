import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import { getUserInfo } from "./lib/api/auth";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} setUser={setUser} />}>
            <Route index element={<Home user={user} />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile" element={<Profile setUser={setUser} />} />
          </Route>
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
