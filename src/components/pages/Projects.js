import React from "react";
import sushi from "../../assets/sushi.jpg"
import banff from "../../assets/banff.jpg"
import music from "../../assets/playlist.jpg"
const hungryURL = "https://amurphy37.github.io/Project_1/";
const playlistURL = "http://nexttrackup.herokuapp.com/";
const hikingURL = "http://trailtails.herokuapp.com";

const Projects = () => (
    <div className="pageDiv">
        <div className="container">
            <div className="section-title text-center center">
                <h2>Portfolio</h2>
                <hr></hr>
            </div>
        <div className="row">
            <div className="portfolio-items col-sm-6 col-md-4 col-lg4 web">
                <div>
                    <div className="portfolio-item">
                        <a href={hungryURL} target="_blank" rel="noreferrer noopener" title="Recipe Generator App">
                            <div className="hover-bg">
                            <div className="hover-text">
                                <h4>I'm Hungry</h4>
                                <small>Recipe Generator</small>
                            </div>
                            <img src={sushi} className="img-responsive" alt="I'm Hungry"></img>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
                <div className="portfolio-items col-sm-6 col-md-4 col-lg4 web">
                    <div>
                        <div className="portfolio-item">
                            <a href={playlistURL} target="_blank" rel="noreferrer noopener" title="Community Playlist App">
                            <div className="hover-bg">
                                <div className="hover-text">
                                    <h4>NextTrackUp</h4>
                                    <small>Communal Playlist App</small>
                                </div>
                                <img src={music} className="img-responsive" alt="I'm Hungry"></img>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-items col-sm-6 col-md-4 col-lg4 web">
                    <div>
                        <div className="portfolio-item">
                            <a href={hikingURL} target="_blank" rel="noreferrer noopener" title="TrailTails">
                            <div className="hover-bg"> 
                                <div className="hover-text">
                                    <h4>TrailTails</h4>
                                    <small>Dog-Friendly Hiking Community</small>
                                </div>
                                <img src={banff} className="img-responsive" alt="I'm Hungry"></img>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
        </div>

        </div>
    </div>
);

export default Projects;