import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TakeNotes from "./TakeNotes";
import Display from "./Display";
import Attendance from "./Attendance";
import Pdf from "./Pdf";
import Contests from "./Contest";
import "./home.css";

function Home() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
              <h2>studify</h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    <Link to="display">Home</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="googleSearch">Search Google</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="takeNotes">Take Notes</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                   <Link to="contest">Contest</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                  <Link to="attendance">Attendance</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/takeNotes">
            <TakeNotes />
          </Route>
          <Route path="/display">
            <Display />
          </Route>
          <Route path="/contest">
            <Contests />
          </Route>
          <Route path="/attendance">
            <Attendance />
          </Route>
          <Route path="/googleSearch">
            <Pdf />
          </Route>
        </Switch>
      </Router>
      
    </>
  );
}

export default Home;
