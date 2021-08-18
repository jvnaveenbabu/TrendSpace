import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "text-white p-4",
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron text-dark text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer bg-light mt-auto text-dark">
      {/* <div className="container-fluid bg-success text-white text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-warning btn-lg">Contact Us</button>
      </div>
      <div className="container">
        <span className="text-muted">
          An Amazing <span className="text-white">MERN</span> Bootcamp
        </span>
      </div> */}

      <section className="footer-copyright border-top">
        <p class="text-center text-muted">
          ©{new Date().getFullYear() - 1 + "-" + new Date().getFullYear()}
          Company All rights reserved
        </p>
      </section>
    </footer>
  </div>
);

export default Base;
