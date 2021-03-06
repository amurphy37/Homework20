import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Projects from "./components/pages/Projects"
import Contact from "./components/pages/Contact"

function App () {
    return (
        <Router>
            <div>
                <Nav />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
            </div>
        </Router>
    )
}

export default App;
