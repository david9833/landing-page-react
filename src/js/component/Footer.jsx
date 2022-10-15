import React from "react";

var Footer = (props) => {
    return (
        <div className=" container-fluid bg-dark">
            <p className="text-white text-center pt-5 pb-4 mt-5">{props.text}</p>
        </div>
    )
}

export default Footer;