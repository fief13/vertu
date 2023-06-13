import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container">
        <div className="row">
          <div className="errorPage">
            <span className="error">404</span>
            <h1 className="title">PAGE NOT FOUND</h1>
            <Link to="/">
              <button className="primaryBtn">CONTINUE SHOPPING</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
