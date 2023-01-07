import React from "react";

var NavBar =(props) => {


    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">{props.about}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">{props.services}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">{props.contact}</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )   
};



export default NavBar;


