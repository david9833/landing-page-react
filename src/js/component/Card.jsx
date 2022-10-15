import propTypes from "prop-types";
import React from "react";


var Card = (props) =>{
    return (
        <div className="card ms-4" style={{width: "17rem"}}> 
        <img className="card-img-top" src={props.url} alt="Card image cap" /> 
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
        </div>
      </div>
    )
}


export default Card;