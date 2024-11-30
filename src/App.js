import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./Pages/home/Home";
import Footer from "./components/footer/Footer";
import ErrorPage from "./Pages/errorpage/ErrorPage";
import Todo from "./Pages/todo/Todo";
import Register from "./Pages/register/Register";
import Login from "./Pages/Login/Login";
import { current } from "./JS/Actions/AuthActions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
