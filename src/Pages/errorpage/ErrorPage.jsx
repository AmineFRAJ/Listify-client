import React from 'react'
import "./error.css"
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className="home d-flex  justify-content-center    ">
    <div className="text ">
      <h1>
      404<br />
       Page Not Found.
      </h1>
      
      <Link to="/" className="btn">
          Home Page
        </Link>
    </div>
  </div>
  )
}

export default ErrorPage