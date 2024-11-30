import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="text ">
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
        <button className="btn" href="#">Make Todo List</button>
      </div>
    </div>
  );
};

export default Home;
