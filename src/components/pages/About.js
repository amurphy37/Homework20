import React from "react";
import img from "../../assets/headshot.jpg"

const About = () => (
    <div className="pageDiv">
        <div id="about">
            <div className="container">
                <div className="section-title text-center center">
                    <h2>About Me</h2>
                    <hr></hr>    
                </div>
                <div className="row text-center">
                    <div className="col-md-12 text-center"><img src={img} className="img-responsive" alt="headshot"></img></div>
                    <div className="col-md-12">
                        <div className="about-text text-justify">
                            <p>As a young professional educated in analytical and critical thinking with experience in marketing, sales and business
                            development, I’ve spent the majority of my career in customer-facing roles with software companies. Realizing my own
                            passion for data and creative problem-solving in tech, I returned to the classroom to complete training through the Case
                            Western Reserve University Coding Bootcamp and am seeking to transition to full-stack development on the West Coast.</p>
                            <p>While not working on odd projects I continue to follow my passion in music and cooking, making mixes and honing my skills in the kitchen.</p>
                        </div>    
                    </div>    
                </div>    
            </div>    
        </div>
    </div>
);

export default About;