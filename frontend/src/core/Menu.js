import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";
import { Nav, Navbar, Container } from "react-bootstrap";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#007bff", fontWeight: "400" };
  } else {
    return { color: "#343a40" };
  }
};

const Menu = ({ history }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand
            href="/"
            style={{ color: "#007bff", fontWeight: "700" }}
          >
            TrendSpace
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link
                className="nav-link"
                to="/"
                style={currentTab(history, "/")}
              >
                Home
              </Link>

              <Link
                className="nav-link"
                to="/cart"
                style={currentTab(history, "/cart")}
              >
                Cart
              </Link>

              {isAutheticated() && isAutheticated().user.role === 0 && (
                <Link
                  className="nav-link"
                  to="/user/dashboard"
                  style={currentTab(history, "/user/dashboard")}
                >
                  U Dashboard
                </Link>
              )}
              {isAutheticated() && isAutheticated().user.role === 1 && (
                <Link
                  className="nav-link"
                  to="/admin/dashboard"
                  style={currentTab(history, "/admin/dashboard")}
                >
                  Admin Dashboard
                </Link>
              )}
              {!isAutheticated() && (
                <Fragment>
                  <Link
                    className="nav-link"
                    to="/signup"
                    style={currentTab(history, "/signup")}
                  >
                    Signup
                  </Link>
                  <Link
                    className="nav-link"
                    to="/signin"
                    style={currentTab(history, "/signin")}
                  >
                    SignIn
                  </Link>
                </Fragment>
              )}
              {isAutheticated() && (
                <Link
                  className="nav-link"
                  to="/signin"
                  style={currentTab(history, "/signin")}
                  onClick={() => {
                    signout(() => {
                      history.push("/");
                    });
                  }}
                >
                  Signout
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

// const Menu = ({ history }) => (
//   <div>
//     <ul className="nav nav-tabs bg-dark">
//       <li className="nav-item">
//         <Link style={currentTab(history, "/")} className="nav-link" to="/">
//           Home
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           style={currentTab(history, "/cart")}
//           className="nav-link"
//           to="/cart"
//         >
//           Cart
//         </Link>
//       </li>
//       {isAutheticated() && isAutheticated().user.role === 0 && (
//         <li className="nav-item">
//           <Link
//             style={currentTab(history, "/user/dashboard")}
//             className="nav-link"
//             to="/user/dashboard"
//           >
//             U. Dashboard
//           </Link>
//         </li>
//       )}
//       {isAutheticated() && isAutheticated().user.role === 1 && (
//         <li className="nav-item">
//           <Link
//             style={currentTab(history, "/admin/dashboard")}
//             className="nav-link"
//             to="/admin/dashboard"
//           >
//             A. Dashboard
//           </Link>
//         </li>
//       )}
//       {!isAutheticated() && (
//         <Fragment>
//           <li className="nav-item">
//             <Link
//               style={currentTab(history, "/signup")}
//               className="nav-link"
//               to="/signup"
//             >
//               Signup
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               style={currentTab(history, "/signin")}
//               className="nav-link"
//               to="/signin"
//             >
//               Sign In
//             </Link>
//           </li>
//         </Fragment>
//       )}
//       {isAutheticated() && (
//         <li className="nav-item">
//           <span
//             className="nav-link text-warning"
//             onClick={() => {
//               signout(() => {
//                 history.push("/");
//               });
//             }}
//           >
//             Signout
//           </span>
//         </li>
//       )}
//     </ul>
//   </div>
// );

export default withRouter(Menu);
