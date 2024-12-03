import React from "react";
import "./home.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.AuthReducer.user);
  return (
    <div className="home">
      <div className="text ">
        <h2>Welcome <strong  >{user?.username ||"" }</strong> </h2>
        <h1>
          Organize your <br />
          work and life .
        </h1>
        <p>
          Stay focused, organized, and stress-free with{" "}
          <strong className="Name">Listify</strong>. <br />
          Your all-in-one task manager designed to simplify your life. <br />
          Plan your day, track your tasks, and achieve your goals with ease.{" "}
          <br />
          Experience the world's most intuitive to-do app today!
        </p>
        <Link to="/todo">
  <button className="btn">Make Todo List</button>
</Link>
      </div>
    </div>
  );
};

export default Home;
