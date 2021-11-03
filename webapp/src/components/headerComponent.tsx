import React from 'react';
import {NavLink} from 'react-router-dom';
import {getToken} from './routes';

function HeaderComponent() {
  return (
      <header className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <h1 className="page-title">Bank Management System</h1>
            {getToken() !== null ?
              <ul className="nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ApplyLoan">Apply Loan</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/UpdateAccount">Update Account Details</NavLink>
                </li>
              </ul>
              : ""
            }
          </div>
        </nav>
      </header>
  );
}

export default HeaderComponent;