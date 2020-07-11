import React from "react"

const Contact = () => (
    <div className="pageDiv">
       <div className="container">
            <div className=" section-title center">
                <h2>Contact</h2>
                <hr></hr>
            </div>
            <div className="col-md-8 col-md-offset-2">
                <div className=" col-md-4">
                    <i className="fa fa-map-marker fa-2x"></i>
                    <p>Los Angeles, CA</p>
                </div>
                <div className=" col-md-4">
                    <i className="fa fa-envelope-o fa-2x"></i>
                    <p>amurphy37@gmail.com</p>
                </div>
                <div className=" col-md-4">
                    <i className="fa fa-phone fa-2x"></i>
                    <p>+1 (216) 513-9011</p>
                </div>
            </div>
       </div>
    </div>
);

export default Contact;