import React from "react";


var Jumbotron = (props) => {
    return(
        <div className="bg-light p-5 rounded-lg m-3">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.description}</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">{props.buttonLabel}</a>
        </div>
)
};

export default Jumbotron;