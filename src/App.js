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
import { useDispatch, useSelector } from "react-redux";
import ErrorNotification from "./components/toastNotifications/ErrorNotification";
import SuccessNotification from "./components/toastNotifications/SuccessNotification";
 
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const authErrors = useSelector((state) => state.AuthReducer.errors);
  const authSuccess = useSelector((state) => state.AuthReducer.success);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);
  return (
    <div>
       {authErrors && authErrors.map((el) => <ErrorNotification error={el} />)}
       {authSuccess && authSuccess.map((el) => <SuccessNotification success={el} />)}
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
